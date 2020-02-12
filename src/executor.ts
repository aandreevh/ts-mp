import {CFG} from "./core/grammar/grammar"
import {AdvancedCFGBuilder} from './core/grammar/advanced'
import {CFGContextBuilder} from './core/runtime/builder';
import {ContextEvaluator, Evaluateable} from './core/runtime/evaluator';
import { FuncBaseDescription } from "./core/runtime/runtime";



export class ContextExecutorBuilder{

    constructor(private path :string = '/grm'){ }

    build( definitions : {[arg:string] : FuncBaseDescription | FuncBaseDescription[]}):ContextExecutor{
        const advancedBuider = new AdvancedCFGBuilder();
        advancedBuider.addGrammarFromFile(__dirname+this.path);
        advancedBuider.lexerBuilder.addIdentityToken();

        const builder = new CFGContextBuilder(advancedBuider);
        builder.addAllDescription(definitions);
        console.log(JSON.stringify(builder.cfgBuilder.grammarBuilder.build().length));
        
        return new ContextExecutor(builder.build());
    }


}

export class ContextExecutor{

    constructor(private evaluator : ContextEvaluator){}


    evaluate<T>(data : string): Evaluateable<T> | Error{
        return this.evaluator.eval<T>(data);
    }
}