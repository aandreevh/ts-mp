import * as nearley  from "nearley"

const grammar = require("../grammars/english/grammar.js");

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.feed("[n|v|1]")
console.log(JSON.stringify(parser.results[0]));


