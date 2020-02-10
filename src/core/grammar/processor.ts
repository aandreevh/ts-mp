import {Evaluateable} from '../runtime/evaluator'

//Incorrect types definition :(
export type Postprocessor = (data: any)=> any;
export type FunctionalPostprocessor = (...data: any)=> any;

export namespace Postprocess{
    
    export const  id = () : Postprocessor =>(data: any)=>{
        return data;
    }

    export const  log = () : Postprocessor =>(data: any) =>{
       return data;
    }

    
    export const  idn = () : Postprocessor =>(data: any)=>{
        return null;
    }

    export const  idi = () : Postprocessor =>(data: any)=>{
        return data[0];
    }

    export const  idcon = () : Postprocessor =>([f,...data]: any)=>{
        return f.concat(data);
    }

    export const dropArr = (...indexes) : Postprocessor =>(data : any)=>{
   
        return data;
    }
    
    export const filter = (...indexes) : Postprocessor =>(data : any)=>{
        const narr = [];

        indexes.forEach((el) =>  narr[narr.length] = data[el]);

        return narr;
    }

        
    export const removeOdd = (indexes) : Postprocessor =>(data : any)=>{
      
        return data.map((el,index)=>{
            if(indexes.find(x => x==index) !=null){
             
                return el.filter((_,i)=> i%2==0);
            }else return el;
        });
    }

    export const valueConvetion  = (f : FunctionalPostprocessor) : Postprocessor =>(data: any)=>{

        function mapChildren(x){
            if(x== null) return null;
            else if(x instanceof Evaluateable) return new Evaluateable(x.value,x.handler)
            else return x.value
        }
       
        return new Evaluateable(data.map(x => {
            return Array.isArray(x) ? x.map(mapChildren) :  mapChildren(x);
        }),f);
      
    }
    

    export var pipe = (a? :Postprocessor,...func:Postprocessor[]) => (data)=>{
        if(a === undefined) return data;
        return pipe(...func)(a(data));
    };
    
}