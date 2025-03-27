// TS ist auf JS aufgebaut ... daher ist es auch nocht object orientated

/* // objects sind genauso aufgebaut wir in JS
const user = {
    name: "Judith",
    email: "judith@mail.com",
    isActive: true,
}

// Wenn man mit ihnen arbeitet, muss man für jeden key, den Type mitangeben, weil sonst der default erstellt wird ... "any"
function createUser({name: string, isPaid: boolean}) {   
}

createUser({name: "judith", isPaid: false})

// Hier teilen wir mit, dass der Type von return ein object ist ": {}"
function createCourse(name: string, price: number): {} {
    return {name, price}
}

console.log(createCourse("react", 50)) */

// ------------- TYPE ALIASES ------------------

// Wir können auch unsere eigenen Types erstellen.
/* type User = {
    name: string;
    email: string;
    isActive: boolean
}

function addUser(user: User): User {
    return user
}

// Da wir als Type "User" angegeben haben. Muss nun der Parameter auch so aufgebaut sein, wie wir "User" als Type festgelegt haben - als object mit allen benannten props. Das hilft den Code wieder sauberer zu machen und darauf zu achten, dass weniger Fehler entstehen. Er würde nämlich meckern, wenn wir einen key vergessen, der gebraucht wird.
console.log(addUser({name: "judith", email: "judith@mail,com", isActive: true})) */

type User = {
  // readonly macht diesen prop schreibgeschützt. Wir machen das hier mit der Id in MongoDB
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  // "?" macht den prop optional - nicht jeder hat eine Kreditkarte ;)
  creditcardDetails?: number;
};

let myUser: User = {
  _id: "123456",
  name: "Judith",
  email: "judith@mail.com",
  isActive: true,
};


console.log(myUser);


type cardNumber = {
    num: string
}

type cardDate = {
    date: string
}

// Wir können Types aus frankensteinen aus anderen Types.
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

// das geht easy
myUser.email = "newMail";

// das geht nicht, weil wir es "readonly" gemacht haben
// myUser._id = "147852"

console.log(myUser)
