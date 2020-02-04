var id = () => data => {
    return data;
};


var log = () =>  (data)=> {
    console.log(JSON.stringify(data))
    return data;
};

var pipe = (a,...func) => (data)=>{
    if(a=== undefined) return data;
    return pipe(...func)(a(data));
};

var parseInt = (id) => (data) =>{
    data[id] = data[id].reduce((n,c) => 10*n+  +c,0);
    return data;
};

function inD(data,index){
    return data.includes(index);
}

var filter = (...ids) => (data)=>{
    return data.filter((_,id) =>inD(ids,id));
};

var unpack = (id=0) => (data)=>{
    return data[id];
};

var map = (fn,...ids) => (data)=>{
    return data.map((v,id)=>{
        if(inD(ids,id)){
            return fn(v)
        }
        return v
    })
};

var transform = (cb) => (data) =>{
    return cb(data);
};

module.exports = {
    id,
    log,
    pipe,
    parseInt,
    unpack,
    filter,
    map,
    transform
}