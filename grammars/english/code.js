const utils = require("../utils/gutils");

<<<<<<< Updated upstream
console.log(utils);

function tag(t,v){
    return {t,v};
=======
function tag(t,id){
    return {t,id};
>>>>>>> Stashed changes
}

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
    utils
};