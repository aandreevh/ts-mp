import {CFG} from "./grammar/grammar"
import {Node} from "./tree"
//const cfg : CFG = new CFG(__dirname+'/grm/grammar.js');
//console.log(JSON.stringify(cfg.parse("all but me @anna")));


const b = new CFG.LexerBuilder();

const lex = b.add('space',/ +/)
.add('integer',/[0-9]+/).addAll({q:['a'], p:['a']}).build();

console.log();

const rules = (new CFG.GrammarBuilder())
.add({name: 'S',symbols:[{tag:'+', symbols:[{type: 'q'}]}],postprocessor: x=>x[0]}).build();

console.log(JSON.stringify(rules));

const cfg = new CFG.CFG(lex,rules,'S');


console.log(JSON.stringify(cfg.parse('a')));
