"use strict";
const score = [];
const names = [];
// man kann ganz viele "|" hinzufügen, um alle Eventualitäten abzudecken, aber das wäre zu viel code, was auch Fehler generieren könnte
function identityOne(val) {
    return val;
}
// "any" wäre eine Lösung - aber eine Lösung, die niemand sehen mag
function identityTwo(val) {
    return val;
}
// Hier benutzen wir "Type" als generic. Wir können nun alle Typen verwenden die wir wollen, ABER wenn der Type einmal eingeloggt ist, dann bleibt es auch dieser Type. Das ist der Unterschied zu "any". "any" kann halt alles immer sein ...
function identityThree(val) {
    return val;
}
console.log("identityOne:", identityOne(3));
console.log();
console.log("identityTwo:", identityTwo("Hello"));
console.log();
console.log("identityThree:", identityThree(8));
// -------------------- SHORTCUT VERSION --------------------------
function identityFour(val) {
    return val;
}
