class Toy {
  constructor(
    public name: string,
    public price: number,
    private owner: string,
    private _amount = 1,
  ) {
  }

  // Private Methoden
  private deleteToy() {
    console.log("Toy wurde gelöscht")
  }

  // Getter für den Preis
  get getPrice(): string {
    return `€${this.price}`
  }

  // Getter für die Anzahl
  get amount(): number {
    return this._amount
  }

  // Setter für die Anzahl - Setter brauchen keinen type für den return
  set amount(number){
    if (number <= 1) {
      throw new Error("Die Anzahl muss mindestens 1 sein")
    }
    this._amount = number
  }
}

const powerRanger = new Toy("Power Ranger", 15, "Alex", 2)

// powerRanger.deleteToy // Nicht möglich, weil "deleteToy" eine private Methode ist
