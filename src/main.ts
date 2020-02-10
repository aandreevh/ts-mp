import {CFG} from "./core/grammar/grammar"
import {AdvancedCFGBuilder} from './core/grammar/advanced'
import {CFGContextBuilder,ContextEvaluator} from './core/runtime/builder';
import {Postprocess} from './core/grammar/processor';

const advancedBuider = new AdvancedCFGBuilder();

advancedBuider.addGrammarFromFile(__dirname+'/grm');
advancedBuider.lexerBuilder.addIdentityToken();

const builder = new CFGContextBuilder(advancedBuider);

const evaluator : ContextEvaluator = builder.addAllDescription({
    'S' :{
      descriptor : 'send ?$Group %string',
      handler : (u,v) =>[{group: u},{message: v}]
    },
    'Group':[
     
        {
            descriptor: '$Group and $Group',
            handler: (u,v) => u.concat(v)
        },
        {
            descriptor: '$Group or $Group',
            handler: (u,v) => [u,v]
        },
        {
            descriptor: '+%member',
            handler: Postprocess.id()
        },
        {
            descriptor: 'not $Group',
            handler: (u) => ["!",u]
        },
    ]
}).build();


console.log(`${JSON.stringify(advancedBuider.grammarBuilder)}\n`);

console.log(JSON.stringify(evaluator.eval('send @andrey @georgy and @yqavor "hello!"')));

