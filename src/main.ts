import {ContextExecutor,ContextExecutorBuilder} from './executor'
import { Evaluateable } from './core/runtime/evaluator';

const executor : ContextExecutor = (new ContextExecutorBuilder()).build(
    {
        'S' : {
            descriptor : '$Date',
            handler: (obj : any)=>{
                console.log(obj);
                return obj;
            }
        }
    }
);

const obj :Evaluateable<Date> | Error = executor.evaluate("25th December 1887year at 3:15");

if(obj instanceof Error){
    console.log("Error",JSON.stringify(obj));
    
}else {
    (obj as Evaluateable<Date>).eval();
}