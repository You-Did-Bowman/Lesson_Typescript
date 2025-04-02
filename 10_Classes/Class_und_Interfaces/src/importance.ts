interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

// "implement" sagt, dass diese Class die gleichen Probs wie "TakePhoto" haben soll. Dennoch müssen wir die Probs selber hinschreiben, sie werden nicht vererbt
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

// man kann gerne mehr probs hinzufügen ... aber nicht weniger
// auch kann man mehrere Interfaces implementieren
class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {
        console.log("Beste Story ever!");
        
    }
}