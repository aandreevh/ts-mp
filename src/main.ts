import {ContextualExecutor} from './executor'
import { Postprocess } from './core/grammar/processor';
import { Evaluateable } from './core/runtime/evaluator';
import { EventEmitter } from 'events';

let env = {
    emitter : new EventEmitter(),
    print : console.log
}

function ff(environment : any){


    return (time : number , task : Evaluateable<string>)=>{
        
        setTimeout(()=>{
            environment.emitter.emit('event');
        },  time );
        environment.emitter.on('event',()=>{

            environment.print(task.eval());
        })
   
    }
}


const executor : ContextualExecutor = (new ContextualExecutor()).build(
    {
        'S' : {
            descriptor : 'timeout %number $Task',
            handler: ff(env)
        },
        'Task':{
            descriptor : '%keyword %string',
            handler: (keyword :string,str:string)=>{
                if(keyword === 'andrey'){
                    return "mnoo e lud"
                }

                return str;
            }
        },
    }
);



const obj :Evaluateable<number> = executor.evaluate('timeout 1500 andrey "hi"');
console.log(obj.eval(env));
