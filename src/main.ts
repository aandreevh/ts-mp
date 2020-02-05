import {CFG}  from "./grammar/grammar"
import {Node} from "./tree"

const cfg : CFG = new CFG(__dirname+'/../grammars/english/grammar.js');
console.log(JSON.stringify(cfg.parse("[v|n|1]")));

let n : Node<Number> = Node.fromBasicArray([1,[2,3,4]]);

console.log(n.toString());
