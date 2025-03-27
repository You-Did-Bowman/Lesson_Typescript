// TS ist auf JS aufgebaut ... daher ist es auch nocht object orientated
var myUser = {
    _id: "123456",
    name: "Judith",
    email: "judith@mail.com",
    isActive: true,
};
console.log(myUser);
// das geht easy
myUser.email = "newMail";
// das geht nicht, weil wir es "readonly" gemacht haben
// myUser._id = "147852"
console.log(myUser);
