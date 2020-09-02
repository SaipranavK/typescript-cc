// class
export class Payment {
    /*
    readonly client: string // non-editable
    private details: string // only accessible by class
    private amount: number
    */
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
