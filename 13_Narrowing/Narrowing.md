# <span style="color: lightcoral">Narrowing
Narrowing bedeutet, dass TypeScript die möglichen Typen einer Variablen eingrenzt. Da TypeScript mit Union Types (`string | number | boolean` etc.) arbeitet, muss man oft sicherstellen, dass eine Variable einen bestimmten Typ hat, bevor man darauf zugreift.

TypeScript hilft dabei mit Type Guards, um zur Laufzeit den Typ einer Variablen zu prüfen.

## <span style="color: lightgreen">1. Typ Guards (Typ-Prüfung in if-Statements)
Der einfachste Weg - Narrowing zu nutzen, ist die `typeof`-Prüfung:
```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase()); // ✅ `toUpperCase()` geht nur für Strings
  } else {
    console.log("Number:", value.toFixed(2)); // ✅ `toFixed(2)` geht nur für Zahlen
  }
}

printValue("Hallo"); // ✅ "String: HALLO"
printValue(3.1415);  // ✅ "Number: 3.14"
```
### ➡ Warum wichtig?
- `toUpperCase()` funktioniert nur für `string`, nicht für `number`.
- `toFixed(2)` funktioniert nur für `number`, nicht für `string`.
- TypeScript erkennt den Typ nach der `typeof`-Prüfung und verhindert Fehler.

## <span style="color: lightgreen">2. `in`-Operator für Objekte
Falls eine Variable mehrere mögliche Objekttypen hat, kann man den `in`-Operator nutzen:
```ts
type User = { name: string; age: number };
type Admin = { name: string; permissions: string[] };

function printPerson(person: User | Admin) {
  if ("permissions" in person) {
    console.log("Admin mit Rechten:", person.permissions);
  } else {
    console.log("User mit Alter:", person.age);
  }
}

printPerson({ name: "Alice", age: 25 });          // ✅ "User mit Alter: 25"
printPerson({ name: "Bob", permissions: ["edit"] }); // ✅ "Admin mit Rechten: edit"
```
### ➡ Warum sinnvoll?
- `"permissions"` in `person` prüft, ob `person` das permissions-Feld hat.
- So kann man zwischen User und Admin unterscheiden.

## <span style="color: lightgreen">3. `instanceof`für Klassen
Falls man in Klassen und Instanzen arbeitet, kann man `instanceof`nutzen:
```ts
class Dog {
  bark() {
    console.log("Wuff!");
  }
}

class Cat {
  meow() {
    console.log("Miau!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // ✅ Sicherer Zugriff auf `bark()`
  } else {
    animal.meow(); // ✅ Sicherer Zugriff auf `meow()`
  }
}

makeSound(new Dog()); // ✅ "Wuff!"
makeSound(new Cat()); // ✅ "Miau!"
```
### ➡ Warum sinnvoll?
- `animal instanceof Dog` prüft, ob `animal` eine Instanz der Klasse `Dog` ist.

## <span style="color: lightgreen">4. Type Predicates (`is`-Funktion für benutzerdefiniertes Narrowing)
Manchmal reicht `typeof`, `in` oder `instanceof` nicht aus. Dann kann man eine benutzerdefinierte Type-Guard-Funktion mit `is` nutzen:
```ts
type Car = { type: "car"; speed: number };
type Bike = { type: "bike"; gear: number };

function isCar(vehicle: Car | Bike): vehicle is Car {
  return vehicle.type === "car";
}

function printVehicle(vehicle: Car | Bike) {
  if (isCar(vehicle)) {
    console.log("Auto mit Geschwindigkeit:", vehicle.speed);
  } else {
    console.log("Fahrrad mit Gang:", vehicle.gear);
  }
}

printVehicle({ type: "car", speed: 120 }); // ✅ "Auto mit Geschwindigkeit: 120"
printVehicle({ type: "bike", gear: 7 });   // ✅ "Fahrrad mit Gang: 7"
```
### ➡ Warum sinnvoll?
- `isCar(vehicle): vehicle is Car` sagt TypeScript, dass `vehicle` ein `Car` ist.
- So kann TypeScript nach dem `if (isCar(vehicle))` sicher auf `vehicle.speed` zugreifen.

## <span style="color: lightgreen">5. Discriminated Union (unterscheidung mit `type`-Eigenschaft)
Falls Typen eine gemeinsame Eigenschaft haben, kann man sie direkt unterscheiden:
```ts
type Circle = { kind: "circle"; radius: number };
type Rectangle = { kind: "rectangle"; width: number; height: number };

function getArea(shape: Circle | Rectangle) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

console.log(getArea({ kind: "circle", radius: 10 })); // ✅ 314.16
console.log(getArea({ kind: "rectangle", width: 5, height: 10 })); // ✅ 50
```
### ➡ Warum sinnvoll?
- Die `kind`-Eigenschaft gibt den Typ an `(circle | rectangle)`.
- `switch(shape.kind)` reduziert den Typ auf eine mögliche Variante.

## <span style="color: lightgreen">6. Welche Technik wann nutzen?
|Technik	|Wann verwenden?|
|--|--|
|**`typeof`**|Für primitive Typen (`string`, `number`, `boolean`, `symbol`, `bigint`).|
|**`in`-Operator**|Wenn sich Objekte durch eine Eigenschaft unterscheiden.|
|**`instanceof`**|Wenn mit Klassen gearbeitet wird.|
|**Type Predicates (`is`)**|Falls eine spezielle Prüfung nötig ist.|
|**Discriminated Unions (`kind`-Eigenschaft)**|Falls alle Typen eine gemeinsame |`kind`-Eigenschaft haben.|
