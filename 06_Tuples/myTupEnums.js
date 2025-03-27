/* In TypeScript sind Tuples eine Möglichkeit, ein Array mit einer festen Anzahl von Elementen zu definieren, bei dem jedes Element einen spezifischen Typ hat. Im Gegensatz zu normalen Arrays, bei denen alle Elemente denselben Typ haben, kannst du in einem Tuple unterschiedliche Datentypen kombinieren.
*/
// Das ist wieder eine Union. Diese können zwar aus unterschiedlichen Types bestehen, aber alle Werte müssen den gleichen Type haben. 
// const user: (string | number)[] = [1, "jb"]
// In Tuples legt man fest welchen Type ein bestimmter Wert in dem Array haben soll. Man legt die Reihenfolge im Tuple fest, man kann daran dann nichts mehr beim bestücken des Arrays ändern.
var tUser = ["jb", 1, true];
// rgbs sind typische Anwenungsbereiche für Tuples.
var rgb = [255, 0, 0];
var newUser = [112, "judith"];
// Wenn man dann eine Position verändern möchte, muss man darauf achten, dass dieser Wert zum type passen
newUser[1] = "htiduj";
