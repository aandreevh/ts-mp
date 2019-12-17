"use strict";
exports.__esModule = true;
var nearley = require("nearley");
var grammar = require("../grammars/english/grammar.js");
var parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
parser.feed("[v][pr][det][adj][n][rel][v][n]");
console.log(JSON.stringify(parser.results[0]));
//# sourceMappingURL=main.js.map