import {LexerDictionary,CFG,LexerBuilder,GrammarBuilder,TagResolverRegistry,LexerRule} from './grammar'
import {CompiledRules} from 'nearley'
export class AdvancedCFGBuilder{

    public lexerBuilder : LexerBuilder;
    public grammarBuilder : GrammarBuilder;

    constructor(tagRegistry?:TagResolverRegistry){
        this.lexerBuilder = new LexerBuilder();
        this.grammarBuilder = new GrammarBuilder(tagRegistry || undefined)
    }

   
    addGrammarFromFile(file : string,
        grammarFile :string='grammar.js',
        lexerFile : string ='lexer.js') : AdvancedCFGBuilder{
        const grammar : CompiledRules  = require(file+"/"+grammarFile);
        const lexer : LexerDictionary = require(file + "/"+lexerFile);
        
        this.lexerBuilder.addAll(lexer);
        this.grammarBuilder.addRuleAll(grammar.ParserRules);

       return this;
    }

    
    build(start : string = 'S') : CFG{
       return new CFG(this.lexerBuilder.build(),
       this.grammarBuilder.build(),
       start);
    }

}


