# <span style="color: lightcoral">Getter und Setter

TypeScript ermöglicht es, Getter (`get`) und Setter (`set`) zu verwenden, um den Zugriff auf Eigenschaften einer Klasse zu kontrollieren. Diese Methoden verhalten sich wie normale Eigenschaften, bieten aber zusätzliche Logik für das Lesen und Schreiben von Werten.

## <span style="color: lightgreen"> 1. Getter und Setter im Vergleich

| Feature                               | Getter (`get`)                                                 | Setter (`set`)                                                     |
| ------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Funktion**                          | Holt den Wert einer Eigenschaft.                               | Setzt oder aktualisiert den Wert einer Eigenschaft.                |
| **Rückgabewert**                      | Gibt immer einen Wert zurück.                                  | Hat keinen Rückgabewert (`void`).                                  |
| **Aufruf**                            | Wird wie eine normale Eigenschaft (`obj.prop`) verwendet.      | Wird wie eine normale Eigenschaft zugewiesen (`obj.prop = value`). |
| **Einsatz**                           | Zum Berechnen oder Formatieren eines Wertes vor der Rückgabe.  | Zum Validieren oder Anpassen eines Wertes vor dem Speichern.       |
| **Kann weggelassen werden?**          | Ja, eine Eigenschaft kann nur einen Getter haben (nur lesbar). | Ja, wenn eine Eigenschaft nicht verändert werden soll.             |
| **Zugriff auf private Eigenschaften** | Erlaubt es, `private` Werte sicher zu lesen.                   | Erlaubt es, `private` Werte kontrolliert zu ändern.                |

## <span style="color: lightgreen">2. Einfache Getter und Setter

Die Klasse wird wie folgt erstellt. Darin werden auch die Getter und Setter:

```ts
class Person {
  private _age: number;

  constructor(private _name: string, age: number) {
    this._age = age;
  }

  // Getter für name
  get name(): string {
    return this._name;
  }

  // Setter für name
  set name(newName: string) {
    if (newName.length < 2) {
      throw new Error("Name must be at least 2 characters long.");
    }
    this._name = newName;
  }

  // Getter für age
  get age(): number {
    return this._age;
  }

  // Setter für age
  set age(newAge: number) {
    if (newAge < 0) {
      throw new Error("Age cannot be negative.");
    }
    this._age = newAge;
  }
}

const person = new Person("Alice", 30);

console.log(person.name); // "Alice"
person.name = "Bob"; // ✅ Erlaubt
console.log(person.name); // "Bob"

console.log(person.age); // 30
person.age = 35; // ✅ Erlaubt
console.log(person.age); // 35
```
### ➡ Erklärung:
- `get name()`: Gibt den Wert von `_name` zurück.
- `set name(value)`: Setzt den Wert von `_name`, überprüft aber vorher, ob er gültig ist.
- `get age()`: Gibt `_age` zurück.
- `set age(value)`: Verhindert negative Alterswerte.

### 👉 Warum `_name` und `_age` statt `name` und `age`?
- Man schützt die eigentliche Eigenschaft (`_name`, `_age`) und steuert den Zugriff über Getter und Setter.
