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

