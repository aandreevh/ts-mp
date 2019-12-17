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

function id (){return (data)=> {
    return data;
}}


function log (){return (data)=> {
    console.log(JSON.stringify(data))
    return data;
}}

function pipe(a,...func) {return  (data)=>{
    if(a=== undefined) return data;
    return pipe(...func)(a(data));
}}

function parseInt(id) {return (data) =>{
    data[id] = data[id].reduce((n,c) => 10*n+  +c,0);
    return data;
}}

function inD(data,index){
    return data.includes(index);
}

function filter(...ids) {return (data)=>{
    return data.filter((_,id) =>inD(ids,id));
}}

function unpack(id=0) {return (data)=>{
    return data[id];
}}
function map(fn,...ids) {return (data)=>{
    return data.map((v,id)=>{
        if(inD(ids,id)){
            return fn(v)
        }
        return v
    })
}}

function transform(cb) { return (data)=>{
    return cb(data)
}}