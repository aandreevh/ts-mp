import {FunctionDescriptor,FuncBaseDescription} from './runtime'
import {AdvancedCFGBuilder} from '../grammar/advanced'
import {GrammarSymbol,BasicGrammarSymbol} from '../grammar/grammar';
import {Postprocess} from '../grammar/processor'
import {ContextEvaluator} from './evaluator'



export class CFGContextBuilder{

    constructor(public cfgBuilder : AdvancedCFGBuilder =  new AdvancedCFGBuilder()) {}


    addFunctionDescriptor(descriptor : FunctionDescriptor,spacing: GrammarSymbol = {type:'space'}): CFGContextBuilder{
        const mapIndex : number[]=[],longIndex :number[]=[];
        const symbols : GrammarSymbol[]=[];
        let counter =0;
        descriptor.structure.forEach((el,index) => {
            var symVal :BasicGrammarSymbol = null;
            switch(el.type){
                case '%':
                        symVal= {type: el.attribute};
                        mapIndex.push(counter);
                break;
                case '$':
                        symVal = el.attribute;
                        mapIndex.push(counter);
                        break;
                default:
                        symVal = {literal: el.attribute};
                break;
            }

            switch(el.tag){
                case '':
                        symbols.push(symVal);
                        if(index != descriptor.structure.length-1){
                            symbols.push(spacing);
                            counter++;    
                        }
                break;
                case '?':
                    if(index != descriptor.structure.length-1){
                        symbols.push({tag: el.tag, symbols: [symVal,spacing]}); 
                    }else{
                        symbols.push({tag: el.tag, symbols: [symVal]}); 
                    }
                        
                break;
                case '*':
                        symbols.push({tag: el.tag, symbols:[symVal],value:spacing});
                        longIndex.push(counter);
                    break;
                case '+':
                        symbols.push({tag: el.tag, symbols:[symVal],value:spacing});
                        longIndex.push(counter);
                break;
                default:
                   
                    throw new Error(`Operator '${el.tag}' on '${el.attribute}' not recognized!`);
                break;
            }

            counter++;
          
        });

        this.cfgBuilder.grammarBuilder
        .add({name:descriptor.returnType,
            symbols:symbols,
            postprocessor:Postprocess.pipe(   
                Postprocess.removeOdd(longIndex), //for spaces
                Postprocess.filter(...mapIndex),
                Postprocess.valueConvetion(descriptor.handler)
            )});
        

        return this;
    }

    addDescription(returnValue : string,descriptor : string,handler : (arg0 : any) => any,spacing: GrammarSymbol = {type:'space'}) :CFGContextBuilder{
        this.addFunctionDescriptor(FunctionDescriptor.parseFunction(returnValue,descriptor,handler),spacing);
        return this;
    }

    

    addAllDescription(x : {[arg:string] : FuncBaseDescription | FuncBaseDescription[]},spacing: GrammarSymbol = {type:'space'}):CFGContextBuilder{
    
        for(const returnValue in x){
            const val =  x[returnValue];
            if(Array.isArray(val)){
                for(const dat of val){
                    this.addDescription(returnValue,dat.descriptor,dat.handler);
                }
            }else{
                this.addDescription(returnValue,val.descriptor,val.handler,spacing);
            }
             }
        return this;
    }



    build() : ContextEvaluator{
        return new ContextEvaluator(this.cfgBuilder.build());
    }
}
