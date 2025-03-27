# <span style="color: lightcoral">Variablen
In TypeScript kann man Variablen ähnlich wie in JavaScript deklarieren, aber mit zusätzlichen Möglichkeiten zur **Typisierung**. Dies bietet mehr Sicherheit und bessere Code-Qualität.

## <span style="color: lightgreen">Primitive Typen
Hier sind die wichtigsten Basisdatentypen in TypeScript:

|Typ|Beschreibung|Beispiel|
|--|--|--|
|`string`|Zeichenketten|`"Hallo"`|
|`number`|Zahlen (ganzzahlig oder Gleitkomma)|`42`, `3.14`|
|`boolean`|Wahrheitswerte (true/false)|`true`, `false`|
|`undefined`|Unbestimmter Wert|`let x: undefined`|
|`null`|Leerer Wert|`let y: null`|
|`bigint`|Große Granzzahlen|`let big: bignit = 123n`|
|`symbol`|Einzigartige Identifikatoren|`let id: symbol = Symbol()`|

### Beispiel:
```ts
let isCompleted: boolean = false;
let count: number = 42;
let firstName: string = "Anna";
let value: null = null;
let notAssigned: undefined = undefined;
```

## <span style="color: lightgreen">Komplexe Typen

### <span style="color: lightblue">1. Arrays
Arrays können mit zwei Methoden typisiert werden:
```ts
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Anna", "Max"];
```

### <span style="color: lightblue">2. Objekte
Objekte werden mit Schlüssel-Wert-Paaren typisiert.
```ts
let person: { name: string; age: number } = {
  name: "Anna",
  age: 30,
};
```

### <span style="color: lightblue">3. Tulpes
Ein Tulpe ist ein Array mit einer festgelegten Struktur.
```ts
let user: [string, number] = ["Anna", 30];
```

## <span style="color: lightgreen">Spezielle Typen in TypeScript
### <span style="color: lightblue">1. `any` (Beliebiger Typ)
Mit `any`kann eine Variable jeden Typ annehmen. Dies deaktiviert die Typprüfung.
```ts 
let data: any = "Hallo";
data = 123;     // ✅ Erlaubt
data = true;    // ✅ Erlaubt
```
- **Achtung:** `any`sollte nur in Ausnahmefällen verwendet werden, da es die Vorteile der Typprüfung aufhebt.

### <span style="color: lightblue">2. `unknown`(Unbekannter Typ)
`unknown`ist eine sicherere Alternative zu `any`, da vor der Nutzung eine Typprüfung erforderlich ist.
```ts
let value: unknown = "Hallo";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Erlaubt nach Prüfung
}
```

### <span style="color: lightblue">3. `never` (Niemals zurückkehrend)
`never`beschreibt Variablen oder Funktionen, die niemals einen Wert haben (Bsp. Fehler) oder nicht abgeschlossen werden.
```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

### <span style="color: lightblue">4. `void`(Kein Rückgabewert)
`void`wird für Funktionen genutzt, die nichts zurückgeben.
```ts
function logMessage(message: string): void {
  console.log(message);
}
```

## <span style="color: lightgreen">Union und Intersection Typen
### <span style="color: lightblue">1. Union-Typen (`|`)
Mit Union-Typen kann eine Variable mehrere Typen annehmen.
```ts
let id: string | number;
id = 42;         // ✅ Erlaubt
id = "abc123";   // ✅ Erlaubt
```

### <span style="color: lightblue">2. Intersection-Typen (`&`)
Intersection Typen kombinieren mehrere Typen zu einem neuen Typ.
```ts
type Person = { name: string };
type Employee = { id: number };

let worker: Person & Employee = {
  name: "Anna",
  id: 123,
};
```

## <span style="color: lightgreen">Typalias
Typalias ermöglicht benannte Typen für bessere Wiederverwendbarkeit.
```ts
type User = {
  name: string;
  age: number;
};

let user: User = { name: "Anna", age: 30 };
```
