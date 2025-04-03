# <span style="color: lightcoral">Generics
Generics ermöglichen es, wiederverwendbaren Code zu schreiben, der mit beliebigen Datentypen funktioniert. Sie werden oft bei Funktionen, Klassen und Interfaces verwendet, um Typsicherheit beizubehalten, ohne sich auf einen bestimmten Typ festzulegen.

## <span style="color: lightgreen">1. Syntax
Die generische Syntax wird in spitzen Klammern `<T>` direkt nach einem Funktions-, Klassen- oder Interface-Namen geschrieben.

### Beispiel:
```ts
function identity<T>(value: T): T {
  return value;
}
```
- `<T>` ist der Typ-Parameter (T ist eine Konvention, kann aber beliebig benannt werden).
- `value: T` bedeutet, dass die Funktion ein Argument vom Typ `T` erwartet.
- `: T` gibt an, dass die Funktion denselben Typ `T` zurückgibt.

### Verwendung
```ts
console.log(identity<string>("Hallo")); // ✅ "Hallo"
console.log(identity<number>(42)); // ✅ 42
```

## <span style="color: lightgreen">2. Generic functions
Ohne Generics müsste man für verschiedene Typen mehrere Funktionen schreiben:
```ts
function identityString(value: string): string {
  return value;
}

function identityNumber(value: number): number {
  return value;
}
```
Mit Generics kann man stattdessen eine generische Funktion schreiben:
```ts
function identity<T>(value: T): T {
  return value;
}

// Verwendung mit verschiedenen Typen
console.log(identity<string>("Hallo")); // ✅ "Hallo"
console.log(identity<number>(42)); // ✅ 42
console.log(identity<boolean>(true)); // ✅ true
```
### ➡ Erklärung:
- `T` ist ein Platzhalter für den Typ und wird erst beim Aufruf festgelegt.
- Die Funktion gibt denselben Typ zurück, der als Argument übergeben wird.

### <span style="color: lightblue">2.1 ... mit mehreren Typen
Man kann auch mehrere Generics in einer Funktion nutzen:
```ts
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const person = merge({ name: "Alice" }, { age: 25 });
console.log(person); // ✅ { name: "Alice", age: 25 }
```
### ➡ Warum hilfreich?
- `merge` kombiniert zwei Objekte mit unterschiedlichen Typen zu einem neuen Objekt.

## <span style="color: lightgreen">3. Generic classes
Generics können auch in Klassen verwendet werden, um flexiblere Datenstrukturen zu erstellen:
```ts
class Box<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

// Box mit einem `string`
const stringBox = new Box<string>("Hallo TypeScript");
console.log(stringBox.getContent()); // ✅ "Hallo TypeScript"

// Box mit einer `number`
const numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // ✅ 123
```
### ➡ Warum sinnvoll?
- Die Klasse `Box<T>` kann mit beliebigen Typen arbeiten.
- Sie bleibt typsicher, ohne dass der Typ vorher festgelegt werden muss.

## <span style="color: lightgreen">4. Generic interfaces
Ein Interface kann mit Generics definieren, welche Typen es verwenden soll:
```ts
interface Pair<T, U> {
  first: T;
  second: U;
}

const pair1: Pair<string, number> = { first: "Alter", second: 30 };
const pair2: Pair<boolean, string> = { first: true, second: "Erfolg" };

console.log(pair1); // ✅ { first: "Alter", second: 30 }
console.log(pair2); // ✅ { first: true, second: "Erfolg" }
```
### ➡ Wofür nützlich?
- Generische Interfaces helfen, strukturierte, typsichere Objekte zu definieren.

## <span style="color: lightgreen">5. Generics mit Default-Typen
Man kann einen Standardtyp für Generics festlegen:
```ts
class Storage<T = string> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItems(): T[] {
    return this.data;
  }
}

// Standardmäßig werden Strings gespeichert
const stringStorage = new Storage();
stringStorage.addItem("Hello");
console.log(stringStorage.getItems()); // ✅ ["Hello"]

// Man kann auch einen anderen Typ angeben
const numberStorage = new Storage<number>();
numberStorage.addItem(42);
console.log(numberStorage.getItems()); // ✅ [42]
```

## <span style="color: lightgreen"> 7. Fazit
|Vorteil|Beschreibung|
|--|--|
|**Flexibilität**|Eine Funktion oder Klasse kann mit mehreren Typen arbeiten.|
|**Typsicherheit**|Es wird sichergestellt, dass nur kompatible Typen verwendet werden.|
|**Wiederverwendbarkeit**|Generics verhindern doppelten Code für verschiedene Typen.|
|**Codequalität**|Bessere Lesbarkeit und weniger Fehler durch klar definierte Typen.|
