export class Descriptor{
    constructor(public handler: (...arg0:any) => any ){}
}


export interface FunctionAttribute{
    attrib : string;
    type : 'syntax' | 'param';

}

export class FunctionDescriptor extends Descriptor{
    constructor(public structure:[FunctionAttribute|FunctionAttribute[]]
        ,handler: (...arg0:any) => any){
        super(handler);
    }
}

export class EnumDescriptor extends Descriptor{
    constructor(public structure:string[], handler: (...arg0:any) => any){
        super(handler);
    }
}

export class ObjectDescriptor extends Descriptor{
    
}