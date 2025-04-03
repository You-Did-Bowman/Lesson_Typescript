"use strict";
function detectType(val) {
    // hier passiert dann wieder sehr viel Code. Aber jeder Type hat auch seine unterschiedlichen Methoden, die verwendet werden können. Bsp. .toLowerCase() können wir nur bei Strings anwenden ... aber nicht auf Numbers. Deshalb muss vor der Verwendung solcher Methoden "gefiltert"
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    else if (typeof val === "number") {
        return val + 2;
    }
    else {
        return val.length;
    }
}
console.log("HELLO:", detectType("HELLO")); // hello
console.log();
console.log("3:", detectType(3)); // 5
console.log();
console.log("[1, 2, 3]:", detectType([1, 2, 3])); // 3
console.log();
// das kommt öfter vor: Man stellt stellt nur Berechnungen an, wenn der Parameter auch mitgegeben wird, ansonsten erfolgt eine Fehlermeldung. 
function provideId(id) {
    if (!id) {
        return "Keine ID eingegeben!";
    }
    return id;
}
console.log("ID:", provideId("123"));
console.log();
console.log(provideId(null));
