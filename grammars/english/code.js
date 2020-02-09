const moo = require("moo");


const lexer = moo.compile( require("./lexer"));

 /*
 Cheat but can't do much as nearly is too closed in it's generation
 */
lexer.has = function() {return true;}

module.exports= {
    lexer
}