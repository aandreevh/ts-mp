import {ContextExecutor,ContextExecutorBuilder} from './lang/executor'
import { Postprocess } from './lang/core/grammar/processor';
import { Evaluateable } from './lang/core/runtime/evaluator';
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


const executor : ContextExecutor = (new ContextExecutorBuilder()).build(
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



const obj :any = executor.evaluate('timeout 1500 andrey "hi"');
console.log(obj.eval(env));
