class User {
    // Wir schreiben hier, welche Props diese Klasse hat und natürlich welchem type sie haben.
    email: string;
    name: string;
    city: string

    // Wie in JS brauchen wir einen constructor. Nur sind wir hier in TypeScript und daher benötigt der constructor Informationen zum type
    constructor(email: string, name: string) {
        this.email = email; // Wenn wir vorher nicht bestimmt haben, welchen type diese Props haben, dann meckert er hier. 
        this.name = name;
    }
}

const alex = new User("alex@mail.com", "alex")

console.log(alex); // User { email: 'alex@mail.com', name: 'alex' }

alex.city = "Hamburg"

console.log(alex);  // User { email: 'alex@mail.com', name: 'alex', city: 'Hamburg' }