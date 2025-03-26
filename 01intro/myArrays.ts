// In JS würden wir damit sagen, dass "superhero" ein leerer array ist. Typescript sagt aber, dass es ein array ist mit dem type "never", das führt dazu, dass wir nichts in den array einfügen können.
const avangers = []

//nope ... Deadpool ist kein Teil der Avangers!
avangers.push('Deadpool')

console.log(avangers);


// Um dem leeren Array einen Type zu geben, müssen wir den Type mit einem array darstellen. In dem Fall ": string[]".
const justiceLeague: string[] = []

// Batman darf ins Team ... DC rules!
justiceLeague.push('Batman')

console.log(justiceLeague);

// das ist eine andere Schreibweise für den Array
const heroPower: Array<number> = [];

heroPower.push(2)

type Hero = {
    name: string
    place: string
}

// Offensichtlich: Sagt das nun an, dass alle Werte, die nun in den Array kommen sollen, die Struktur von "Hero" haben sollten 
const allHeros: Hero[] = []

allHeros.push({name: "Batman", place: "Gotham"}, {name: "Superman", place: "Metropolis"})

console.log(allHeros);



