# Bachelor


Aktuelles vorgehen: Stand 22.02
Prototypen Erstellen:
- Objekte sind/werden Bilder
- Objekte via D&D bewegen
- Gruppierung ermöglichen + Gruppen D&D
- MetaInfos zu Objekte anzeigen
- Gruppen anzeigen + ausblenden
- Bewegung anderer knoten mit hilfe eines FDG beschreiben: http://www.puzzlr.org/basics-of-d3-force-directed-graphs/

@K: Bewegung anderer Objekte der Gruppe klar aber FDG sinnvoll? 

FDG links
- Tutorial auf D3 v3: https://bl.ocks.org/sathomas

## Ideen
- der FDG kennt verschiedene force methoden - diese könnte man alle analysieren

# tsnemap - google arts experiment

## thirdparty js
- CSSPlugin https://greensock.com/docs/Plugins/CSSPlugin
- EasePack http://greensock.com
- OrbitControls https://gist.github.com/mrflix/8351020 https://github.com/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js
- TrackballControls https://github.com/mrdoob/three.js/blob/master/examples/js/controls/TrackballControls.js
- TweenLite https://greensock.com/tweenlite
- clipboard https://zenorocha.github.io/clipboard.js
- hammer https://github.com/hammerjs/hammer.js/
- material https://github.com/google/material-design-lite
- three
- twix http://github.com/neilco/

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
11. Many 3D/Orbit FDG https://bl.ocks.org/micahstubbs/a9eb7847c56c4c844d36cfbc5075be73
12. (P) Graph Layout by t-SNE http://www2.cs.arizona.edu/~kobourov/tsne-eurovis17.pdf
13. Move Groups + store example: http://jsfiddle.net/mbgw2ooc/2/
14. (P) A DISTRIBUTED METHOD FOR FAST FORCE-DIRECTED LAYOUT OF LARGE SCALE-FREE NETWORK GRAPHS https://dalspace.library.dal.ca/bitstream/handle/10222/65249/Lapierre-Nathan-MCSc-Dec-2015.pdf
 

d3-force:
- Doku https://github.com/d3/d3-force
- Force Dragging III https://bl.ocks.org/mbostock/ad70335eeef6d167bc36fd3c04378048
- Understand FDG http://www.puzzlr.org/force-graphs-with-d3/
- A-Z FDG http://www.coppelia.io/2014/07/an-a-to-z-of-extra-features-for-the-d3-force-layout/
- Force examples: https://bl.ocks.org/sathomas + https://gist.github.com/sathomas/1ca23ee9588580d768aa
- Modifying a Force Layout https://bl.ocks.org/mbostock/1095795
- interactiv FDG https://medium.com/ninjaconcept/interactive-dynamic-force-directed-graphs-with-d3-da720c6d7811
- good Class example http://jsfiddle.net/mbgw2ooc/2/
 
TODO:
- alpha überarbeiten
- - refresh
- force layout raus nehmen
- zoom/d&d mit d3 behalten? 
- vue + d3 
- python env installieren 
- google tool/js anschauen

Ideas: 
- Force layout benutzen sinnvoll? alternativen zu tsne googlen, da war was mimt Barnes-Hut, was auch in 'charge' benutzt wird http://www.puzzlr.org/force-directed-graph-charge-forces/

DONE:
23.02.:
- in d3-force einarbeiten
- 


26.02.
- drag & drop
- getNeighbours
- neighbour move weighted  

27.02.
- python backend 
- refresh method
- 

28.02.
- clean up
- update graph: https://github.com/ninjaconcept/d3-force-directed-graph/blob/master/code/index.js
- classes http://jsfiddle.net/mbgw2ooc/2/
- start Werte zurück geben
- welche Knoten wurden verschoben, welche folgten nur
- inspect google tsnemap third party js 

29.02
- d3 state
- d3 + redux example https://bl.ocks.org/Fil/47678a37cc46fee9b3ed4769c31914e7


