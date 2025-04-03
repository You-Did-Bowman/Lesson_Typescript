"use strict";
// Mehrere Generics in einer Funktion
function createObject(name, num) {
    return { name, num };
}
console.log("1. function:", createObject("Peter", 4));
const db = {
    connection: "strong-connection",
    username: "Database 2.0",
    password: "12345"
};
// ... und legen dann fest, dass "U" unbedingt aus dieser "Database" bestehen muss
function readDatabase(db) {
    return db.connection;
}
console.log("2. function:", readDatabase(db));
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
