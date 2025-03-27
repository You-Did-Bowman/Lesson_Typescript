# <span style="color: lightcoral"> Tuples
In TypeScript sind Tuples eine Möglichkeit, ein Array mit einer festen Anzahl von Elementen zu definieren, bei dem jedes Element einen spezifischen Typ hat. Im Gegensatz zu normalen Arrays, bei denen alle Elemente denselben Typ haben, kann man in einem Tuple unterschiedliche Datentypen kombinieren.

## <span style="color: lightgreen"> Syntax eines Tuples
```ts
// Ein Tupel mit zwei Werten: string und number
let person: [string, number] = ["Alice", 30];
```

Hier darf das erste Element nur ein `string` und das zweite nur eine `number` sein.

## <span style="color: lightgreen"> Typische Anwendungsfälle von Tuples
1. **Fixe Datenstrukturen:** Wenn man genau weiß, wie viele Werte und welche Typen man speichern möchte (z. B. Koordinaten oder API-Antworten).

2. **Rückgabewerte von Funktionen:** Wenn eine Funktion mehrere Werte unterschiedlicher Typen zurückgeben soll.

## <span style="color: lightgreen"> Beispiel im Detail

### <span style="color: lightblue"> Einfaches Tuples
```js
let user: [string, number] = ["Bob", 25];
console.log(user[0]); // "Bob"
console.log(user[1]); // 25
```

### <span style="color: lightblue">Mit `readonly`
```js
const point: readonly [number, number] = [10, 20];
point[0] = 15; // ❌ Fehler: Das Tuple ist schreibgeschützt
```

### <span style="color: lightblue">Tulpe in Funktionen
```js
function getUser(): [string, number] {
  return ["Charlie", 35];
}
const user = getUser();
console.log(user); // ["Charlie", 35]
```

### <span style="color: lightblue">optionale Elemente in Tuples
```js
let data: [string, number?] = ["Alice"];
console.log(data); // ["Alice"]
```

### <span style="color: lightblue">Benannte Tuples (zur besseren Lesbarkeit)
```js
type User = [name: string, age: number];
const user: User = ["Dave", 40];
console.log(user[0]); // "Dave"
```

## <span style="color: lightgreen"> Besonderheiten von Tuples
1. **Feste Länge:** Du kannst nur genau so viele Werte speichern, wie du im Typ definiert hast.

2. **Reihenfolge zählt:** Die Typen müssen exakt der Reihenfolge im Tuple-Typ entsprechen.

3. **Methoden wie bei Arrays:** Du kannst push() oder pop() verwenden, auch wenn es nicht empfohlen wird, weil es die Typensicherheit bricht.

```ts
let color: [number, number, number] = [255, 0, 0];
color.push(128); // ✅ Erlaubt, aber bricht die feste Struktur
console.log(color); // [255, 0, 0, 128]
```
