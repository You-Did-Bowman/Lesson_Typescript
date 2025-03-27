# <span style="color: lightcoral">Objects
In TypeScript sind Objects (Objekte) eine grundlegende Datenstruktur, um mehrere Werte unter Schlüssel-Wert-Paaren zu speichern. TypeScript bietet die Möglichkeit, die Struktur und die Typen der Werte innerhalb eines Objekts genau zu definieren.

## <span style="color: lightgreen">Objekte in TypeScript definieren
Ein einfaches Objekt besteht aus einer Sammlung von Properties (Eigenschaften), die bestimmte Typen haben.

### <span style="color: lightblue">Beispiel: Einfaches Objekt
```ts 
let user: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};

console.log(user.name); // "Alice"
```

Hier muss `user` ein Objekt mit zwei Eigenschaften haben:
- `name` muss ein **string** sein
- `age` muss eine **number** sein

## <span style="color: lightgreen">Struktur eines Objekts definieren
### <span style="color: lightblue">1. Typannotation für Objekte
```ts
let product: { id: number; title: string; inStock: boolean } = {
  id: 101,
  title: "Laptop",
  inStock: true,
};
```

### <span style="color: lightblue">2. Optionale Eigenschaften `?`
Man kann bestimmte Eigenschaften optional machen, indem man ein Fragezeichen (`?`) verwendet.
```ts
type User = {
  name: string;
  age?: number; // optional
};

let user1: User = { name: "Bob" };          // ✅ erlaubt (ohne age)
let user2: User = { name: "Charlie", age: 25 }; // ✅ erlaubt (mit age)
```

### <span style="color: lightblue">3. `readonly`Eigenschaft (schreibgeschützt)
Mit `readonly` kann man sicherstellen, dass eine Eigenschaft nicht verändert werden kann.
```ts
type Car = {
  readonly id: number;
  brand: string;
};

const car: Car = { id: 1, brand: "Tesla" };
car.brand = "BMW";  // ✅ erlaubt
car.id = 2;         // ❌ Fehler: id ist readonly
```

### <span style="color: lightblue">4. Index-Signaturen (Dynamische Schlüssel)
Falls man nicht genau weiß, welche Schlüssel ein Objekt haben wird, kann man eine Index-Signatur verwenden.
```ts 
type Dictionary = {
  [key: string]: number;
};

const scores: Dictionary = {
  Alice: 95,
  Bob: 85,
};

scores["Charlie"] = 90; // ✅ erlaubt
```
Hier sagt `[key: string]: number`, dass alle Schlüssel `string` sein müssen und die Werte `number`.
