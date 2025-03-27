// Das ist wieder eine Union. Diese können zwar aus unterschiedlichen Types bestehen, aber alle Werte müssen den gleichen Type haben. 
// const user: (string | number)[] = [1, "jb"]

// In Tuples legt man fest welchen Type ein bestimmter Wert in dem Array haben soll. Man legt die Reihenfolge im Tuple fest, man kann daran dann nichts mehr beim bestücken des Arrays ändern.
const tUser: [string, number, boolean] = ["jb", 1, true]

// rgbs sind typische Anwenungsbereiche für Tuples.
let rgb: [number, number, number] = [255, 0, 0]

// Natürlich kann man auch types mit einem tuple besetzen
type User = [number, string]

const newUser: User = [112, "judith"]

// Wenn man dann eine Position verändern möchte, muss man darauf achten, dass dieser Wert zum type passen
newUser[1] = "htiduj"

