

05.06.
Besprechung der Heatmap mit Nico: 
Wenn zu viele Bilder zu nahe bei einander sind überlagern Sie sich und es wird unkenntlich wie viele Bilder sich an einem Ort befinden. Wir wollen eine gute Übersicht über die Dichten Bereiche.
Dabei gibts es zwei Ideen, die Heatmap die Möglicherweise eine Dichteschätzung (density estimation) benötigt und ein alpha-blending. Zusätzlich ist das Thema Transivität offen.

Heatmap: 
- erster Versucht mit der lib simpleheat
- simpleheat algo anschauen und Ideen erkunden


alpha-blending:
- 9  

Transivität: 
- es ist noch unklar wie der Wert zu verwenden ist. Motivation ist es neben den x,y werten des embedings eine weitere Variante zu finden mit der ein representant im Cluster ausgewählt werden kann


06.06.
Todos:
- [x] simpleheat lesen
- [x] heatmap - verändert sich beim zoomen und zeigt die dichte im aktuellen Canvas und nicht aller daten
- [x] heatmap - optionen für Radius, Blur, minOpacity  
- [x] Navigator Canvas hinzufügen: beinhaltet punkte als pixel und ein rechteck dass den aktuellen View/ausschnitt im gantzen repräsenteirt.
 
 
 7.6.
 die Heatmap mit simpleaheat ist fertig, weiterhin gibt es eine navMap 
 - [x] Menü für Heatmap/navmap
 - [x] styling the interface/remove obviously problems
 - [x] alpha blending beim zoomen verändern 
 - [ ] kernel density estimation for 2d from stdlib 
 - [ ] understand the output 
 - [ ] add navmap options (border aplha, fill alpha, radius)
 
 
 
 8.6.
 - kde-FDG nochmal anschauen, vielleicht kriegt man das umgeschrieben und selbst gelöst - wächst xypoints immer weiter an?
 - was bringt einem das grid von kde2d??? 
 
 Later: 
 - NavMap sollte (nur) bei drag und drop nei gezeichnet werden
 - prüfen ob die functionen für draw heatmaap und Navmap nicht im Canvasstate liegen sollten
 - [ ] Styling des option menüs und der buttons (Wenn die Optionen angepasst werden)
 
 
 Größere Aufgaben
 Kommunikations 
 
 
 12.06.
 - [ ] zusammenfassen der Heatmap Done's + Todo's
 - [x] 3 HeatMapNav hinzufügen
 - [x] feinetuning der maps


19.06.
- [x] Classifier wieder benutzbar machen
- [x] neue struktur für Categorien/Labels


20.06
- [x] gruppe bei stop und clear svm reseten
- [x] train svm sendet nur noch die ids  
- [x] update data sendet nur noch benötigte werte statt alle nodes?  

- [ ] Clique im graph von Nachbar suchen 
  - Der untersuchte Graph besteht aus dem Ausgangsknoten und dessen nächsten Nachbarn die ebenfalls den Ausgangsknoten als NN haben
  - Als Clique wird betrachtet welche dieser Knoten mit den/allen anderen verbindunen ist
  - wir suchen die größte Clique 
- [ ] nachber einzeigen
  - [ ] clique 
  - [ ] double NN 
  - verschiedene distanz algos ausprobieren
  

