// Abstract classes sind die blueprints der classes
abstract class ShootPhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    // in einer abstract class kann man nur abstract methods schreiben Oo
    abstract getSepia(): void

    // Der unterschied zu Interfaces ist hier, dass wir eine Methode mit Code mitgeben können
    getReelTime(): number {
        // ganz viel komplexer Code
        return 8
    }
}

// wenn es eine abstact class ist, kann ich kein Object daraus generieren. Dies würde einen Fehler melden.
// const moos = new ShootPhoto("Auto", "Normal");

// Wenn ich aber die abstract class vererbe, dann kann ich das "Kind" als ganz normale class benutzen
class Instagram extends ShootPhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        // das vererbt die Werte von den Eltern
        super(cameraMode, filter)
    }
    getSepia(){
        console.log("Photo in sepia");
    }
} 

const moos = new Instagram("Auto", "Normal", 10);

console.log(moos.getReelTime());

