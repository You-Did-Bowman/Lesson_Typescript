"use strict";
// "implement" sagt, dass diese Class die gleichen Probs wie "TakePhoto" haben soll. Dennoch müssen wir die Probs selber hinschreiben, sie werden nicht vererbt
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
// man kann gerne mehr probs hinzufügen ... aber nicht weniger
// auch kann man mehrere Interfaces implementieren
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Beste Story ever!");
    }
}
