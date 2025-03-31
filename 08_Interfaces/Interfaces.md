# <span style="color: lightcoral">Interfaces
In TypeScript ermöglichen Interfaces die Definition der Struktur von Objekten. Sie helfen dabei, den Code typsicher und besser wartbar zu machen. Interfaces definieren, welche Eigenschaften und Methoden ein Objekt oder eine Klasse haben muss.

## <span style="color: lightgreen">Ein einfaches Interface
Ein Interface beschreibt die Form eines Objekts, indem es die erwarteten Eigenschaften und deren Typen definiert.
```ts 
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Anna",
  age: 30,
};

console.log(user.name); // "Anna"
```
Hier muss das Objekt `user` genau die Struktur des `Person`-Interfaces erfüllen.

## <span style="color: lightgreen">Optionale Eigenschaften
Mit dem `?`-Operator können optionale Eigenschaften definiert werden.
```ts
interface Car {
  brand: string;
  model: string;
  year?: number; // Optional
}

const myCar: Car = {
  brand: "Toyota",
  model: "Corolla",
};

console.log(myCar.year); // undefined
```
Hier ist `year` optional – es kann weggelassen werden.

## <span style="color: lightgreen">Nur lesbare Eigenschaften
Mit `readonly` markierte Eigenschaften können nicht verändert werden.
```ts 
interface Book {
  readonly title: string;
  author: string;
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Max Mustermann",
};

myBook.title = "New Title"; // ❌ Fehler: title ist readonly
```

## <span style="color: lightgreen">Methoden in Interfaces
Interfaces können Methoden mit definierten Rückgabetypen enthalten.
```ts 
interface Animal {
  name: string;
  speak(): string;
}

const dog: Animal = {
  name: "Bello",
  speak() {
    return "Woof!";
  },
};

console.log(dog.speak()); // "Woof!"
```
Die Methode `speak` muss in Objekten, die das Interface implementieren, vorhanden sein.

## <span style="color: lightgreen">Index-Signaturen
Mit Index-Signaturen kann ein Interface eine beliebige Anzahl von Eigenschaften eines bestimmten Typs erlauben.
```ts
interface Dictionary {
  [key: string]: string;
}

const translations: Dictionary = {
  hello: "Hallo",
  world: "Welt",
};

console.log(translations.hello); // "Hallo"
```
Hier können beliebige `string`-Schlüssel mit `string`-Werten definiert werden.

## <span style="color: lightgreen">Vererbung von Interfaces
Man kann Interfaces erweitern (ähnlich wie bei Klassen).
```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  id: number;
}

const worker: Employee = {
  name: "Anna",
  id: 123,
};

console.log(worker.name); // "Anna"
```
Hier erbt `Employee `alle Eigenschaften von `Person` und fügt `id` hinzu.

## <span style="color: lightgreen">Mehrfachvererbung
Ein Interface kann mehrere andere Interfaces erweitern.
```ts
interface HasName {
  name: string;
}

interface HasAge {
  age: number;
}

interface Person extends HasName, HasAge {
  job: string;
}

const user: Person = {
  name: "Max",
  age: 29,
  job: "Developer",
};

console.log(user); // { name: 'Max', age: 29, job: 'Developer' }
```

## <span style="color: lightgreen">Funktionen mit Interfaces beschreiben
Man kann auch Funktionssignaturen in Interfaces definieren.
```ts
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (x, y) => x + y;

console.log(add(5, 7)); // 12
```
Hier beschreibt `MathOperation` eine Funktion mit zwei `number`-Parametern und einem `number`-Rückgabewert.

## <span style="color: lightgreen">Klassen mit Interfaces implementieren
Interfaces können von Klassen implementiert werden. Eine Klasse muss alle Eigenschaften und Methoden des Interfaces bereitstellen.
```ts
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}

const logger = new ConsoleLogger();
logger.log("Hello TypeScript!"); // "Hello TypeScript!"
```

## <span style="color: lightgreen">Unterschied: `interface` vs `type`
|Feature| interface| type|
|--|--|--|
|Erweiterbarkeit| `extends` (Vererbung)| Mit `&` (Intersection)|
|Zusammensetzen|	Mehrfachvererbung möglich| Mit Union oder Intersection|
|Nutzung bei Klassen| Kann implementiert werden| Nicht direkt implementierbar|
|Komplexe Typen| Weniger flexibel| Unterstützt Unions, Tuples usw.|
|Performance| Optimierter, schneller| Etwas langsamer in großen Projekten|

- Interfaces sind speziell für Objekte und Klassen optimiert – für komplexe Typen kann type sinnvoller sein.