# <span style="color: lightcoral">Union
In TypeScript ermöglicht der `union`-Typ die Kombination mehrerer Typen. Ein Wert kann dabei einen von mehreren Typen annehmen. Das wird mit dem Pipe-Zeichen (`|`) dargestellt.

## <span style="color: lightgreen">Syntax von `union`
```ts
let variable: string | number;
variable = "Hallo"; // ✅ Erlaubt
variable = 42;      // ✅ Erlaubt
variable = true;    // ❌ Fehler: boolean ist nicht erlaubt
```
Hier kann `variable` entweder ein `string` oder eine `number` sein – aber nichts anderes.

## <span style="color: lightgreen">Typische Anwendungsfälle für `union`
1. **Flexibilität:** Wenn eine Variable mehrere mögliche Typen haben kann (z. B. API-Daten oder Formulareingaben).

2. **Fehlerbehandlung:** Funktionen können entweder einen erwarteten Wert oder einen Fehlerstatus zurückgeben.

3. **Kompatibilität:** Wenn verschiedene Datenquellen oder Formate berücksichtigt werden müssen.

## <span style="color: lightgreen">Beispiele im Detail
### <span style="color: lightblue">1. Grundlegende Verwendung
```ts
let id: number | string;
id = 123;       // ✅ gültig
id = "ABC123";  // ✅ gültig
```

### <span style="color: lightblue">2. Mit Funktionen
```ts
function printId(id: number | string): void {
  console.log("ID:", id);
}

printId(101);      // ✅ ID: 101
printId("A102");   // ✅ ID: A102
```

### <span style="color: lightblue">3. Union mit benutzerdefinierten Typen
```ts
type Status = "success" | "error" | "loading";
let apiStatus: Status;

apiStatus = "success"; // ✅
apiStatus = "failed";  // ❌ Fehler: "failed" ist nicht erlaubt
```

### <span style="color: lightblue"> 4, Union in Arrays
```ts
let values: (string | number)[] = ["Apfel", 42, "Banane"];
```
Hier dürfen sowohl `string` als auch `number` im Array sein.

## <span style="color: lightgreen">Wichtige Besonderheiten von union
1. **Gemeinsame Eigenschaften nutzen**: Nur Methoden und Eigenschaften, die alle Typen im union teilen, sind direkt zugänglich.

❌ Fehler:
```ts
let value: string | number;
console.log(value.length); // Fehler: number hat keine length
```

✅ Lösung mit Type Narrowing:
```ts
if (typeof value === "string") {
  console.log(value.length);
}
```

2. **Union von Objekttypen:**
```ts
type Dog = { bark: () => void };
type Cat = { meow: () => void };

let pet: Dog | Cat;

if ("bark" in pet) {
  pet.bark(); // ✅
}
```
3. **Vorsicht bei `any` und `unknown`:** Diese Typen sind zu allgemein und untergraben die Typensicherheit.


## <span style="color: lightgreen">Unterschied: `union` vs. `any` vs. `unknown`

|Feature|Union|Any|Unknown|
|--|--|--|--|
|**Typensicherheit**|Ja|Nein (belieber Typ)|Ja (muss geprüft werden)|
|**Typprüfung**|Erforderlich|Keine Prüfung|Erforderlich (Type Guard)|
|**Flexibilität**|Mehrere festgelegte Typen|Unbegrenzt|Sicher, aber unbekannt
