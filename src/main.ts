import {ContextualExecutor} from './executor'
import { Postprocess } from './core/grammar/processor';
import { Evaluateable } from './core/runtime/evaluator';

const executor : ContextualExecutor = (new ContextualExecutor()).build(
    {
        'S' : {
            descriptor : '%member',
            handler: (x : number[]) => x.reduce((p,c)=>p+c,0)
        },
        'Group': [
            {
                descriptor: '$Group and $Group',
                handler: Postprocess.id()
            },
            {
                descriptor: '+%member',
                handler: Postprocess.id()
            }
        ]
    }
);



const obj :Evaluateable<number> = executor.evaluate('<@UU>');
console.log(JSON.stringify(obj));
