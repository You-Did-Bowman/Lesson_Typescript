// Hier deklariere ich die enum. Wenn ich nun über die einzelnen properties hover sehe ich, dass jede einen Zahlenwert zugeordnet bekommen hat - by default es ist passend zum Index, startend mit 0: AISLE = 0, MIDDEL = 1, WINDOW = 2, CREW = 3!
const enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    CREW
}

const hcSeat = SeatChoice.AISLE;

// Natürlich kann ich den Zahlenwert auch selber bestimmen. Wenn ich keinen bestimme, dann bekommt sie automatische den vohrerigen Zahlenwert + 1: WIZARD = 30, DUNEDAIN = 31.
const enum Fellowship {
    DWARF = 10,
    HOBBIT = 20,
    WIZARD = 30,
    DUNEDAIN
}

const frodo = Fellowship.HOBBIT;

// Ich kann auch Strings als Wert geben, weil da aber kein +1 errechnet werden kann, wird ein Fehler gemeldet, wenn ich einer Property dann keinen Wert gebe. Ich kann aber auch plötzlich wieder mit Zahlen anfangen, dann geht es wieder weiter mit +1. 
enum Nicknames {
    DANIELA = "Dani",
    ALEXANDER = "Alex",
    // SEBASTIAN, 
}

const daniela = Nicknames.DANIELA;

/* Die letzte enum wurde nicht als const deklariert. Hier ist es interessant in die JS Datei zu gucken. Denn man sieht, dass wenn eine enum nicht als const deklariert wird, viel mehr JS-Code geschrieben wird als mit.  

*-*-*-*-* TS MIT const *-*-*-*-* 
const enum Nicknames {
    DANIELA = "Dani",
    ALEXANDER = "Alex",
    SEBASTIAN, 
}

var daniela = "Dani" //Nicknames.DANIELA;

*-*-*-*-* TS OHNE const *-*-*-*-* 
var Nicknames;
(function (Nicknames) {
    Nicknames["DANIELA"] = "Dani";
    Nicknames["ALEXANDER"] = "Alex";
    Nicknames[Nicknames["SEBASTIAN"] = void 0] = "SEBASTIAN";
})(Nicknames || (Nicknames = {}));

var daniela = Nicknames.DANIELA;
*/