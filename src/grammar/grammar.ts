import {Parser,Grammar,ParserRule} from "nearley"
import {Lexer,Rule as LRule,compile} from 'moo'


export type LexerRule = RegExp | string | string[] | LRule | LRule[];

export class LexerBuilder{
    private rules : {[x:string] : LexerRule} ={};

    add(name : string,rule : LexerRule) : LexerBuilder{
        this.rules[name] = rule;
        return this;
    }
    addAll(arg : {[d:string]: LexerRule}) : LexerBuilder{
        for(let t in arg) this.add(t,arg[t]);   
        return this;
    }

    build() : Lexer{
        return compile(this.rules)
    }
}

export type GrammarSymbol =RegExp|string | {type: string} | {literal:string};
export interface TaggedGrammarSymbol {tag:string; symbol:GrammarSymbol}

type GrammarRule = {
 name: string,
 symbols : [GrammarSymbol|TaggedGrammarSymbol],
 postprocessor : (data: any[], reference: number, wantedBy: {})=> any //Incorrect types definition :(
}

export interface GrammarSymbolGenerator{
    reset() : GrammarSymbolGenerator;
    generate(TaggedGrammarSymbol,rules:ParserRule[]) : GrammarSymbol[];
    supports(TaggedGrammarSymbol) : boolean;
}

export class BasicSymbolGenerator implements GrammarSymbolGenerator{
    private stateCounter : number =0;
    public static MAGIC_STRING : string = "state_$$$";
    reset(): GrammarSymbolGenerator {
        this.stateCounter = 0;
        return this;
    }   
    genUniqId() : string{
        return BasicSymbolGenerator.MAGIC_STRING + (this.stateCounter++);
    }
    generate(symbol: TaggedGrammarSymbol,rules:ParserRule[]) : GrammarSymbol[] {
        const idn = _=>null;
        const id = x =>x;
        const idi = x=>x[0];
        const idcon = d=>d[0].concat([d[1]]);

        var uuid:string='';
        var uuid1:string='';
        if(this.supports(symbol)){
            switch(symbol.tag){
                case '?':
                    uuid = this.genUniqId();
                    rules.push({name: uuid,symbols:[],postprocess: idn});
                    rules.push({name: uuid,symbols:[symbol.symbol],postprocess: idi});
                    return [uuid];
                break;
                
                case '+':
                    uuid = this.genUniqId();
                    rules.push({name:uuid,symbols:[uuid,symbol.symbol],postprocess:idcon});
                    rules.push({name:uuid,symbols:[symbol.symbol]});
                    return [uuid];
                break;
                case '*':
                    uuid = this.genUniqId();
                    rules.push({name:uuid,symbols:[uuid,symbol.symbol],postprocess:idcon});
                    rules.push({name: uuid,symbols:[],postprocess:idn});
                    return [uuid];
                break;
            }
        }


        throw new Error(`Unsupported tag ${symbol.tag}!`);
}

    supports(sym : TaggedGrammarSymbol): boolean {
        return ['?','+','*'].find(x=> x===sym.tag) !=null;
    }


}

export class GrammarBuilder{
 private rules : GrammarRule[] =[];

 constructor(private generator : GrammarSymbolGenerator = new BasicSymbolGenerator()){}

  add(...rules : GrammarRule[]) : GrammarBuilder{
    for(const rule of rules){
        this.rules.push(rule)
    }
    return this;
 }

 build() : ParserRule[]{
     const genRules : ParserRule[] =[];
     this.generator.reset();

     for(const rule of this.rules){
        let curRule :ParserRule= {name : rule.name,
                                postprocess : rule.postprocessor,
                                symbols : []};
        for(const sym of rule.symbols){
            if('tag' in (sym as any)){
                this.generator.generate(sym,genRules).forEach(s =>curRule.symbols.push(s));
            }else{
                curRule.symbols.push(sym);
            }
        }
        genRules.push(curRule);
     }
     return genRules;
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