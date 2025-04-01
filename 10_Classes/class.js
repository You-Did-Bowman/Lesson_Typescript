var User = /** @class */ (function () {
    // Wie in JS brauchen wir einen constructor. Nur sind wir hier in TypeScript und daher benötigt der constructor Informationen zum type
    function User(email, name) {
        this.email = email; // Wenn wir vorher nicht bestimmt haben, welchen type diese Props haben, dann meckert er hier. 
        this.name = name;
    }
    return User;
}());
var alex = new User("alex@mail.com", "alex");
console.log(alex); // User { email: 'alex@mail.com', name: 'alex' }
alex.city = "Hamburg";
console.log(alex); // User { email: 'alex@mail.com', name: 'alex', city: 'Hamburg' }
