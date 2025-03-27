# <span style="color: lightcoral">Funktionen
In TypeScript können Funktionen mit klar definierten Parametern und Rückgabetypen erstellt werden. Dies hilft dabei, Fehler frühzeitig zu erkennen und den Code sicherer und besser verständlich zu machen.

## <span style="color: lightgreen">Funktionsdefinitionen in TS
### <span style="color: lightblue">1. Funktionen mit Parametern und Rückgabetypen
Man kann den Typ jedes Parameters und den Rückgabetyp explizit angeben.
```ts
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3)); // 8
```
- `a: number` und `b: number` definieren die Parameter.

- `: number` hinter der Klammer gibt den Rückgabetyp an.

### <span style="color: lightblue">2. Optionale Parameter `?`
Mit einem `?` kann man einen Parameter optional machen. Optionalen Parametern wird automatisch der Typ `undefined` hinzugefügt.
```ts
function greet(name: string, age?: number): string {
  return age ? `Hallo ${name}, du bist ${age} Jahre alt.` : `Hallo ${name}`;
}

console.log(greet("Anna"));         // "Hallo Anna"
console.log(greet("Anna", 30));     // "Hallo Anna, du bist 30 Jahre alt."
```

### <span style="color: lightblue">3. Standardwerte für Parameter
Man kann Standardwerte für Parameter angeben, die verwendet werden, wenn kein Argument übergeben wird.
```ts
function greet(name: string = "Gast"): string {
  return `Hallo, ${name}`;
}

console.log(greet());           // "Hallo, Gast"
console.log(greet("Anna"));     // "Hallo, Anna"
```

## <span style="color: lightgreen">Funktionen ohne Rückgabewert: `void`
Falls eine Funktion keinen Wert zurückgibt, verwendet man den Typ `void`.
```ts
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Das ist eine Nachricht."); // Ausgabe: Das ist eine Nachricht.
```

## <span style="color: lightgreen">Arrow-Funktionen in TS
Arrow-Funktionen haben eine kürzere Syntax und können ebenfalls getypt werden.
```ts 
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(4, 5)); // 20
```

## <span style="color: lightgreen">Funktionssignaturen (Typen für Funktionen)
Mit Funktionssignaturen kann man festlegen, welche Parameter und Rückgabewerte eine Funktion akzeptieren darf.
```ts
type Add = (a: number, b: number) => number;

const add: Add = (x, y) => x + y;

console.log(add(10, 5)); // 15
```

## <span style="color: lightgreen">`never`-Typ bei Funktionen
Der `never`-Typ wird verwendet, wenn eine Funktion nie einen Wert zurückgibt, z. B. bei **Fehlern** oder **Endlosschleifen**.
```ts
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    console.log("Endlos...");
  }
}
```

## <span style="color: lightgreen">Rückgabetyp `unknown`
Falls der genaue Rückgabetyp `unbekannt` ist, kann man unknown verwenden. Es ist sicherer als `any`, weil man eine Typprüfung vor der Nutzung durchführen muss.
```ts
function parseJson(json: string): unknown {
  return JSON.parse(json);
}

const data = parseJson('{"name": "Max"}');

if (typeof data === "object" && data !== null && "name" in data) {
  console.log((data as { name: string }).name); // "Max"
}
```