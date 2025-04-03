"use strict";
let products = [
    "apple", "peach", "strawberry", "melon"
];
// ARRAYS
// Wir sagen hier, dass wir die products als Array nehmen. 
function getSearchProducts(products) {
    // ganz viel Backend stuff
    const myIndex = 3;
    return products[myIndex];
}
console.log("1. function:", getSearchProducts(products));
console.log();
// ARROW FUNCTIONS
// Im Grunde ist es eine normale Arror function. Wir legen nur fest, dass "<T>" es zu einer generischen Function macht und mit "():" legen wir den Type des returns fest
const getMoreSearchProducts = (products) => {
    // ganz viel Backend Code
    return products.length;
};
console.log("2. function:", getMoreSearchProducts(products));
