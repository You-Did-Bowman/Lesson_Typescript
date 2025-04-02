"use strict";
// Abstract classes sind die blueprints der classes
class ShootPhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // Der unterschied zu Interfaces ist hier, dass wir eine Methode mit Code mitgeben können
    getReelTime() {
        // ganz viel komplexer Code
        return 8;
    }
}
// wenn es eine abstact class ist, kann ich kein Object daraus generieren. Dies würde einen Fehler melden.
// const moos = new ShootPhoto("Auto", "Normal");
// Wenn ich aber die abstract class vererbe, dann kann ich das "Kind" als ganz normale class benutzen
class Instagram extends ShootPhoto {
    constructor(cameraMode, filter, burst) {
        // das vererbt die Werte von den Eltern
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Photo in sepia");
    }
}
const moos = new Instagram("Auto", "Normal", 10);
console.log(moos.getReelTime());
