# <span style="color: lightcoral">Enums
In TypeScript bieten Enums (Enumerationen) eine Möglichkeit, benannte Konstanten zu definieren. Sie sind nützlich, um eine Menge von festen Werten zu organisieren, wie z. B. Statuscodes, Richtungen oder Rollen.

## <span style="color: lightgreen">Numerische Enums
Numerische Enums ordnen jedem Element automatisch eine Zahl zu. Standardmäßig beginnt die Zählung bei `0`.
```ts
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

let move: Direction = Direction.Up;
console.log(move); // 0
```

### <span style="color: lightblue">-> Manuelle Zuweisung von Werten
Man kann die Startwerte festlegen und die Zählung beeinflussen.
```ts
enum Status {
  Success = 200,
  NotFound = 404,
  Error = 500
}

console.log(Status.Success);   // 200
console.log(Status["NotFound"]); // 404
```
## <span style="color: lightgreen">String-Enums
String-Enums ordnen den Elementen Zeichenketten zu. Diese sind lesbarer und leichter zu debuggen.
```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let userRole: Role = Role.Admin;
console.log(userRole); // "ADMIN"
```

## <span style="color: lightgreen">Heterogene Enums
Man kann Zahlen und Zeichenketten in einem Enum kombinieren (nicht empfohlen wegen Uneinheitlichkeit).
```ts
enum Mixed {
  Yes = "YES",
  No = 0
}

console.log(Mixed.Yes); // "YES"
console.log(Mixed.No);  // 0
```

## <span style="color: lightgreen">Enum als Typ verwenden
Enums können auch als Typen für Variablen und Parameter genutzt werden.
```ts
enum Color {
  Red,
  Green,
  Blue
}

function printColor(color: Color): void {
  console.log(color);
}

printColor(Color.Green); // 1
```

## <span style="color: lightgreen">Zugriff auf Enums
Man kann sowohl über den Wert als auch über den Schlüssel auf Enum-Elemente zugreifen.
```ts
enum Fruit {
  Apple = 1,
  Banana,
  Cherry
}

console.log(Fruit.Banana); // 2 (Zugriff über den Namen)
console.log(Fruit[1]);     // "Apple" (Zugriff über den Wert)
```

## <span style="color: lightgreen">Konstante (`const`) Enums
Für performantere und optimierte Enums kann man `const` verwenden. Diese werden zur Kompilierungszeit in feste Werte umgewandelt.
```ts
const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3
}

let mySize: Size = Size.Medium;
console.log(mySize); // 2
```

## <span style="color: lightgreen">Enum mit Berechnungen
Man kann Enum-Werte mit Ausdrücken berechnen.
```ts
const baseValue = 100;

enum Calculation {
  Start = baseValue,
  Middle = Start + 50,
  End = Middle * 2
}

console.log(Calculation.End); // 300
```