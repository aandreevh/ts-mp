import {ContextExecutor,ContextExecutorBuilder} from './executor'
import { Evaluateable } from './core/runtime/evaluator';

const executor : ContextExecutor = (new ContextExecutorBuilder()).build(
    {
        'S' : {
            descriptor : '$Period',
            handler: (obj : any)=>{
                console.log(JSON.stringify(obj));
                return obj;
            }
        }
    }
);

const obj :Evaluateable<Date> | Error = executor.evaluate("from 1 Jan. to 3th Jan.");

if(obj instanceof Evaluateable){
    (obj as Evaluateable<Date>).eval();
}else {

    console.log("Error",JSON.stringify(obj));
 }
