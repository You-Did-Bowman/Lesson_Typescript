// Mehrere Generics in einer Funktion
function createObject<T, U>(name: T, num: U): object {
    return {name, num}
}

console.log("1. function:", createObject("Peter", 4));

// ---------------------------------------------------------------------------------

// extends
// Wir schreiben eine Database
interface Database {
    connection: string,
    username: string,
    password: string
}

const db: Database = {
    connection: "strong-connection",
    username: "Database 2.0",
    password: "12345"
}

// ... und legen dann fest, dass "U" unbedingt aus dieser "Database" bestehen muss
function readDatabase<T, U extends Database>(db: U): string {
    return db.connection
}

console.log("2. function:", readDatabase(db));

// man könnte aber anstatt "U" auch einfach direkt "Database" schreiben

// --------------------------------------------------------------------------------

// CLASSES

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(products: T){
        this.cart.push(products)
    }
}
