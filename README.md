# AUTOMAID Website

Next.js-Projekt für die AUTOMAID-Unternehmenswebsite.

## Veröffentlichung ohne Programmierung

1. Auf github.com ein neues **öffentliches oder privates Repository** namens `automaid-website` erstellen. Keine README automatisch hinzufügen.
2. Die Dateien **aus dem entpackten Ordner** im GitHub-Repository über `Add file` > `Upload files` hochladen. Die Ordnerstruktur (`app`, `public`) muss erhalten bleiben.
3. Bei vercel.com `Add New` > `Project` wählen und das GitHub-Repository importieren.
4. Vercel erkennt Next.js. `Deploy` anklicken.
5. Nach erfolgreicher Vorschau unter `Settings` > `Domains` die Domain `automaid.net` hinzufügen und die von Vercel angezeigten DNS-Einträge bei STRATO eintragen. DNS-Werte nur aus Vercel übernehmen.
6. `automaid.eu` ebenfalls hinzufügen und eine permanente Weiterleitung auf `automaid.net` konfigurieren.

## Vor dem öffentlichen Start

- Die E-Mail-Adresse `beratung@automaid.net` muss erst eingerichtet werden; der Kontaktbutton verwendet derzeit einen Mailto-Link.
- Impressum und Datenschutzerklärung müssen mit echten Unternehmensangaben ergänzt werden.
- Das Original-Logo wurde unverändert als `public/automaid-original.png` eingebunden. Die sichtbare Wortmarke ist zusätzlich als Text gesetzt; sie ist kein Ersatz für eine gelieferte Original-Wortmarken-Datei.
- Demo-Daten sind ausdrücklich fiktiv.

## Lokal (optional)
`npm install` und `npm run dev`
