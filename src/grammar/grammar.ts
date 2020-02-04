import {Parser,Grammar} from "nearley"

export class CFG{
    private parser : Parser;
    constructor(private file : string){
        this.parser = new Parser(Grammar.fromCompiled(require(file)));
    }

    
}
