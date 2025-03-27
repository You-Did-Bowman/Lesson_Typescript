# <span style="color: lightcoral">Array
In TypeScript können Arrays verwendet werden, um mehrere Werte desselben oder verschiedener Typen zu speichern. Dabei bietet TypeScript eine Vielzahl von Möglichkeiten, die Typen eines Arrays präzise zu definieren und zu überprüfen. In TS gibt es alle JS-gängigen Array Methoden. 

## <span style="color: lightgreen"> Arrays in TS definieren
Es gibt zwei gängige Arten, Arrays in TypeScript zu typisieren:

1. Array-Syntax mit eckigen Klammern (`Type[]`):
```ts
let numbers: number[] = [1, 2, 3];
```

2. Generics-Syntax mit `Array<Type>`:
```ts
let strings: Array<string> = ["a", "b", "c"];
```

Beide Ansätze sind funktional gleichwertig, die Wahl ist eine Frage der persönlichen Präferenz oder Konvention.

## <span style="color: lightgreen">Mehrdimensionale Arrays
TypeScript unterstützt auch mehrdimensionale Arrays, indem man Arrays in Arrays verschachtelt:
```ts
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];
```
Hier ist `matrix` ein zweidimensionales Array aus `number`-Werten.

## <span style="color: lightgreen">Array mit `readonly`
Mit dem `readonly`-Schlüsselwort kann sichergestellt werden, dass ein Array nach der Initialisierung nicht mehr verändert werden kann:
```ts
const colors: readonly string[] = ["rot", "blau"];
colors.push("grün"); // ❌ Fehler: Methode nicht erlaubt
```