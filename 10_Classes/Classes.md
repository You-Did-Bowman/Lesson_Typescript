# <span style="color: lightcoral">Classes
TypeScript erweitert die ES6-Klassen um zusätzliche Typensicherheit und Zugriffskontrollen. Hier sind die wichtigsten Konzepte:

## <span style="color: lightgreen">1. Einfache Klassen
```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("Alice", 30);
console.log(person1.greet()); 
```
- Die Klasse `Person` hat zwei Eigenschaften (`name`, `age`), die in TypeScript typisiert sind.
- Der Konstruktor (`constructor`) initialisiert die Eigenschaften.
- Die Methode `greet()` gibt eine formatierte Begrüßung zurück.

## <span style="color: lightgreen">2. Zugriffskontrollen: `public`, `private`, `protected`
### 👀 `public` (Standard)
- Alle Eigenschaften und Methoden sind standardmäßig öffentlich (`public`).
- Man kann von überall darauf zugreifen.

### 🚫 `private`
- Eigenschaften oder Methoden mit `private` sind nur innerhalb der Klasse sichtbar.
- Der Zugriff von außen ist nicht möglich.

### 🛡 `protected`
- Funktioniert wie `private`, aber vererbte Klassen können darauf zugreifen.

```ts
class Person {
  public name: string;  
  private age: number;  
  protected city: string;  

  constructor(name: string, age: number, city: string) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  public getAge(): number {
    return this.age; 
  }
}

const person = new Person("Bob", 25, "Berlin");
console.log(person.name); // ✅ Erlaubt (public)
// console.log(person.age); // ❌ Fehler (private)
// console.log(person.city); // ❌ Fehler (protected)
console.log(person.getAge()); // ✅ Erlaubt (über eine Methode)
```
### ➡ Warum `private` und `protected` nutzen?
- **Datenkapselung**: Verhindert ungewollte Änderungen von außen.
- **Klare Schnittstellen**: Man gibt nur das nach außen frei, was wirklich nötig ist.

## <span style="color: lightgreen">3. Kurzschreibweise für Konstruktoren
```ts
class Person {
  constructor(public name: string, private age: number) {}
}

const p = new Person("Eve", 40);
console.log(p.name); // ✅ Zugriff möglich
// console.log(p.age); // ❌ Fehler (private)
```
### ➡ Warum diese Schreibweise?
- Spart Codezeilen, da TypeScript automatisch die Eigenschaften erstellt.
- `public name: string` ersetzt `this.name = name`.

## <span style="color: lightgreen">4. Vererbung (`extends`)
```ts
class Employee extends Person {
  constructor(name: string, age: number, public jobTitle: string) {
    super(name, age); // Ruft den Konstruktor der Elternklasse auf
  }

  describe(): string {
    return `${this.name} is a ${this.jobTitle}.`;
  }
}

const emp = new Employee("Charlie", 35, "Developer");
console.log(emp.describe()); // Charlie is a Developer.
```
### ➡ Wichtig:
- `extends` ermöglicht die Vererbung von Methoden und Eigenschaften.
- `super(name, age)` ruft den Konstruktor der Elternklasse auf.

## <span style="color: lightgreen">5. Abstrakte Klassen
- Abstrakte Klassen können nicht direkt instanziiert werden.
- Sie dienen als Vorlage für andere Klassen.
- Sie enthalten abstrakte Methoden, die in abgeleiteten Klassen implementiert werden müssen.
```ts
abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): void; // Muss in Unterklassen definiert werden
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Woof! Woof!
```
### ➡ Warum abstrakte Klassen?
- Man kann gemeinsame Logik in der Basisklasse definieren.
- Die Unterklassen müssen die abstrakten Methoden implementieren.

## <span style="color: lightgreen">6. Statische Eigenschaften und Methoden (`static`)
```ts
class MathUtils {
  static readonly PI = 3.14159;

  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.circleArea(5)); // 78.53975
```
### ➡ Wichtig:
- `static` Eigenschaften und Methoden gehören zur Klasse, nicht zu einer Instanz.
- Man kann sie direkt über den Klassennamen aufrufen.
- `readonly` verhindert Änderungen an `PI`.

## <span style="color: lightgreen">7. Interfaces in Klassen (`implements`)
```ts
interface CanDrive {
  drive(speed: number): void;
}

class Car implements CanDrive {
  drive(speed: number): void {
    console.log(`Driving at ${speed} km/h`);
  }
}

const myCar = new Car();
myCar.drive(100);
```
### ➡ Warum `mplements`?
- Stellt sicher, dass eine Klasse bestimmte Methoden hat.
- Erlaubt mehrfache Implementierung (`implements Interface1, Interface2`).

## <span style="color: lightgreen">



### <span style="color: lightblue">