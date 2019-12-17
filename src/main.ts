import * as nearley  from "nearley"

const grammar = require("../grammars/english/grammar.js");

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.feed("[v][pr][det][adj][n][rel][v][n]")
console.log(JSON.stringify(parser.results[0]));



