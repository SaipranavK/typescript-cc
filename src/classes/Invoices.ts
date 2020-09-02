import { HasFormatter } from "../interfaces/HasFormatter";

// class
export class Invoice implements HasFormatter {
    /*
    readonly client: string // non-editable
    private details: string // only accessible by class
    private amount: number
    */
   
    constructor(readonly client: string, private details: string, public amount: number){}

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
