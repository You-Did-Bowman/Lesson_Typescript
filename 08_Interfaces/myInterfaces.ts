/* 
Wir richten einen Prototypen Customer ein. Er hat die Eigenschaften und Props, die ein gewöhnlicher Customer in unserem Programm hat. Es beschreibt nicht wirklich Werte oder wie Methoden aussehen. 
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

// Manchmal möchte man nachträglich eine Property hinzufügen - das passiert natürlich nicht direkt nach der Deklarierung des Interfaces sondern iwo im Projekt in ieiner Datei. Manchmal werden Interfaces auch durch Libraries importiert und es fehlt ein wichtiges Property ... 
// Man ruft dann das Interface nochmal auf das nennt man dann auch "Reopening the interface"
interface Customer {
  githubToken: string;
}

// Wir erstellen hier jetzt einen Costumer und geben die Werte mit, die wir in der Interface als Must-have angegeben haben
const judith: Customer = {
  dbId: 42,
  email: "judith@mail.com",
  userId: 1234,

  // den neuen Prop muss man dann in dem erstelen eines Costumers natürlich ergänzen - wenn er nicht optional ist
  githubToken: "github",

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

// *** Inheritance ***
// Wie bei Classes kann man interfaces auch vererben
interface PremiumCustomer extends Customer {
  paymentPlan: "weekly" | "monthly" | "yearly"
}

// Weil PremiumCostumer ein Verwandter von Customer ist, müssen alle Props von Costumer mitangegeben werden + den Props von dem PremiumCostumer
const matze: PremiumCustomer = {
  dbId: 24,
  email: "matze@mail.com",
  userId: 1233,
  paymentPlan: "yearly",
  githubToken: "github",
  startTrail: () => "Trail started",
  getCoupon: (name: "matzeVoucher") => 10,
}
