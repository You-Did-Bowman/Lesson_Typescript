// Manchmal kann eine variable auch unterschiedliche Types haben. Dann benutzt man bei der Deklaration "|" - dies nennt man Union. Man sollte nicht all zu viel erlauben, sonst kann man auch "any" benutzten und das will keiner.
var score = 33;
score = "thirtythree";
// Judith wird nach dem Type "Person" deklariert
var judith = { name: "judith", id: 123456 };
console.log(judith);
// Aber wir können sie auch mit infos wie beim "Admin" beschreiben
judith = { username: "ju", id: 12456 };
console.log(judith);
function getDbId(id) {
    console.log("DB id is: ".concat(id));
}
getDbId(2);
getDbId("two");
