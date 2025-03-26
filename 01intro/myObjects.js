// TS ist auf JS aufgebaut ... daher ist es auch nocht object orientated
// objects sind genauso aufgebaut wir in JS
var user = {
    name: "Judith",
    email: "judith@mail.com",
    isActive: true,
};
// Wenn man mit ihnen arbeitet, muss man für jeden key, den Type mitangeben, weil sonst der default erstellt wird ... "any"
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "judith", isPaid: false });
// Hier teilen wir mit, dass der Type von return ein object ist ": {}"
function createCourse(name, price) {
    return { name: name, price: price };
}
console.log(createCourse("react", 50));
function addUser(user) {
    return user;
}
// Da wir als Type "User" angegeben haben. Muss nun der Parameter auch so aufgebaut sein, wie wir "User" als Type festgelegt haben - als object mit allen benannten keys. 
console.log(addUser({ name: "judith", email: "judith@mail,com", isActive: true }));
