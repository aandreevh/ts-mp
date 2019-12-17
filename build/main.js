"use strict";
exports.__esModule = true;
var nearley = require("nearley");
var grammar = require("../grammars/english/grammar.js");
var parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
parser.feed("[n|v|1]");
console.log(JSON.stringify(parser.results));
//# sourceMappingURL=main.js.map