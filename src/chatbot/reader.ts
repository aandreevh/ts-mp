import {ContextExecutor,ContextExecutorBuilder} from '../lang/executor'
import { Postprocess } from '../lang/core/grammar/processor';
import { Evaluateable } from '../lang/core/runtime/evaluator';
import { EventEmitter } from 'events';


export const executor = (new ContextExecutorBuilder()).build(
    {
        'S' : [
            {
                descriptor : '$Date',
            handler: (dur : any)=>{
                console.log(dur);
                
                
                    
            }
        },
        {
            descriptor : '$Action',
            handler: (action : Evaluateable<any>)=>{
                action.eval();
            }
        }
        
    ],

    'Action':[
        {
        descriptor : 'Tell %member %string',
        handler: (member : {id:string},text : string)=>{
               console.log(`${member.id}: ${text}`);
        }
    }

]
}
);


