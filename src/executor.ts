import {CFG} from "./core/grammar/grammar"
import {AdvancedCFGBuilder} from './core/grammar/advanced'
import {CFGContextBuilder} from './core/runtime/builder';
import {ContextEvaluator, Evaluateable} from './core/runtime/evaluator';
import { FuncBaseDescription } from "./core/runtime/runtime";



export class ContextualExecutor{

    
    private evaluator : ContextEvaluator;

    constructor(private path :string = '/grm'){ }

    build( definitions : {[arg:string] : FuncBaseDescription | FuncBaseDescription[]}):ContextualExecutor{
        const advancedBuider = new AdvancedCFGBuilder();
        advancedBuider.addGrammarFromFile(__dirname+this.path);
        advancedBuider.lexerBuilder.addIdentityToken();

        const builder = new CFGContextBuilder(advancedBuider);
        builder.addAllDescription(definitions);

        this.evaluator = builder.build();
        return this;
    }


    evaluate<T>(data : string): Evaluateable<T>{
        return this.evaluator.eval<T>(data);
    }

}