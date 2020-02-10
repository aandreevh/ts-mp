import {CFG} from '../grammar/grammar';

export type LazyPostprocessor =(... arg0 :any[]) => any

export class Evaluateable<T>{
    constructor(public value : any[],public handler :LazyPostprocessor ){}

    eval(...args: any[]) : T{
        return this.handler(...[...this.value,...args]);
    }
}



export function evaluate<T>(x : any,...args: any[]){
    if(x instanceof Evaluateable){
        return x.eval(...args);
     }else{
         if(Array.isArray(x)){
             return x.map(y=> evaluate<any>(y,...args));
         }else{
            return x;
         }
       
     }
}

export class ContextEvaluator{


    constructor(public cfg :CFG){}


    eval<T>(data:string) : Evaluateable<T>{
        try{
            const result = this.cfg.parse(data);
            return result[0];
        }catch(e){
            console.log(JSON.stringify(e));
        }
   

    }
}