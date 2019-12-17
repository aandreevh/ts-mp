const utils = require("../utils/gutils");

function tag(t,v){
    return {t,v};
}

module.exports={
    NUM: 
    utils.transform((dat) => 
    dat[0].reduce((nv,cur) => 10*nv+(+cur),0)),
    TAG: utils.pipe(
        utils.filter(1,2),
        utils.map(utils.unpack(),0),
        utils.transform(d=> tag(d[0],d[1])),
    ),
};