import {Invoice} from "./classes/Invoices.js"
import {Payment} from "./classes/Payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

// list of invoices of type invoice class
let invoices: Invoice[] = []

invoices.forEach(inv => {
    console.log(inv.format());
})

// form
const form  = document.querySelector(".new-item-form") as HTMLFormElement

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

// add event
form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === "invoice"){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }
    else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, 'end')
})