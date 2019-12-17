// Generated automatically by nearley, version 2.19.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

 const g = require("./code.js")
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "S", "symbols": ["NP", "VP"]},
    {"name": "S", "symbols": ["VP"]},
    {"name": "NP", "symbols": ["Pronoun"]},
    {"name": "NP", "symbols": ["PN"]},
    {"name": "NP", "symbols": ["Nominal"]},
    {"name": "Nominal$ebnf$1", "symbols": ["Determiner"], "postprocess": id},
    {"name": "Nominal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Nominal$ebnf$2", "symbols": ["ADD"], "postprocess": id},
    {"name": "Nominal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Nominal", "symbols": ["Nominal$ebnf$1", "Nominal$ebnf$2", "Noun", "Nominal"]},
    {"name": "Nominal", "symbols": ["Nominal", "RelClause", "VP"]},
    {"name": "Nominal$ebnf$3", "symbols": ["Determiner"], "postprocess": id},
    {"name": "Nominal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Nominal$ebnf$4", "symbols": ["ADD"], "postprocess": id},
    {"name": "Nominal$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Nominal", "symbols": ["Nominal$ebnf$3", "Nominal$ebnf$4", "Noun"]},
    {"name": "Nominal", "symbols": ["Nominal", "PP"]},
    {"name": "ADD$ebnf$1", "symbols": ["ADD"], "postprocess": id},
    {"name": "ADD$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ADD", "symbols": ["ADD$ebnf$1", "Adjective"]},
    {"name": "VP", "symbols": ["Verb"]},
    {"name": "VP", "symbols": ["Verb", "NP"]},
    {"name": "VP", "symbols": ["Verb", "NP", "PP"]},
    {"name": "VP", "symbols": ["Verb", "PP"]},
    {"name": "PP$ebnf$1", "symbols": ["Preposition"], "postprocess": id},
    {"name": "PP$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "PP", "symbols": ["PP$ebnf$1", "NP"]},
    {"name": "N$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "N$ebnf$1", "symbols": ["N$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "N", "symbols": ["N$ebnf$1"], "postprocess": g.NUM},
    {"name": "Noun$macrocall$2", "symbols": [{"literal":"n"}]},
    {"name": "Noun$macrocall$1", "symbols": [{"literal":"["}, "Noun$macrocall$2", "N", {"literal":"]"}]},
    {"name": "Noun$macrocall$1", "symbols": [{"literal":"["}, "Noun$macrocall$2", {"literal":"]"}], "postprocess": g.TAG},
    {"name": "Noun", "symbols": ["Noun$macrocall$1"]},
    {"name": "Verb$macrocall$2", "symbols": [{"literal":"v"}]},
    {"name": "Verb$macrocall$1", "symbols": [{"literal":"["}, "Verb$macrocall$2", "N", {"literal":"]"}]},
    {"name": "Verb$macrocall$1", "symbols": [{"literal":"["}, "Verb$macrocall$2", {"literal":"]"}], "postprocess": g.TAG},
    {"name": "Verb", "symbols": ["Verb$macrocall$1"]},
    {"name": "Adjective$macrocall$2$string$1", "symbols": [{"literal":"a"}, {"literal":"d"}, {"literal":"j"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Adjective$macrocall$2", "symbols": ["Adjective$macrocall$2$string$1"]},
    {"name": "Adjective$macrocall$1", "symbols": [{"literal":"["}, "Adjective$macrocall$2", "N", {"literal":"]"}]},
    {"name": "Adjective$macrocall$1", "symbols": [{"literal":"["}, "Adjective$macrocall$2", {"literal":"]"}], "postprocess": g.TAG},
    {"name": "Adjective", "symbols": ["Adjective$macrocall$1"]},
    {"name": "Pronoun$macrocall$2$string$1", "symbols": [{"literal":"p"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Pronoun$macrocall$2", "symbols": ["Pronoun$macrocall$2$string$1"]},
    {"name": "Pronoun$macrocall$1", "symbols": [{"literal":"["}, "Pronoun$macrocall$2", "N", {"literal":"]"}]},
    {"name": "Pronoun$macrocall$1", "symbols": [{"literal":"["}, "Pronoun$macrocall$2", {"literal":"]"}], "postprocess": g.TAG},
    {"name": "Pronoun", "symbols": ["Pronoun$macrocall$1"]},
    {"name": "PN$macrocall$2$string$1", "symbols": [{"literal":"p"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PN$macrocall$2", "symbols": ["PN$macrocall$2$string$1"]},
    {"name": "PN$macrocall$1", "symbols": [{"literal":"["}, "PN$macrocall$2", "N", {"literal":"]"}]},
    {"name": "PN$macrocall$1", "symbols": [{"literal":"["}, "PN$macrocall$2", {"literal":"]"}], "postprocess": g.TAG},
    {"name": "PN", "symbols": ["PN$macrocall$1"]},
    {"name": "Determiner$macrocall$2$string$1", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Determiner$macrocall$2", "symbols": ["Determiner$macrocall$2$string$1"]},
    {"name": "Determiner$macrocall$1", "symbols": [{"literal":"["}, "Determiner$macrocall$2", "N", {"literal":"]"}]},
    {"name": "Determiner$macrocall$1", "symbols": [{"literal":"["}, "Determiner$macrocall$2", {"literal":"]"}], "postprocess": g.TAG},
    {"name": "Determiner", "symbols": ["Determiner$macrocall$1"]},
    {"name": "Preposition$macrocall$2$string$1", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Preposition$macrocall$2", "symbols": ["Preposition$macrocall$2$string$1"]},
    {"name": "Preposition$macrocall$1", "symbols": [{"literal":"["}, "Preposition$macrocall$2", "N", {"literal":"]"}]},
    {"name": "Preposition$macrocall$1", "symbols": [{"literal":"["}, "Preposition$macrocall$2", {"literal":"]"}], "postprocess": g.TAG},
    {"name": "Preposition", "symbols": ["Preposition$macrocall$1"]},
    {"name": "Conjunction$macrocall$2$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"j"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Conjunction$macrocall$2", "symbols": ["Conjunction$macrocall$2$string$1"]},
    {"name": "Conjunction$macrocall$1", "symbols": [{"literal":"["}, "Conjunction$macrocall$2", "N", {"literal":"]"}]},
    {"name": "Conjunction$macrocall$1", "symbols": [{"literal":"["}, "Conjunction$macrocall$2", {"literal":"]"}], "postprocess": g.TAG},
    {"name": "Conjunction", "symbols": ["Conjunction$macrocall$1"]},
    {"name": "RelClause$macrocall$2$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RelClause$macrocall$2", "symbols": ["RelClause$macrocall$2$string$1"]},
    {"name": "RelClause$macrocall$1", "symbols": [{"literal":"["}, "RelClause$macrocall$2", "N", {"literal":"]"}]},
    {"name": "RelClause$macrocall$1", "symbols": [{"literal":"["}, "RelClause$macrocall$2", {"literal":"]"}], "postprocess": g.TAG},
    {"name": "RelClause", "symbols": ["RelClause$macrocall$1"]}
]
  , ParserStart: "S"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
