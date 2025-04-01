/* 
Wir richten einen Prototypen Customer ein. Er hat die Eigenschaften und Keys, die ein gewöhnlicher Customer in unserem Programm hat. Es beschreibt nicht wirklich Werte oder wie Methoden aussehen. 
Interface erstellt einen Blaupause und ist im wahrsten Sinne des Wortes ein Interface. Im Grunde könnte man es als eine sehr rudimentäre Class sehen.
*/
interface Customer {
  readonly dbId: number; // schreibgeschützt
  email: string;
  userId: number;
  googleId?: string; //optional

  // Methoden schreiben 1:
  startTrail: () => string;

  // Methoden schreiben 2:
  stopTrail?(): string;

  getCoupon(couponname: string): number;
}

// Wir erstellen hier jetzt einen Costumer und geben die Werte mit, die wir in der Interface als Must-have angegeben haben
const judith: Customer = {
  dbId: 42,
  email: "judith@mail.com",
  userId: 1234,

  // den Methoden geben wir jetzt logic, welche zu dem Interface passt
  startTrail: () => "Trail started",
  getCoupon: (name: "judithVoucher") => 10,
};

console.log(judith);
/* 
{
  dbId: 42,
  email: 'judith@mail.com',
  userId: 1234,
  startTrail: [Function: startTrail],
  getCoupon: [Function: getCoupon]
} 
*/

judith.email = "newMail@mail.com";

console.log(judith.email); // newMail@mail.com
