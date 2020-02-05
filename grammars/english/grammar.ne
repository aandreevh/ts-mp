@{%
 const g = require("./code.js")
%}




Tag[X] -> ("["  (TT "|"):? $X ("|" TT):? "|" Num "]") {%g.TAG_NB%}


<<<<<<< Updated upstream
S -> NP VP 
=======
S -> Verb
>>>>>>> Stashed changes

Num -> [0-9]:+ {%g.NUM%}
Str -> [a-zA-Z]:+ {%g.STR%}
TT -> Str "|" TT  | Str

NP -> Pronoun
 | PN
 | Nominal

Nominal -> Determiner:? ADD:? Noun Nominal
 |  Nominal RelClause VP
 | Determiner:? ADD:? Noun
 | Nominal PP

ADD -> ADD:? Adjective

VP -> Verb 
 | Verb NP
 | Verb NP PP
 | Verb PP
PP -> Preposition:? NP



Noun -> Tag["n"] #flight | breeze | trip | morning | …
Verb -> Tag["v"] #is | prefer | like | need | want | fly …
Adjective -> Tag["adj"] #cheapest | non-stop | first | latest | other | direct | …
Pronoun -> Tag["pr"] #me | I | you | it | …
PN -> Tag["pn"] #Alaska | Baltimore | Los Angeles | Chicago | United | American | …
Determiner -> Tag["det"] #the | a | an | this | these | that | …
Preposition -> Tag["prep"] #from | to | on | near | …
Conjunction -> Tag["conj"] #and | or | but | …
RelClause -> Tag["rel"] # who | that | which

