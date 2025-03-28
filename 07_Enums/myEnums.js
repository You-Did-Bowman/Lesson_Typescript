var hcSeat = 0 /* SeatChoice.AISLE */;
var frodo = 20 /* Fellowship.HOBBIT */;
// Ich kann auch Strings als Wert geben, weil da aber kein +1 errechnet werden kann, wird ein Fehler gemeldet, wenn ich einer Property dann keinen Wert gebe. Ich kann aber auch plötzlich wieder mit Zahlen anfangen, dann geht es wieder weiter mit +1. 
var Nicknames;
(function (Nicknames) {
    Nicknames["DANIELA"] = "Dani";
    Nicknames["ALEXANDER"] = "Alex";
    Nicknames[Nicknames["SEBASTIAN"] = void 0] = "SEBASTIAN";
})(Nicknames || (Nicknames = {}));
var daniela = Nicknames.DANIELA;
/* Die letzte enum wurde nicht als const deklariert. Hier ist es interessant in die JS Datei zu gucken. Denn man sieht, dass wenn eine enum nicht als const deklariert wird, viel mehr JS-Code geschrieben wird als mit.

TS mit const:
const enum Nicknames {
    DANIELA = "Dani",
    ALEXANDER = "Alex",
    SEBASTIAN,
}

var daniela = "Dani" //Nicknames.DANIELA;

TS ohne const:

*/ 
