# <span style="color: lightcoral">TypeScript Projekt Setup

## <span style="color: lightgreen"> 1. `npm init`ausführen
- Erstellt eine `package.json`, die als zentrale Konfigurationsdatei für das Projekt dient.
- Enthält Informationen wie den Projektnamen, die Version und installierte Abhängigkeiten.
- Das `-y` bestätigt alle Standardwerte automatisch, sodass man keine Fragen manuell beantworten muss.

👉 Falls man eigene Werte angeben möchte, kann man stattdessen `npm init` ohne `-y` nutzen und die Fragen beantworten.

```zsh
npm init -y
```
## <span style="color: lightgreen">2. TypeScript-Projekt initialisieren
- Erstellt eine `tsconfig.json`, die TypeScript konfiguriert.
- Diese Datei bestimmt, wie TypeScript den Code kompiliert (z. B. JavaScript-Version, Modul-Typ, Fehlerprüfungen).

```zsh
tsc --init
```

## <span style="color: lightgreen">3. `tsconfig.json` anpassen
Nach dem Befehl `tsc --init` wird eine `tsconfig.json` mit vielen Optionen erstellt. Man kann einige davon anpassen:

```json
{
  "compilerOptions": {
    "target": "ES6",          
    "module": "CommonJS",      
    "outDir": "./dist",       
    "rootDir": "./src",       
    "strict": true,           
    "noImplicitAny": true,    
    "esModuleInterop": true,   
    "watch": true             
  }
}
```
### <span style="color: lightblue"> Warum sind diese Einstellungen sinnvoll?

|Option|Erklärung|
|--|--|
|`target`: **"ES6"**|TypeScript kompiliert den Code in ES6 (moderne Features wie `let`, `const`, `arrow functions`).|
|`module`: **"CommonJS"**|Wird für Node.js-Projekte benötigt. Falls das Projekt im Browser läuft, könnte "`ESNext`" besser sein.|
|`outDir`: **"./dist"**|Alle kompilierten `.js`-Dateien landen im `dist`-Ordner, um den Quellcode (`src/`) sauber zu halten.|
|`rootDir`: **"./src"**|Stellt sicher, dass nur Dateien aus dem `src`-Ordner kompiliert werden.|
|`strict`: **true**|Aktiviert eine strikte Typprüfung, um Fehler frühzeitig zu erkennen.|
|`noImplicitAny`: **true**|Verhindert, dass TypeScript Variablen automatisch den Typ `any` gibt, was zu unsauberem Code führen kann.|
|`esModuleInterop`: **true**|Erlaubt eine einfachere Import-Syntax (`import x from "modul"`).|
|`watch`: **true**|Aktiviert den Watch Mode, sodass TypeScript automatisch bei Dateiänderungen kompiliert.|

## <span style="color: lightgreen">4. Projektstruktur anlegen
- Der `src/`-Ordner enthält alle TypeScript-Quelldateien.
- Die `index.ts`-Datei ist der Einstiegspunkt des Projekts.
- Später werden die kompilierten `.js`-Dateien im `dist/-Ordner` landen.

```zsh
mkdir src
touch src/index.ts
```
### Projektstruktur nach diesem Schritt:
```perl
mein-ts-projekt/
│── src/
│   ├── index.ts   # Haupt-TypeScript-Datei
│── tsconfig.json  # TypeScript-Konfiguration
│── package.json   # npm-Abhängigkeiten
│── package-lock.json  # npm-Installationsprotokoll
│── node_modules/  # Abhängigkeiten (nach Installation)
│── dist/  # Hier landen die kompilierten JavaScript-Dateien
```

## <span style="color: lightgreen">5. TypeScript-Code schreiben
In `src/index.ts` kann nun mit dem Schreiben des Programms begonnen werden. Wenn man in ter `tsconfig.json`-Datei bereits den `watch: true` aka den Watch-Mode eingestellt hat, generiert sich die `.js`-Datei von selber. Wenn dies nicht erfolgt ist, muss er manuell angestellt werden:

```zsh
tsc --watch
```
