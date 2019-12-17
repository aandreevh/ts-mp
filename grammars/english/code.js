const utils = require("../utils/gutils");

function tag(t,v){
    return {t,v};
}

module.exports={
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
};