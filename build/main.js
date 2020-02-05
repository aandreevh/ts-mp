"use strict";
exports.__esModule = true;

var grammar_1 = require("./grammar");
var tree_1 = require("./tree");
var cfg = new grammar_1.CFG("../grammars/english/grammar.js");
console.log(JSON.stringify(cfg.parse("[v|n|1]")));
var n = tree_1.Node.fromBasicArray([1]);
console.log(n.toString());
//# sourceMappingURL=main.js.map