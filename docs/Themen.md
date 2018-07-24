Ziel: Stichpunktartige Liste von Themen mit/an denen gearbeitet wurde

Vorgehen: 
- digitale Aufschriebe (.md) durchgehen
- Papieraufschriebe durchgehen
- git commits durch gehen 
- Gedanken während dieser Tätigkeit extra sammeln

Durchgeschaut
- [ ] 
- [ ] 


Sachen die noch fehlen
- markierte/Gruppierte Bilder im Canvas Visualisieren (Viereck ums Bild)
- Garbage Collection in JS anschauen und Anwendung darauf prüfen
- Zahlen an den Bilder anzeigen (0-9 als Arrays holen die dann einfach gemalt werden können)
- Loading im Canvas anzeigen! (inspiration: http://www.effectgames.com/demos/canvascycle/)
- Unterschiedliche Datensätze = andere Architektur = Bilder und embedding getrennt laden (nach auswahl des Datensatzes)
- Nachbarn überarbeiten und knn² + cliquen anzeigen lassen
- Heatmaps Toolbar



Weitere technische Möglichkeiten
- Neighbours, Neighbours², Clique im Raum anzeigen


# Mögliche Themen: 
### FDG - Force directed Graph (ein erster Prototyp)
- Implementierung mit D3
- Ziel, Kritik
  
### Architecture und zugrundeliegende Konzept/Standarts der Anwendung
- Server Client Architecture
  - Wie kann schnell kommuniziert werden 
    - Schnittstelle (REST API, Sockets(.io?))
    - Formate (Übertragung)
- Viele Bilder interaktiv im Browser darstellen 
  - Analyse der Möglichkeiten Vanilla (Canvas, SVG, WebGL), Three.js, Konvajs  
- Wie optimal k -100k Bilder anbieten
  - technische Schwierigkeiten gab es eine Menge
    - Die Canvas APi ist zu langsam
    - 
- Bilder resizen
  - Server oder Client 
  - Methode (files oder berechnen)
    
- User Interaktion beschreiben
  - Pen != Drag
  - Zoom 
  - Click
  - Click + Pan
  

### Wie schreibe ich eine Wissenschaftliche arbeit über eine Webanwendung
### Grundlagen einer modernen Web Anwendung
  
  
### Was implementiert wurde (chronologisch)
- drag & drop von Bildern
- Nachbarn verschieben (basiernd auf 'link/strength')
- socket für Kommunikation zwischen S/C
- Server rendered picture (DATA URI / Base64 encoding)
- __Nachbarn__ hinzufügen/entfernen (spezieller Modus mit entsprechender Visualisierung)
- Bilder im Browser vergrößern/verkleinern
- Zoom + Schieben (pan)
- Details eines Bildes mit hochaufgelöstem Bild anzeigen 
- 'Zoom auf Nachbarn' verändert link-strength
- transparente Bilder während der Nachbar-Visualisierung
- einzelnes BildNachbarn 'freezen' damit es nicht mitverschoben wird
- Kommunikation zwischen NodeJS (Backend) und Python (Katja) um tsne-embeding zu updaten 
- Daten auf server cachen und bei 'update' verlgeichen (ismoved? added/removed links?) 
- HitCanvas - zweites, verstecktes Canvas das jedes bild einfarbig (unqiue) zeichnet für "imgUnderMouse?"
- Bilder mit Labeln farbig umranden
- Bilder nach dem ersten laden Cachen (das muss noch wieder raus)
- __Clustering__ 
- manuelle Bildgröße
- manuelle Randgröße
- __Triplets__ (positive/negative) anzeigen, hinzufügen, entfernen 
- Größenänderung der Bilder serverseitig (sharp) 
- Scaling der x/y Werte und Bildgröße in Abhängikeit vom Zoomstage
- Classifier / Gruppe von Bildern anzeigen, hinzufügen/entfehrnen, labeln 
- Options-Menu
- Zoom zur Mausposition
- exponetielle Skallierung und linare Bildvergrößerung (Bilder rücken auseinander während sie größer werden)
- 3k Bilder Test (Probleme mit Verbindungsabruch, OS lässt nicht Öffnen vieler Bilder gleichzeitig zu, UI stottert)
- Scissors-Tool zum Auswählen mehrerer Bilder
- __SVM__ - Interface/Backend: train, stop, topScorer, count etc.
- Label Menü (gelabelte Bilder fablich umranden)
- Testen aller Arten von Methoden um Bilder zu transportieren und zeichnen
- neue 'draw' function - alle pixel werden durch eigenen Code erzeugt 
- Bilder im raw-format (Buffer/binary) übertragen 
- testen von 100k Bildern (doubleNodes)
- Heatmap (Dichte im aktuellen Ausschnitt)
- NavMap
- NavHeatmap (aktuellen Ausschnitt in der alles zeigenden Heatmap)
- Transivität/\#knn²/RankSize - Bilder dessen knn dieses Bild ebenfalls als knn haben werden größer gezeichnet
- Bilder Gruppieren, Bilder zur Gruppe hinzufügen/entfehrnen, Gruppe bewegen, Gruppe speichern
- Kategorien für Labels Anzeigen und Auswählen, Kategorien hinzufügen (Classifier)
- \#Max-Clique + nach sortierter Reihenfolge zeichnen
- Alpha nach Cliquen Wert

Clustering
 - Ziel (Übersicht/Performanz), Lösung (Clustering), Problem (Repräsentanten, Cluster Größe (k?))
 - Hierarchical Clustering (agglomerative/bottom up)
 - K-Means/knn
 - KD-Tree
 - Visualisierung
  



### Mögliche weitere Themen:
- TSNE 
  - wie funktioniert es
  - wie kann Google das "overlapping" verhindern
  - wie lässt sich evtl. anpassen
  
- Inspiration durch Google TSNE Map und Jeremy Howard's TED Talk 
  - was können diese Anwendungen
  
- FDG 


Future Work:
- Clustering erlenen: User bestimmt Cluster und gewünschten Repräsentaten
- Mit WebAssambly draw Methode implementieren



Irgendwelche Ideen/Gedanken: 
- Bei allen Themen die ich gerne behandeln würde muss noch weitere Arbeit rein gesteckt werden
- Ich würde gerne Perfomance test schreiben und gewisse Dinge evaluieren aber das kostet Zeit...
  - geschwindigkeit der canvas API
  - Kommunikation Server/Client - verschiedene Methoden testen