// Generated automatically by nearley, version 2.19.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

 const g = require("./code.js");
 const lexer = g.lexer;
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "S$ebnf$1", "symbols": ["Group"]},
    {"name": "S$ebnf$1", "symbols": ["S$ebnf$1", "Group"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "S", "symbols": ["S$ebnf$1"]},
    {"name": "Group", "symbols": ["Group0"]},
    {"name": "Group0$ebnf$1$subexpression$1", "symbols": [(lexer.has("space") ? {type: "space"} : space), {"literal":"not"}]},
    {"name": "Group0$ebnf$1", "symbols": ["Group0$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Group0$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Group0", "symbols": ["Group0", (lexer.has("space") ? {type: "space"} : space), {"literal":"but"}, "Group0$ebnf$1", (lexer.has("space") ? {type: "space"} : space), "Group1"]},
    {"name": "Group0", "symbols": ["Group1"]},
    {"name": "Group1$ebnf$1$subexpression$1", "symbols": [(lexer.has("space") ? {type: "space"} : space), {"literal":"not"}]},
    {"name": "Group1$ebnf$1", "symbols": ["Group1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Group1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Group1", "symbols": ["Group1", (lexer.has("space") ? {type: "space"} : space), {"literal":"or"}, "Group1$ebnf$1", (lexer.has("space") ? {type: "space"} : space), "Group2"]},
    {"name": "Group1", "symbols": ["Group2"]},
    {"name": "Group2$ebnf$1$subexpression$1", "symbols": [(lexer.has("space") ? {type: "space"} : space), {"literal":"not"}]},
    {"name": "Group2$ebnf$1", "symbols": ["Group2$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Group2$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Group2", "symbols": ["Group3", (lexer.has("space") ? {type: "space"} : space), {"literal":"and"}, "Group2$ebnf$1", (lexer.has("space") ? {type: "space"} : space), "Group2"]},
    {"name": "Group2", "symbols": ["Group3"]},
    {"name": "Group3", "symbols": ["Group3", (lexer.has("space") ? {type: "space"} : space), (lexer.has("member") ? {type: "member"} : member)]},
    {"name": "Group3", "symbols": [(lexer.has("member") ? {type: "member"} : member)]},
    {"name": "S1", "symbols": ["S", "Conjunction", "S2"]},
    {"name": "S1", "symbols": ["S2"]},
    {"name": "S2", "symbols": ["NP", "VP"]},
    {"name": "S2", "symbols": ["VP"]},
    {"name": "S2", "symbols": ["Aux", "NP", "VP"]},
    {"name": "S2", "symbols": ["Wh", "Aux", "NP", "VP"]},
    {"name": "S2", "symbols": ["Wh", "VP"]},
    {"name": "Num$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "Num$ebnf$1", "symbols": ["Num$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Num", "symbols": ["Num$ebnf$1"], "postprocess": g.NUM},
    {"name": "Str$ebnf$1", "symbols": [/[a-zA-Z]/]},
    {"name": "Str$ebnf$1", "symbols": ["Str$ebnf$1", /[a-zA-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Str", "symbols": ["Str$ebnf$1"], "postprocess": g.STR},
    {"name": "TT", "symbols": ["Str", {"literal":"|"}, "TT"]},
    {"name": "TT", "symbols": ["Str"]},
    {"name": "NP", "symbols": ["NP", "Conjunction", "NP2"]},
    {"name": "NP", "symbols": ["NP2"]},
    {"name": "NP2", "symbols": ["Pronoun"]},
    {"name": "NP2", "symbols": ["PN"]},
    {"name": "NP2", "symbols": ["Nominal"]},
    {"name": "NP2", "symbols": ["NP", "Conjunction", "NP"]},
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
    {"name": "PP$ebnf$1", "symbols": ["Preposition"], "postprocess": id},
    {"name": "PP$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "PP", "symbols": ["PP$ebnf$1", "NP"]},
    {"name": "ADD$ebnf$1", "symbols": ["ADD"], "postprocess": id},
    {"name": "ADD$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ADD", "symbols": ["ADD$ebnf$1", "Adjective"]},
    {"name": "VP", "symbols": ["VP", "Conjunction", "VP2"]},
    {"name": "VP", "symbols": ["VP2"]},
    {"name": "VP2", "symbols": ["Verb"]},
    {"name": "VP2", "symbols": ["Verb", "NP"]},
    {"name": "VP2", "symbols": ["Verb", "NP", "PP"]},
    {"name": "VP2", "symbols": ["Verb", "PP"]},
    {"name": "Noun$macrocall$2", "symbols": [{"literal":"n"}]},
    {"name": "Noun$macrocall$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["TT", {"literal":"|"}]},
    {"name": "Noun$macrocall$1$subexpression$1$ebnf$1", "symbols": ["Noun$macrocall$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Noun$macrocall$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Noun$macrocall$1$subexpression$1$ebnf$2$subexpression$1", "symbols": [{"literal":"|"}, "TT"]},
    {"name": "Noun$macrocall$1$subexpression$1$ebnf$2", "symbols": ["Noun$macrocall$1$subexpression$1$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "Noun$macrocall$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Noun$macrocall$1$subexpression$1", "symbols": [{"literal":"["}, "Noun$macrocall$1$subexpression$1$ebnf$1", "Noun$macrocall$2", "Noun$macrocall$1$subexpression$1$ebnf$2", {"literal":"|"}, "Num", {"literal":"]"}]},
    {"name": "Noun$macrocall$1", "symbols": ["Noun$macrocall$1$subexpression$1"], "postprocess": g.TAG_NB},
    {"name": "Noun", "symbols": ["Noun$macrocall$1"]},
    {"name": "Verb$macrocall$2", "symbols": [{"literal":"v"}]},
    {"name": "Verb$macrocall$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["TT", {"literal":"|"}]},
    {"name": "Verb$macrocall$1$subexpression$1$ebnf$1", "symbols": ["Verb$macrocall$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Verb$macrocall$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Verb$macrocall$1$subexpression$1$ebnf$2$subexpression$1", "symbols": [{"literal":"|"}, "TT"]},
    {"name": "Verb$macrocall$1$subexpression$1$ebnf$2", "symbols": ["Verb$macrocall$1$subexpression$1$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "Verb$macrocall$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Verb$macrocall$1$subexpression$1", "symbols": [{"literal":"["}, "Verb$macrocall$1$subexpression$1$ebnf$1", "Verb$macrocall$2", "Verb$macrocall$1$subexpression$1$ebnf$2", {"literal":"|"}, "Num", {"literal":"]"}]},
    {"name": "Verb$macrocall$1", "symbols": ["Verb$macrocall$1$subexpression$1"], "postprocess": g.TAG_NB},
    {"name": "Verb", "symbols": ["Verb$macrocall$1"]},
    {"name": "Adjective$macrocall$2", "symbols": [{"literal":"adj"}]},
    {"name": "Adjective$macrocall$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["TT", {"literal":"|"}]},
    {"name": "Adjective$macrocall$1$subexpression$1$ebnf$1", "symbols": ["Adjective$macrocall$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Adjective$macrocall$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Adjective$macrocall$1$subexpression$1$ebnf$2$subexpression$1", "symbols": [{"literal":"|"}, "TT"]},
    {"name": "Adjective$macrocall$1$subexpression$1$ebnf$2", "symbols": ["Adjective$macrocall$1$subexpression$1$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "Adjective$macrocall$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Adjective$macrocall$1$subexpression$1", "symbols": [{"literal":"["}, "Adjective$macrocall$1$subexpression$1$ebnf$1", "Adjective$macrocall$2", "Adjective$macrocall$1$subexpression$1$ebnf$2", {"literal":"|"}, "Num", {"literal":"]"}]},
    {"name": "Adjective$macrocall$1", "symbols": ["Adjective$macrocall$1$subexpression$1"], "postprocess": g.TAG_NB},
    {"name": "Adjective", "symbols": ["Adjective$macrocall$1"]},
    {"name": "Pronoun$macrocall$2", "symbols": [{"literal":"pr"}]},
    {"name": "Pronoun$macrocall$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["TT", {"literal":"|"}]},
    {"name": "Pronoun$macrocall$1$subexpression$1$ebnf$1", "symbols": ["Pronoun$macrocall$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Pronoun$macrocall$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Pronoun$macrocall$1$subexpression$1$ebnf$2$subexpression$1", "symbols": [{"literal":"|"}, "TT"]},
    {"name": "Pronoun$macrocall$1$subexpression$1$ebnf$2", "symbols": ["Pronoun$macrocall$1$subexpression$1$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "Pronoun$macrocall$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Pronoun$macrocall$1$subexpression$1", "symbols": [{"literal":"["}, "Pronoun$macrocall$1$subexpression$1$ebnf$1", "Pronoun$macrocall$2", "Pronoun$macrocall$1$subexpression$1$ebnf$2", {"literal":"|"}, "Num", {"literal":"]"}]},
    {"name": "Pronoun$macrocall$1", "symbols": ["Pronoun$macrocall$1$subexpression$1"], "postprocess": g.TAG_NB},
    {"name": "Pronoun", "symbols": ["Pronoun$macrocall$1"]},
    {"name": "PN$macrocall$2", "symbols": [{"literal":"pn"}]},
    {"name": "PN$macrocall$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["TT", {"literal":"|"}]},
    {"name": "PN$macrocall$1$subexpression$1$ebnf$1", "symbols": ["PN$macrocall$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "PN$macrocall$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "PN$macrocall$1$subexpression$1$ebnf$2$subexpression$1", "symbols": [{"literal":"|"}, "TT"]},
    {"name": "PN$macrocall$1$subexpression$1$ebnf$2", "symbols": ["PN$macrocall$1$subexpression$1$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "PN$macrocall$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "PN$macrocall$1$subexpression$1", "symbols": [{"literal":"["}, "PN$macrocall$1$subexpression$1$ebnf$1", "PN$macrocall$2", "PN$macrocall$1$subexpression$1$ebnf$2", {"literal":"|"}, "Num", {"literal":"]"}]},
    {"name": "PN$macrocall$1", "symbols": ["PN$macrocall$1$subexpression$1"], "postprocess": g.TAG_NB},
    {"name": "PN", "symbols": ["PN$macrocall$1"]},
    {"name": "Determiner$macrocall$2", "symbols": [{"literal":"det"}]},
    {"name": "Determiner$macrocall$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["TT", {"literal":"|"}]},
    {"name": "Determiner$macrocall$1$subexpression$1$ebnf$1", "symbols": ["Determiner$macrocall$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Determiner$macrocall$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Determiner$macrocall$1$subexpression$1$ebnf$2$subexpression$1", "symbols": [{"literal":"|"}, "TT"]},
    {"name": "Determiner$macrocall$1$subexpression$1$ebnf$2", "symbols": ["Determiner$macrocall$1$subexpression$1$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "Determiner$macrocall$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Determiner$macrocall$1$subexpression$1", "symbols": [{"literal":"["}, "Determiner$macrocall$1$subexpression$1$ebnf$1", "Determiner$macrocall$2", "Determiner$macrocall$1$subexpression$1$ebnf$2", {"literal":"|"}, "Num", {"literal":"]"}]},
    {"name": "Determiner$macrocall$1", "symbols": ["Determiner$macrocall$1$subexpression$1"], "postprocess": g.TAG_NB},
    {"name": "Determiner", "symbols": ["Determiner$macrocall$1"]},
    {"name": "Preposition$macrocall$2", "symbols": [{"literal":"prep"}]},
    {"name": "Preposition$macrocall$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["TT", {"literal":"|"}]},
    {"name": "Preposition$macrocall$1$subexpression$1$ebnf$1", "symbols": ["Preposition$macrocall$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Preposition$macrocall$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Preposition$macrocall$1$subexpression$1$ebnf$2$subexpression$1", "symbols": [{"literal":"|"}, "TT"]},
    {"name": "Preposition$macrocall$1$subexpression$1$ebnf$2", "symbols": ["Preposition$macrocall$1$subexpression$1$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "Preposition$macrocall$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Preposition$macrocall$1$subexpression$1", "symbols": [{"literal":"["}, "Preposition$macrocall$1$subexpression$1$ebnf$1", "Preposition$macrocall$2", "Preposition$macrocall$1$subexpression$1$ebnf$2", {"literal":"|"}, "Num", {"literal":"]"}]},
    {"name": "Preposition$macrocall$1", "symbols": ["Preposition$macrocall$1$subexpression$1"], "postprocess": g.TAG_NB},
    {"name": "Preposition", "symbols": ["Preposition$macrocall$1"]},
    {"name": "Conjunction$macrocall$2", "symbols": [{"literal":"conj"}]},
    {"name": "Conjunction$macrocall$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["TT", {"literal":"|"}]},
    {"name": "Conjunction$macrocall$1$subexpression$1$ebnf$1", "symbols": ["Conjunction$macrocall$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Conjunction$macrocall$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Conjunction$macrocall$1$subexpression$1$ebnf$2$subexpression$1", "symbols": [{"literal":"|"}, "TT"]},
    {"name": "Conjunction$macrocall$1$subexpression$1$ebnf$2", "symbols": ["Conjunction$macrocall$1$subexpression$1$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "Conjunction$macrocall$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Conjunction$macrocall$1$subexpression$1", "symbols": [{"literal":"["}, "Conjunction$macrocall$1$subexpression$1$ebnf$1", "Conjunction$macrocall$2", "Conjunction$macrocall$1$subexpression$1$ebnf$2", {"literal":"|"}, "Num", {"literal":"]"}]},
    {"name": "Conjunction$macrocall$1", "symbols": ["Conjunction$macrocall$1$subexpression$1"], "postprocess": g.TAG_NB},
    {"name": "Conjunction", "symbols": ["Conjunction$macrocall$1"]},
    {"name": "RelClause$macrocall$2", "symbols": [{"literal":"rel"}]},
    {"name": "RelClause$macrocall$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["TT", {"literal":"|"}]},
    {"name": "RelClause$macrocall$1$subexpression$1$ebnf$1", "symbols": ["RelClause$macrocall$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "RelClause$macrocall$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "RelClause$macrocall$1$subexpression$1$ebnf$2$subexpression$1", "symbols": [{"literal":"|"}, "TT"]},
    {"name": "RelClause$macrocall$1$subexpression$1$ebnf$2", "symbols": ["RelClause$macrocall$1$subexpression$1$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "RelClause$macrocall$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "RelClause$macrocall$1$subexpression$1", "symbols": [{"literal":"["}, "RelClause$macrocall$1$subexpression$1$ebnf$1", "RelClause$macrocall$2", "RelClause$macrocall$1$subexpression$1$ebnf$2", {"literal":"|"}, "Num", {"literal":"]"}]},
    {"name": "RelClause$macrocall$1", "symbols": ["RelClause$macrocall$1$subexpression$1"], "postprocess": g.TAG_NB},
    {"name": "RelClause", "symbols": ["RelClause$macrocall$1"]},
    {"name": "Aux$macrocall$2", "symbols": [{"literal":"aux"}]},
    {"name": "Aux$macrocall$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["TT", {"literal":"|"}]},
    {"name": "Aux$macrocall$1$subexpression$1$ebnf$1", "symbols": ["Aux$macrocall$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Aux$macrocall$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Aux$macrocall$1$subexpression$1$ebnf$2$subexpression$1", "symbols": [{"literal":"|"}, "TT"]},
    {"name": "Aux$macrocall$1$subexpression$1$ebnf$2", "symbols": ["Aux$macrocall$1$subexpression$1$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "Aux$macrocall$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Aux$macrocall$1$subexpression$1", "symbols": [{"literal":"["}, "Aux$macrocall$1$subexpression$1$ebnf$1", "Aux$macrocall$2", "Aux$macrocall$1$subexpression$1$ebnf$2", {"literal":"|"}, "Num", {"literal":"]"}]},
    {"name": "Aux$macrocall$1", "symbols": ["Aux$macrocall$1$subexpression$1"], "postprocess": g.TAG_NB},
    {"name": "Aux", "symbols": ["Aux$macrocall$1"]},
    {"name": "Wh$macrocall$2", "symbols": [{"literal":"wh"}]},
    {"name": "Wh$macrocall$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["TT", {"literal":"|"}]},
    {"name": "Wh$macrocall$1$subexpression$1$ebnf$1", "symbols": ["Wh$macrocall$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Wh$macrocall$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Wh$macrocall$1$subexpression$1$ebnf$2$subexpression$1", "symbols": [{"literal":"|"}, "TT"]},
    {"name": "Wh$macrocall$1$subexpression$1$ebnf$2", "symbols": ["Wh$macrocall$1$subexpression$1$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "Wh$macrocall$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Wh$macrocall$1$subexpression$1", "symbols": [{"literal":"["}, "Wh$macrocall$1$subexpression$1$ebnf$1", "Wh$macrocall$2", "Wh$macrocall$1$subexpression$1$ebnf$2", {"literal":"|"}, "Num", {"literal":"]"}]},
    {"name": "Wh$macrocall$1", "symbols": ["Wh$macrocall$1$subexpression$1"], "postprocess": g.TAG_NB},
    {"name": "Wh", "symbols": ["Wh$macrocall$1"]}
]
  , ParserStart: "S"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
