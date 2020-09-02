// class
export class Invoice {
    /*
    readonly client: string // non-editable
    private details: string // only accessible by class
    private amount: number
    */
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
