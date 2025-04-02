class User {
  // Wir schreiben hier, welche Props diese Klasse hat und natürlich welchem type sie haben.

  // "public" ist der default
  public email: string;

  // mit "private" halte ich fest, dass ich dieses prop nur innerhalb der Initialisierung der Class benutzen kann, danach kann ich es nich mehr mit "className.age" aufrufen.
  private age: number;

  // dies verhält sich wie "private" man kann es nicht von außen erreichen, aber es wird mitvererbt
  protected name: string;

  city: string;

  // Wie in JS brauchen wir einen constructor. Nur sind wir hier in TypeScript und daher benötigt der constructor Informationen zum type
  constructor(email: string, name: string, age: number) {
    this.email = email; // Wenn wir vorher nicht bestimmt haben, welchen type diese Props haben, dann meckert er hier.
    this.name = name;
    this.age = age;
  }
}

const alex = new User("alex@mail.com", "alex", 45);

// alex.name // geht nicht weil "private"

console.log(alex); // User { email: 'alex@mail.com', name: 'alex' }

alex.city = "Hamburg";

console.log(alex); // User { email: 'alex@mail.com', name: 'alex', city: 'Hamburg' }

/* ------------ Shortcut Version ----------------- */

class Animal {
  constructor(
    public name: string,
    private owner: string,
    private age: number
  ) {}
}

/* ------------ Inheritance ------------------ */
// private props werden nicht vererbt
class SubUser extends User {
  isFamily: boolean = true;
  changeName() {
    this.name = "Peter";
  }
}
