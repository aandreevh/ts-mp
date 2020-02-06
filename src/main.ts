import {CFG,LexerBuilder,GrammarBuilder}  from "./grammar/grammar"
import {Node} from "./tree"

//const cfg : CFG = new CFG(__dirname+'/grm/grammar.js');
//console.log(JSON.stringify(cfg.parse("all but me @anna")));


const b = new LexerBuilder();

const lex = b.add('space',/ +/)
.add('integer',/[0-9]+/).addAll({q:/a/}).build();

console.log();

const rules = (new GrammarBuilder())
.add({name: 'S',symbols:[{tag:'?', symbol:{type: 'q'}}],postprocessor: x=>x}).build();

console.log(JSON.stringify(rules));

const cfg = new CFG(lex,rules,'S');


console.log(JSON.stringify(cfg.parse('a')));
