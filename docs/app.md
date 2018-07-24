Eine Liste von Themen aus der App mit speziellen Focus auf Bereiche die keinen eigens Thema haben
Hier können z.b. folgende Informationen gesammelt werden: 
- functionen deren Code/verhalten sich geändert hat (wann/wie)?



### Base64 encoding (war ein Fehler)
- https://www.davidbcalhoun.com/2011/when-to-base64-encode-images-and-when-not-to/


### findNodeByMousePosition
performantes finden von Bildern unter der Maus 
- irgendwann geändert 
- am 8.5. wurde der alte, auskomentierte Code raus gelöscht


### Socket disconnect
Das Problem:

1. Lösung: Config


2. Lösung - generator
- https://davidwalsh.name/es6-generators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function%2A

3. Lösung - native web sockets
maybe in webworker 



### Heavy CPU load 
Grundsätzlich gehört die Architecture überarbeitet. Ist die Anwendung ausgelastet kann sie keine weiteren request bearbeiten und verliert auch die Fähigkeit auch sockets requests zu beantworten. (Ping pong)


#### on resize images
Es werden 6k Bilder benötigt und von jedem 10 varianten (unterschiedliche größe)



1. Bilder speichern
laden > berechnen aber nicht ohne dieses vorher zu messen zu können, da
60k Bilder laden kann immer noch aufwendig sein! 

2. Worker in nodejs


3. child processes


4. Cache Picuteres in Client
- Wie viele Bilder können gecached werden?


#### on calculating cluster
Das cluster berechnen dauert auch ewig und sollte zuerst in ein neuen prozess ausgelagert werden wobei die Knoten natürlich eigentlich die Infos haben sollten....
Update: Auf einem Linux system dauert es nur 15-30sekunden, warum ist das auf windows so viel langsamer?




23. 05.
Zusammenführen für präsentationszwecken von Newarchetecture 1, newarchtecture 2 und clustering on/off

Vorher wurden einzelene Bilder (50,50) als Base64 strings encoded und im Client daraus ein Img object erstellt was dann "gedrawt" wurde.
für vorführungszwecke wird dies wieder reimplmentiert - hier wird dabei noch drauf geachtet, dass die werte natürliche Zahlen sind da dies zur Zeit als eines der Hauptuhrsachen für schlechte performance gilt.

In new Architecture 1 wurden dann 10 unterschiedliche scalierte Bilder auf dem Server erstellt und im client zoomstufen eingeführt (anderes scaling!)
Dadurch erspart man sich bei drawImage die Größe (w,h) mitzugegeben (das Bild muss nicht neu scaliert werden) und auch das scaling des canvas wurde entfehrnt und durch ein mathematisches sclaierren ersetzt. (bitte was, wurde das wirklich heir getan=?)

In new Architecture 2 werden die scalierten Bilder dann als Buffer elemente erzeugt und im Client mit der enuen draw2 methode gezeichnet (ImageData objects!)

Fragen: Base64 galt als "prerenderd" woraus sich ein performance schub erhoffte wurde, soll aber auch 30% größer sein. Was ist hier besser?



### Lesen
- einfacher langer Webpack guide https://www.sitepoint.com/beginners-guide-webpack-module-bundling/
