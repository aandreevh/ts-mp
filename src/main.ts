import {ContextExecutor,ContextExecutorBuilder} from './executor'
import { Evaluateable } from './core/runtime/evaluator';

const executor : ContextExecutor = (new ContextExecutorBuilder()).build(
    {
        'S' : {
            descriptor : '$Date',
            handler: (obj : any)=>{
                console.log(JSON.stringify(obj));
                return obj;
            }
        }
    }
);

const obj :Evaluateable<Date> | Error = executor.evaluate("1 week before 2hours and 3 minutes after 3 days before 22 Dec. at 15 o'clock am");

if(obj instanceof Error){
    console.log("Error",JSON.stringify(obj));
    
}else {
    (obj as Evaluateable<Date>).eval();
}