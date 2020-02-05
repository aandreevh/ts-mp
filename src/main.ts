import {CFG}  from "./grammar"
import {Node} from "./tree"


const cfg : CFG = new CFG("../grammars/english/grammar.js");
console.log(JSON.stringify(cfg.parse("[v|n|1]")));

let n : Node<Number> = Node.fromBasicArray([1]);

console.log(n.toString());
