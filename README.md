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
9. Curated list of awesome Canvas examples https://github.com/raphamorim/awesome-canvas
10. Using React with canvas element https://blog.lavrton.com/using-react-with-html5-canvas-871d07d8d753
11. Many 3D/Orbit FDG https://bl.ocks.org/micahstubbs/a9eb7847c56c4c844d36cfbc5075be73
12. (P) Graph Layout by t-SNE http://www2.cs.arizona.edu/~kobourov/tsne-eurovis17.pdf
13. Move Groups + store example: http://jsfiddle.net/mbgw2ooc/2/
14. (P) A DISTRIBUTED METHOD FOR FAST FORCE-DIRECTED LAYOUT OF LARGE SCALE-FREE NETWORK GRAPHS https://dalspace.library.dal.ca/bitstream/handle/10222/65249/Lapierre-Nathan-MCSc-Dec-2015.pdf
15. http://compvis10.iwr.uni-heidelberg.de

FDG:
- What is a FDG good for https://en.wikipedia.org/wiki/Force-directed_graph_drawing
- FDG with D3 https://github.com/d3/d3-force
- Understand FDG http://www.puzzlr.org/force-graphs-with-d3/
- Understanding different forces http://d3indepth.com/force-layout/
- A-Z FDG http://www.coppelia.io/2014/07/an-a-to-z-of-extra-features-for-the-d3-force-layout/
- Force examples: https://bl.ocks.org/sathomas
- Modifying a Force Layout https://bl.ocks.org/mbostock/1095795
- interactive FDG https://medium.com/ninjaconcept/interactive-dynamic-force-directed-graphs-with-d3-da720c6d7811
- good class example http://jsfiddle.net/mbgw2ooc/2/
- different speed code example https://gist.github.com/sathomas/1ca23ee9588580d768aa
- FDG in canvas example https://bl.ocks.org/mbostock/ad70335eeef6d167bc36fd3c04378048
- FDG with WebWorker https://bl.ocks.org/mbostock/01ab2e85e8727d6529d20391c0fd9a16

Canvas:
- Awesome Canvas - A curated list of awesome HTML5 Canvas https://github.com/raphamorim/awesome-canvas
- Canvas Tutorial(s) https://developer.mozilla.org/de/docs/Web/Guide/HTML/Canvas_Tutorial

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

ToRead:
- block of data vis https://flowingdata.com/2015/12/15/a-day-in-the-life-of-americans/

DONE:
23.02.:
- in d3-force einarbeiten

26.02.
- drag & drop
- getNeighbours
- neighbour move base on link-weight

27.02.
- python backend 
- refresh method

28.02.
- clean up
- update graph: https://github.com/ninjaconcept/d3-force-directed-graph/blob/master/code/index.js
- classes http://jsfiddle.net/mbgw2ooc/2/
- start Werte zurück geben
- welche Knoten wurden verschoben, welche folgten nur
- inspect google tsnemap third party js 

01.03
- d3 state
- d3 + redux example https://bl.ocks.org/Fil/47678a37cc46fee9b3ed4769c31914e7
- vue app init
- add svg viewpoint

02.03.
- add imgs
- add static file server
- optimize perfomance (remove getColor while D&D, remove edges)
- add rects around images


03.03
- doublclick - reset only one
- toggle move neighbours
- change code
- test canvas

