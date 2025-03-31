interface Customer {
  readonly dbId: number; // schreibgeschützt
  email: string;
  userId: number;
  googleId?: string; //optional

  // Methoden schreiben 1:
  startTrail: (/*logic*/) => string;

  // Methoden schreiben 2:
  stopTrail(/*logic*/): string

  getCoupon(couponname: string): number
}

const judith: Customer = { dbId: 42, email: "judith@mail.com", userId: 1234, startTrail: () => "Trail started",
  getCoupon: (name: "judithVoucher") => 10
};

console.log(judith);

judith.email = "newMail@mail.com";

console.log(judith);




