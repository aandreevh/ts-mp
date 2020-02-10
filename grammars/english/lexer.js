module.exports = {
    space: / +/,
    number: {match: /[0-9]+(?:\.[0-9]+)?/, value: s => +s },
    string:  {
        match: /"(?:(?:\\\\)|(?:\\[a-z])|[^"\\]|(?:\\"))*"|'[^']*'/,
        value: s => {
            if(s.startsWith("\'")){
                return s.substring(1,s.length-1); 
            }else{
                return JSON.parse(s); 
            }
        }},
    member: {
        match : /(?:\<@[^ ]+\>)|me|everyone/,
        value : value=>{
         
            const regex = /(?:\<@([^ ]+)\>)/;
            const match = regex.exec(value);
            
            if(match){
                return {member: match[1]};
            }   
            return value;
        }
    }
    };