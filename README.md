# Bachelor
## vorgehen: 
- paper 1 lesen
- prototypen bauen
- Interaktionsanfoderungen besprechen (Vorschläge machen) 


# Fragen
- Wie soll mit dem 3D Model interagiert werden? 
  - wohin soll man zoomen (Mausrad)? Fixer Mittelpunkt oder Blickrichtung? 
- BA in Deutsch oder Englisch? 
- Welche Informationen (Meta) gibt es zu den Bilder? (z.B. Geo-cords) 
- Wie lässt sich ein 3D raum darstellen bzw. auf 2D mappen 
- sind die Bilder unterschiedlich groß?
- Veröffentlichen von Artikeln auf Medium? 

# Aufgabe
- Framework für 3d Raum suchen
- Testen ob "React to canvas" passt (8)
- Beispiel Canvas durchgehen (9)
-
# Image API
- Bereitstellung unterschiedlich hohe Auflösungen

# TODO
- Liste von Beispielen erstellen
  - wer stellt (wie) große Mengen an bilder da
  - welche interaktions Möglichkeiten gibt es
  
- Genaue Interaktion Besprechen

# Idee für Beispiel App
- 5 Bilder 
- dynamisch (fetch) laden
- zoom in/out (resize images)
- left/right/top/bottom move

## links
- Zooming stage relative to pointer position - https://konvajs.github.io/docs/sandbox/Zooming_Relative_To_Pointer.html
- Interactive (Tooltip, D&D)  Scatter Plot with 20,000 Nodes https://konvajs.github.io/docs/sandbox/20000_Nodes.html
- Elastic Stars https://konvajs.github.io/docs/sandbox/Elastic_Stars.html
- D&D + Hover https://konvajs.github.io/docs/sandbox/Expand_Images_on_Hover.html


# Anfoderungen aus der Besprechung
- Betrachtung von Bilder im Raum(3D)/Orbit
- interaktive Bewegung
- makieren von Bilder
- Gruppieren von Bilder mit Labels/zu klassen
- Bilder verschieben
- Meta Informationen anzeigen (beim rein zoomen)
- Klassen/Gruppen visualisieren



# Links
1. Similarity-Based Visualization of Large Image Collections: https://www3.nd.edu/~cwang11/research/iv15-imap.pdf 
2. CCN http://cs231n.github.io/understanding-cnn/ 
3. Beispiel für VR https://react.rocks/example/aframe-inspector
4. tsne http://lvdmaaten.github.io/tsne/
5. Visualizing Data using t-SNE http://www.jmlr.org/papers/volume9/vandermaaten08a/vandermaaten08a.pdf
6. Example on t-SNE in JS http://homepage.tudelft.nl/19j49/tsnejs/
7. Images in canvas https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
8. Render to canvas https://github.com/Flipboard/react-canvas
9. Curated list of awesome Canvas examples https://github.com/raphamorim/awesome-canvas
10. Using React with canvas element https://blog.lavrton.com/using-react-with-html5-canvas-871d07d8d753
