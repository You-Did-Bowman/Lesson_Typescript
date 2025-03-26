// In JS würden wir damit sagen, dass "superhero" ein leerer array ist. Typescript sagt aber, dass es ein array ist mit dem type "never", das führt dazu, dass wir nichts in den array einfügen können.
var avangers = [];
//nope ... Deadpool ist kein Teil der Avangers!
avangers.push('Deadpool');
console.log(avangers);
// Um dem leeren Array einen Type zu geben, müssen wir den Type mit einem array darstellen. In dem Fall ": string[]".
var justiceLeague = [];
// Batman darf ins Team ... DC rules!
justiceLeague.push('Batman');
console.log(justiceLeague);
// das ist eine andere Schreibweise für den Array
var heroPower = [];
heroPower.push(2);
// Offensichtlich: Sagt das nun an, dass alle Werte, die nun in den Array kommen sollen, die Struktur von "Hero" haben sollten 
var allHeros = [];
allHeros.push({ name: "Batman", place: "Gotham" }, { name: "Superman", place: "Metropolis" });
console.log(allHeros);
