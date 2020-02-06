const utils = require("../utils/gutils");
const moo = require("moo");

function tag(t,id){
    return {t,id};
}

const lexer = moo.compile({
    space: / +/,
    integer: {match: /[0-9]+/, value: s => +s },
    string:  {
        match: /"(?:(?:\\\\)|(?:\\[a-z])|[^"\\]|(?:\\"))*"|'[^']*'/,
        value: s => {
            if(s.startsWith("\'")){
                return s.substring(1,s.length-1); 
            }else{
                return JSON.parse(s); 
            }
        }},
    
    keyword: ["not","and","or","but"],
    member: /(?:@[^ ]+)|me|them|all|everyone/,
    });

module.exports={

    UNPK: utils.unpack(),

    NUM: 
    utils.transform(dat => 
    dat[0].reduce((nv,cur) => 10*nv+(+cur),0)),

    STR : utils.transform(dat => 
        dat[0].reduce((nv,cur) => nv+cur,"")),

    TAG: utils.pipe(
        utils.unpack(),
        utils.filter(2,5),
        utils.transform(([n,v]) => tag(n[0],v))
    ),

    TAG_NB: utils.pipe(
        utils.unpack(),
        utils.filter(2,5),
        utils.transform(([n,b]) => {
           return {type: n[0],id:b};
        })
    ),
    utils,
    lexer
};