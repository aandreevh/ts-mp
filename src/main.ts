import * as nearley  from "nearley"

const grammar = require("../grammars/english/grammar.js");

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.feed("[pr|0][v|0][pr|0][det|0][n|0]")
console.log(JSON.stringify(parser.results[0]));


