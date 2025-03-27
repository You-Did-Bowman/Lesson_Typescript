// ------------ PARAMETER in FUNCTIONS ------------------

// Parameter für functions brauchen auch einen Type. Auch hier gilt wieder, wenn wir keinen Type benennen, dann ist er by default "any".
function addTwo(num: number){
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){
}

// Wir können einen Parameter auch verzichtbar mache, wenn wir "= false" hinzufügen. Dann gibt es keinen Error, wenn wir ihn beim aufrufen der function nicht benennen. 
let loginUser = (name: string, email: string, isPaid: boolean = false) => {
}

let myValue = addTwo(5)

getUpper("judith")

signUpUser("Judith", "judith@mail.com", false)

loginUser("Judith", "judith@mail.com")


// ------------------- TYPES of RETURNS ------------------

// Wenn ich über den Namen der function hover, dann sehe ich , dass der Return entweder ein "true" oder "200 OK" ist. Es gibt also nur ein entweder-der-Type-oder-der-texpe ...
function getValue(myVal: number) {
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}

// Ich kann festlegen, welchen Type der return haben soll. Dafür muss ich nach der Deklaration der Parameter diesen nur angeben. Dann muss aber auch einen return in der function geben, weil sonst TS meckert. 
const getHello = (s: string): string => {
    return "return"
}

// Wenn ich über "heros" hover, sehe ich, dass heros ein array mit string als Type hat ... ohne dass ich dies iwo festgelegt habe.
const heros = ["Thor", "spiderman", "ironman"]

// TS ist schlau. Es erkennt, dass "hero" ein string sein muss, weil er sich in dem array von "heros" befindet. ich muss hier nicht unbedingt den Type von "hero" festlegen.
// Um den Code sauberer zu machen, sollte man den Type des Returns wieder festlegen. 
heros.map((hero): string => {
    return `hero is ${hero}`
})

// Void wird verwendet, wenn es keinen Rückgabewert gibt ODER explizit "undefinde" oder "null" ist. Man verwendet sie, wenn man functions hat, die nur etwas ausführen (logs oder API Aufrufe) und keinen konkreten Wert zurückgeben. 
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

// Never wird verwendet, wenn eine function NIEMALS einen Wert zurückgibt. Man verwendet dies, wenn eine function niemals endet oder einen error auslöst. 
function handleError(msg: string): never {
    throw new Error(msg)
}