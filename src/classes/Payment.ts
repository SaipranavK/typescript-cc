import { HasFormatter } from "../interfaces/HasFormatter";

// class
export class Payment implements HasFormatter {
    /*
    readonly client: string // non-editable
    private details: string // only accessible by class
    private amount: number
    */
   
    constructor(readonly recipient: string, private details: string, public amount: number){}

    format(){
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}
