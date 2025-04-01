// Wir erstellen hier jetzt einen Costumer und geben die Werte mit, die wir in der Interface als Must-have angegeben haben
var judith = { dbId: 42, email: "judith@mail.com", userId: 1234, startTrail: function () { return "Trail started"; },
    getCoupon: function (name) { return 10; }
};
console.log(judith);
judith.email = "newMail@mail.com";
console.log(judith.email);
