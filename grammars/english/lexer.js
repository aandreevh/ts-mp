module.exports = {
    space: {match: /[\s,]+/, lineBreaks: true},
    number: {match: /\-?[0-9]+(?:\.[0-9]+)?/, value: s => +s },
    string:  {
        match: /"(?:(?:\\\\)|(?:\\[a-z])|[^"\\]|(?:\\"))*"|'[^']*'/,
        value: s => {
            if(s.startsWith("\'")){
                return s.substring(1,s.length-1); 
            }else{
                return JSON.parse(s); 
            }
        }},
    operator: /[!$%^&*()+|~=`{}\[\]:";<>.?\/]/,
    member: {
        match : /(?:\<@[^ ]+\>)|me|everyone/,
        value : value=>{
         
            const regex = /(?:\<@([^ ]+)\>)/;
            const match = regex.exec(value);
            
            if(match){
                return {id: match[1]};
            }   
            return value;
        }
    },
    channel: {
        match: /(?:\<#[^\| ]+(?:\|[^ ]+)?\>)/,
        value: value =>{
            
            const regex = /(?:\<#([^\| ]+)\|?([^ ]+)?\>)/
            const match = regex.exec(value);
            return {id: match[1], name: match[2] || null};
        }
    }
    };