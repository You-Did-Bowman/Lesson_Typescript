var judith = { dbId: 42, email: "judith@mail.com", userId: 1234, startTrail: function () { return "Trail started"; },
    getCoupon: function (name) { return 10; }
};
console.log(judith);
judith.email = "newMail@mail.com";
console.log(judith);