05.03.
- canvas (inspired by https://github.com/simonsarris/Canvas-tutorials/blob/master/shapes.js)
- book with easy introductions http://proquest.techbus.safaribooksonline.de/book/web-development/9781785284892/8dot-game-development/ch08s03_html

07.03:
- canvas in vue
- draw picture

08.03:
- node backend with socket
- send server rendered picture https://stackoverflow.com/questions/26331787/socket-io-node-js-simple-example-to-send-image-files-from-server-to-client
- https://stackoverflow.com/questions/26331787/socket-io-node-js-simple-example-to-send-image-files-from-server-to-client

09.03.
- add link to nodes as neighbours
- serve all images (mock + icons) + 10 example nodes + pictures
- resize pictures
- zoom all (mouswheel) semantic (not geometric)
- move all (D&D)


12.03.
- double click makes Node active
- only 'first' picture gets activated if pictures overlaying each other
- load detailed image for active Node
- make neighbour of active picture bigger
- connect CanvasState Class to vue (buttons, informations)
- zoom on neighbours (change the size)
- Node.contains work for current size
- transparent node who are not active/neighbours
- freeze via doublclick

14.03
- drag neighbours while freeze, else drag everything
- fix error with wrong neighbours (store.nodes is now hashmap - not list anymore)
- add/remove neighbours
- mouseover = 'lens effect'
- add python script to backend https://medium.com/@HolmesLaurence/integrating-node-and-python-6b8454bfc272
- build communication between python/nodejs
- add "update" nodes for refresh nodes from server
- bedder socket handling
- add Vue build to node project
- restyle update button and and position information
- Bug: zoom in firefox


15.03
- add init X/Y to nodes for resetting
Fix: zooming in Firefox
Fix: Firefox - no drag neighbours based on value
Refactor: Value is now [0-1] (old was [1-10])
Fix: added neighbours does not have correct size
- opacity (globalAlpha) only in active mode for not active nodes
- center images (use x,y for image center and not as right/top corner)
- active images grow in every direction, not only bottom/right
- drag neighbour

16.03
- change graph/nodes model
  - deliver the right format from server
  - refactor client - neighbours: [] -> links: {}
  - receive right format on server
- compare on updateNode old with new and mark this nodes as modified
- make every node draggable



21.03.
- add shadow canvas for find objects in canvas faster
  - https://blog.lavrton.com/hit-region-detection-for-html5-canvas-and-how-to-listen-to-click-events-on-canvas-shapes-815034d7e9f8
  - add random color on backend
  - add/draw hitCtx
  - change mouseover + active/deactive methods 
- add label based colored borders
- getcanvasState data to vue without storing whole canvasState in vue
  - show label colors
  - get scale buttons to vue
  - add right Menu for active images
- Fix: scaling to negative values is not needed
- Fix: active mode should be possible when update nodes
- Fix: label border size isn't scaling
- Fix: deactive node shows no changes (only after a mouse move )
- change zoom behaviour (now you can also zoom in/out while active mode)


22.03.

- refactoring backend code: DRY in dev/prod mode
- resize images via +/- buttons
- resize active images via +/- buttons
- resize images in scrolling (the faktor should be also be getting a +/- value)


- cluster nodes and showing represents
  - add clustering segments on server
  - add range slider for clustering segments
  

- animate activation/deactivation
- reorder pictures shown (which on is up?) maybe with own hitmap - nodes is object now und can easly be used for reordering
- add Webworker https://github.com/casperlamboo/canvas-webworker




- scroll to mouse position (maybe with save/restore)

- research pong-game with webasambly
- research: canvas + webassambly
- research: Awesome Canvas

- add fps measure https://github.com/mrdoob/stats.js/stargazers

Optimize:
- use requestAnimationFrame https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
- trottle mousemove = https://github.com/socketio/socket.io/blob/master/examples/whiteboard/public/main.js
- refactor node api - sockets in extra function
- changes in visualisation more 'smoother' with setIntervall https://stackoverflow.com/questions/2359537/how-to-change-the-opacity-alpha-transparency-of-an-element-in-a-canvas-elemen
- img loading time - smaller picture maybe?
Production:
- production version of app https://expressjs.com/en/advanced/best-practice-performance.html
- A lof off error handling/try + catchs
- setting python to production 


Roadmap
- Bilder mit fixer größe anzeigen
- zoomen verschiebt position der Bilder aber nicht größe
- img.onClick = Bild + nachbarn vergrößern
- andere Bilder (kanten) hinzufügen/löschen
-
Fragen:
- brauch es einen state?
-


TODO:
canvas
- DOM-to-Canvas using D3 https://bl.ocks.org/mbostock/1276463
- starting here https://developer.mozilla.org/de/docs/Web/Guide/HTML/Canvas_Tutorial
remove simulation https://bl.ocks.org/puzzler10/9159a992f58aa4277c2583fa41f01ed0 http://www.puzzlr.org/d3-drag-minimal-working-example/
refactor code (alpha) - update simulation

Long Todo:
- learning AI (start) https://ai.google/education#?modal_active=none


BA-Topics
- Untersuchung verschiedener Methoden zur effektiven nearest-neighbour suche
