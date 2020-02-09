import {Parser,Grammar,ParserRule} from 'nearley'
import {Lexer,Rule as LRule,compile} from 'moo'
import {Postprocessor,Postprocess} from './processor'

    export type LexerRule = RegExp | string | string[] | LRule | LRule[];
    export type LexerDictionary =  {[x:string] : LexerRule};
    export class LexerBuilder{
        private rules : LexerDictionary ={};
    
        add(name : string,rule : LexerRule) : LexerBuilder{
            this.rules[name] = rule;
            return this;
        }
        addAll(arg : LexerDictionary) : LexerBuilder{
            for(let t in arg) this.add(t,arg[t]);   
            return this;
        }
        addIdentityToken(name: string = 'keyword',regex : RegExp =/[0-9]*[a-zA-Z_-]+[a-zA-Z0-9_-]*/) : LexerBuilder{
            this.add(name,regex);
            return this;
        }   
    
        build() : Lexer{
            return compile(this.rules)
        }
    }
    
    export type BasicGrammarSymbol =RegExp|string | {type: string} | {literal:string};
    export type AdvancedGrammarSymbol= {tag:string; symbols:GrammarSymbol[]; value?: any}
    export type GrammarSymbol = BasicGrammarSymbol|AdvancedGrammarSymbol;
    
   
    type GrammarRule = {
     name: string,
     symbols : GrammarSymbol[],
     postprocessor? : Postprocessor
    }

    export type AdvancedSymbolResolver =  (arg0:ParserRule,arg1 :AdvancedGrammarSymbol) =>void;
    export type TagResolverRegistry = {[x : string] : AdvancedSymbolResolver};
    export const defaultResolverRegistry ={
        '?': function(prule:ParserRule,ptag :AdvancedGrammarSymbol){
            const uuid = this.generateUniqueId();
        
            this.addRule1(uuid,[],Postprocess.idn());
            this.add({name:uuid,symbols:ptag.symbols,postprocessor:Postprocess.idi()});
            prule.symbols.push(uuid);
        },

        '*': function(prule:ParserRule,ptag :AdvancedGrammarSymbol){
            const uuid = this.generateUniqueId();
            this.addRule1(uuid,[]);
            this.add({name:uuid,symbols: [uuid,...ptag.symbols],postprocessor: Postprocess.idcon()});
            prule.symbols.push(uuid);
        },
        '+': function(prule:ParserRule,ptag :AdvancedGrammarSymbol){
            const uuid = this.generateUniqueId();
            this.add({name:uuid,symbols: [uuid,...ptag.symbols],postprocessor: Postprocess.idcon()});
            this.add({name:uuid,symbols:ptag.symbols});
            prule.symbols.push(uuid);
        }
    }
    
    export class GrammarBuilder{
     private rules : ParserRule[] =[];
     private generatorCount =0;
     private static MAGIC_STRING = "state_$$"

    constructor(private resolvers : TagResolverRegistry = defaultResolverRegistry){}
    
    private generateUniqueId() : string{
        return GrammarBuilder.MAGIC_STRING + (this.generatorCount++);
    }

      addAll(...rules : GrammarRule[]) : GrammarBuilder{
        rules.forEach(this.add.bind(this));
        return this;
     }

    addRule(rule : ParserRule):GrammarBuilder{
        this.rules.push(rule)
        return this;
    } 

    addRuleAll(rules: ParserRule[]){
        rules.forEach(this.addRule.bind(this));
    }

    addRule1(name:string
        ,symbols: GrammarSymbol[]=[],postprocess: Postprocessor=Postprocess.id()):GrammarBuilder{
        return this.addRule({name,symbols,postprocess});
    }

     add(rule : GrammarRule) : GrammarBuilder{
        
        let prule :ParserRule = {
            name : rule.name,
            postprocess : rule.postprocessor || Postprocess.id(),
            symbols : []};

            for(const sym of rule.symbols){
                if( sym instanceof Object && 'tag' in (sym as any)){
                    const tag = (sym as AdvancedGrammarSymbol).tag;
                    const resolver = this.resolvers[tag];
                   
                    if(!resolver) throw new Error(`Tag ${tag} not supported!`);
                    resolver.call(this,prule,sym);
                }else{
                    prule.symbols.push(sym);
                }
            }

            this.addRule(prule);
        return this;
     }
     build() : ParserRule[]{
         return this.rules;
     }
}
    
    export class CFG{
        private parser : Parser;
    
        constructor(lexer: Lexer,rules:ParserRule[],start :string){
            this.parser = new Parser(Grammar.fromCompiled({
                Lexer : lexer,
                ParserStart : start,
                ParserRules : rules
            }));
        }
    
        
        parse(data : string){
            this.parser.feed(data);
            
           return this.parser.results;
        }
    }