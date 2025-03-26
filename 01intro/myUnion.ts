// Manchmal kann eine variable auch unterschiedliche Types haben. Dann benutzt man bei der Deklaration "|" - dies nennt man Union. Man sollte nicht all zu viel erlauben, sonst kann man auch "any" benutzten und das will keiner.
let score: number | string = 33;

score = "thirtythree";

type Person = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

// Judith wird nach dem Type "Person" deklariert
let judith: Person | Admin = {name: "judith", id: 123456};
console.log(judith);

// Aber wir können sie auch mit infos wie beim "Admin" beschreiben
judith = {username: "ju", id: 12456}
console.log(judith);

function getDbId(id: number | string) {
    console.log(`DB id is: ${id}`);
}

getDbId(2)
getDbId("two")

// ---------------- UNION IN ARRAY -----------------------
const data: (number | string)[] = [1, 2, 3, 4, "5"]