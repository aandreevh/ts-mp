import {CFG} from "./core/grammar/grammar"
import {AdvancedCFGBuilder} from './core/grammar/advanced'
import {FunctionDescriptor} from './core/runtime/runtime';
import {CFGContextBuilder} from './core/runtime/builder';
//const cfg : CFG = new CFG(__dirname+'/grm/grammar.js');
//console.log(JSON.stringify(cfg.parse("all but me @anna")));

console.log(__dirname+'/grm/grammar.js');

const advancedBuider = new AdvancedCFGBuilder();

advancedBuider.addGrammarFromFile(__dirname+'/grm');
advancedBuider.lexerBuilder.addIdentityToken();

const builder = new CFGContextBuilder(advancedBuider);
builder.addFunctionDescriptor(FunctionDescriptor
    .parseFunction('S','send +%member %string',(members,message)=>{
        console.log(JSON.stringify(members));
    }
),{type:'space'});

const cfg = builder.build().build();


console.log(JSON.stringify(advancedBuider.grammarBuilder));
console.log("");
console.log(JSON.stringify(cfg.parse('send @a "sadasdsa"')));

