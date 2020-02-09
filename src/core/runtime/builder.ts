import {FunctionDescriptor} from './runtime'
import {AdvancedCFGBuilder} from '../grammar/advanced'
import { GrammarSymbol,BasicGrammarSymbol } from '../grammar/grammar';
import {Postprocess} from '../grammar/processor'
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
                break;
                case '$':
                        symVal = el.attribute;
                    
                        break;
                default:
                        symVal = {literal: el.attribute};
                break;
            }
            if(el.type != '')mapIndex.push(counter);
            switch(el.tag){
                case '':
                        symbols.push(symVal);
                        if(index != descriptor.structure.length-1){
                            symbols.push(spacing);
                            counter++;
                        }
                        
                break;
                case '?':
                        symbols.push({tag: el.tag, symbols: [symVal,spacing]}); 
              
                break;
                case '*':
                        symbols.push({tag: el.tag, symbols:[symVal,spacing]});
                        longIndex.push(counter);
                    break;
                case '+':
                        symbols.push({tag: el.tag, symbols:[symVal,spacing]});
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
                Postprocess.removeOdd(longIndex),
                Postprocess.filter(...mapIndex),
                Postprocess.valueConvetion(descriptor.handler)
            )});
        

        return this;
    }


    addUnparsed()


    build() : AdvancedCFGBuilder{
        return this.cfgBuilder;
    }
}