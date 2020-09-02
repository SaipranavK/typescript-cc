import { Invoice } from "./classes/Invoices.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// list of invoices of type invoice class
let invoices = [];
invoices.forEach(inv => {
    console.log(inv.format());
});
// form
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// add event
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
