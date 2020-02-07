@{%
 const g = require("./code.js");
 const lexer = g.lexer;
%}

@lexer lexer

S -> Group:+

Group -> Group0
Group0 -> Group0 %space "but" (%space "not"):? %space Group1
 | Group1
Group1 -> Group1 %space "or" (%space "not"):? %space Group2
 | Group2
Group2 -> Group3 %space "and" (%space "not"):? %space Group2
 | Group3
Group3 -> Group3 %space GroupD | GroupD
GroupD -> %member


S1 -> S Conjunction S2 | S2
S2 -> NP VP | VP | Aux NP VP | Wh Aux NP VP | Wh VP


Tag[X] -> ("["  (TT "|"):? $X ("|" TT):? "|" Num "]") {%g.TAG_NB%}

Num -> [0-9]:+ {%g.NUM%}
Str -> [a-zA-Z]:+ {%g.STR%}
TT -> Str "|" TT  | Str




NP -> NP Conjunction NP2 | NP2
NP2 -> Pronoun
 | PN
 | Nominal
 | NP Conjunction NP

Nominal -> Determiner:? ADD:? Noun Nominal
 | Nominal RelClause VP
 | Determiner:? ADD:? Noun
 | Nominal PP

PP -> Preposition:? NP
ADD -> ADD:? Adjective

VP -> VP Conjunction VP2 | VP2
VP2 -> Verb 
 | Verb NP
 | Verb NP PP
 | Verb PP


Noun -> Tag["n"] #flight | breeze | trip | morning | …
Verb -> Tag["v"] #is | prefer | like | need | want | fly …
Adjective -> Tag["adj"] #cheapest | non-stop | first | latest | other | direct | …
Pronoun -> Tag["pr"] #me | I | you | it | …
PN -> Tag["pn"] #Alaska | Baltimore | Los Angeles | Chicago | United | American | …
Determiner -> Tag["det"] #the | a | an | this | these | that | …
Preposition -> Tag["prep"] #from | to | on | near | …
Conjunction -> Tag["conj"] #and | or | but | …
RelClause -> Tag["rel"] # who | that | which
Aux -> Tag["aux"] #do | does | can
Wh -> Tag["wh"] #which | what