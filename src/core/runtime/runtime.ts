

export interface FuncBaseDescription {descriptor : string,handler : (...arg0 : any) => any};

export interface FunctionAttribute{
    tag: string
    type : string;
    attribute : string;
}


export class FunctionDescriptor{
    constructor(public returnType: string,public structure:FunctionAttribute[]
        ,public handler: (...arg0:any) => any){
    }
    static  parseAttribute(attribute : string):FunctionAttribute{
        const regex : RegExp = /([+*?]?)([%$]?)([a-zA-Z0-9_-]+)/
        const match = regex.exec(attribute);
        if(! match) return null;
        return {tag: match[1], type: match[2],attribute : match[3]}
    }
    static parseFunction(returnType : string,str : string,
        handler : (...arg0:any) => any ) : FunctionDescriptor{
     return new FunctionDescriptor(returnType,str.trim()
                                                    .split(/\s+/)
                                                    .filter(x => x!== '')
                                                    .map(FunctionDescriptor.parseAttribute)
                                                    .filter(x=>x!=null),handler);
    }

    
}


type ContextDescriptor = {[x:string] : FunctionDescriptor[]}