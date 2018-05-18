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


## TODOS: (16.5.) ++
- PWA bauen
- Garbage collector implementieren. 

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

Clustering: 
- https://blog.mapbox.com/clustering-millions-of-points-on-a-map-with-supercluster-272046ec5c97
- https://stats.stackexchange.com/questions/183873/how-to-understand-the-drawbacks-of-hierarchical-clustering
- https://github.com/math-utils/hierarchical-clustering
- a nice introduction to k-means and clustering: 50 years beyond K-means: http://www.ppgia.pucpr.br/~fabricio/ftp/Roges/JainClustering_PRL10.pdf
- Approximate K-Nearest Neighbour Based Spatial Clustering Using K-D Tree https://arxiv.org/ftp/arxiv/papers/1303/1303.1951.pdf
- A Dynamic Linkage Clustering using KD-Tree https://portal.arid.my/Publications/5f55a43b-26e3-48.pdf
Probleme: 
- ein Fehlerhaftes Bild ist er zu erkennen, wenn sämtliche clusters "aufgelöst" sind. 
- die (effezienten) cluster methoden sind unnütz weil: 
    - zwei mal den selben algorythmus auf die selben Daten führt zu unterschiedlichen Ergebnissen bei:
    
Ideen: 
- geclusterd wird was übereinander liegt
- clustern was über/unter einer treshhold liegtl

Fragen: 
- wie viele cluster sollen gebildet werden? 
- können cluster nicht einfach da gebildet werden wo es sehr dicht ist und da wo nicht nicht?
 - wo ist es dicht? wie unterscheidet sich dieser ort von anderen "dichten"
 - was ist die treshhold?

HCA: 
Agglomerative vs. divisive Berechnung: 
- agglomerative is "bottom up": First every object is a cluster and then "similar" ones merge 
- divisive is "top down": First everything is a cluster and then this get splitted. Splitting are possible in O(2^n) ways..   

Agglomerative: 
For finding dissimilar Objects/Clusters we choose a metric to measure distance between sets of objects.
For specifying the dissimilarity of sets as a function of the pairwise distances of observation we choose a linkage criterion
Some maybe (TODO: Research) usefully metrics are:
 - Euclidean distance
 - Manhatten distance
 - Maximum distance
 The metric influence the shape of clusters.
 
The Linkage Criteria commonly useed (Source is in wp)
  - Maximum (complete-linkage clustering)
  - Minimum (single-linkage clustering)
  - Mean/average linkage clustering (UPGMA)  
   
Javascript cluster libs:
subercluster: https://github.com/mapbox/supercluster (https://blog.mapbox.com/clustering-millions-of-points-on-a-map-with-supercluster-272046ec5c97)
- behave like maps
- is there a centriod? 
hcluster: https://github.com/cmpolis/hcluster.js/
- not tested - looks most interessting

clusterfck - https://github.com/tayden/clusterfck + https://harthur.github.io/clusterfck/
- implements K-Means + HCA
- K-Means: 
 - defining desired numbers of clusters
 - init with given centroids - if not, they are random (!!!)
 - acces to centroids
 - TODO: What is clusterIndex = kmeans.classify doing with our data?
- HCA:
 - has disance metric and linkage criterion options
 - has .cluster for dinfing amount of clusters

jHC: https://github.com/upphiminn/jHC
- simple hca: test it
- looks similar to toher (witch?) libs 

node-gecluster (implements Smeamns)
- https://github.com/yetzt/node-geocluster + http://c0bra.github.io/smeans.js/
- simple implementation of clustering
- this could be used for own cluster algo
- set a fixed varianz for clsutering and then re-cluster every time the "area" change maybe

figue: https://github.com/nantunes/figue
- implementation of k-means, hca, Fuzzy C-means
- has dendogram output (maybe very nice :) ) 
 
Spatial indexing: 
- RBush - add/remove https://github.com/mourner/rbush
- kdbush: static, kd-tree, range/within (finding NN fast)

These indexing could be used to improve performance:
- discover nodes/images to show based on zoom (a lof of images should not be drawn)
- maybe also for the clickHandler Mousemove. Items in the tree are areas 
    - first check if handling 'find point' works
    - than test if it is faster than HitArea (redraw)
- Question: How does this can showing clusters in the demo?

Switching from socket.io to Websocket:
- Why? document the problems!
- motivation - why you dont need socket.io : https://codeburst.io/why-you-don-t-need-socket-io-6848f1c871cd
links: 
- gerneral client https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications
- websockets node: https://github.com/theturtle32/WebSocket-Node


 

hcluster: 
testing with 25 items and 3-10 clusters
### 3 Clusters:
0. first items has id: 18
1. first items has id: 1
2. first items has id: 16
### 4 Clusters:
0. first items has id: 18
1. first items has id: 16
2. first items has id: 1
3. first items has id: 22
### 5 Clusters:
0. first items has id: 18
1. first items has id: 1
2. first items has id: 22
3. first items has id: 16
4. first items has id: 17
### 6 Clusters:
0. first items has id: 18
1. first items has id: 1
2. first items has id: 22
3. first items has id: 16
4. first items has id: 17
5. first items has id: 28
### 7 Clusters:
0. first items has id: 1
1. first items has id: 22
2. first items has id: 16
3. first items has id: 17
4. first items has id: 28
5. first items has id: 18
6. first items has id: 35
### 8 Clusters:
0. first items has id: 1
1. first items has id: 22
2. first items has id: 16
3. first items has id: 17
4. first items has id: 28
5. first items has id: 35
6. first items has id: 18
7. first items has id: 102
### 9 Clusters:
0. first items has id: 22
1. first items has id: 16
2. first items has id: 17
3. first items has id: 28
4. first items has id: 35
5. first items has id: 18
6. first items has id: 102
7. first items has id: 1
8. first items has id: 82
### 10 Clusters:
0. first items has id: 22
1. first items has id: 17
2. first items has id: 28
3. first items has id: 35
4. first items has id: 18
5. first items has id: 102
6. first items has id: 1
7. first items has id: 82
8. first items has id: 16
9. first items has id: 68

the Idea is that going from a few to many clusters the representing nodes are not changing
this test let guess that this will works
not let assume

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
- resize images for bedder UX
- refactoring backend code: async/await in readfile
- add imageFile store for bedder performance
- show details of image in freeze mode

23.03.
- testing different zooming behaviors 
- add kdtree on backend
- add clustering with clusterfck/hcluster
- add +/- buttons for showing different clusters
- show active image in sidebar


26.03.
- summarize/write down cluster research
- change 'clustered' nodes visualisation
- resize default images width via +/- buttons
- resize default active images width via +/- buttons
- resize border color (labels) width

28.03.


1.4.
- add trible canvas
 - show positives/negativs in left/right areas
 - remove/add them 

4.4.
- send kdtree to client
- add range method in client
- inform client when all data are send back
- restyle header

5.4.
- use all 100k images in prod
- resizing images automatically - http://sharp.pixelplumbing.com
- change client for new img size  
- styling triple
- add a classify mode for difference UI interaction
- add add/remove nodes for classification 
- take options behind a toggle button

6.4. 
- zoom to mouse position https://stackoverflow.com/questions/2916081/zoom-in-on-a-point-using-scale-and-translate
- add scaling exponential
- add second scale parameter for image size scale differently
- add buttons for both scaling factors adjustment 
- classifier - choose label from dropdown

12.04.
- testing 3k images
    - new 3k dataset 
- Fix problem with socket reconnect/request new data on connect  
- optimize logs
- Problem: 
    - Client loose connection under heavy server work
    - Server combine/merges emits and also they are not coming back to the (reconnected) client
    - scaling problems: https://medium.com/@3rdeden/cluster-fucks-when-scaling-socket-io-2c8ad1153332
    
17.04.
- pre render images server side + test it (Problem is the mass render work in the browser with 3k pics)
    - Fixed: prerender means making a data-url from a buffer with .toString(base64) 
- test communications problem
- maybe write down some stuff? 
- add scale2 to Ui


TODOS:
- make picture width undependable from image width

- refactor coloring labels with colored rects
 
 
Try: 
- save some user information so the server send message back
- find a way the send each response without merging/combine them
- use real WebSockets     
   

TODO: 
- rescaling cluster value growth on zoom

Classifier
- colorpicker 4 labels https://github.com/xiaokaike/vue-color + https://vuejsexamples.com/vue-color-picker/

Perfomance: 
- reducing the payload size with diffrent parser: https://github.com/socketio/socket.io/tree/master/examples/custom-parsers
    - this looks nice: https://github.com/phretaddin/schemapack
- general tips for canvas performance: https://www.html5rocks.com/en/tutorials/canvas/performance/
- use schemapack for transport data/custom parser https://github.com/phretaddin/schemapack

Ideas: 
- sending progress events via socket: https://www.twilio.com/blog/2015/10/getting-started-with-socket-io-adding-real-time-events-to-your-node-js-express-app.html
 

- cluster showed nodes
zoom verändern - beim rein zoomen bilder vergrößern UND auseinander ziehen
alte vs. neue implementierung vergleichen
2 vorlage/beispiel studieren
uoomen in jeden bereich ermöglichen
neue bilder - anstatt icons bilder mit echten weite/höhe?
haben bilder dieso info irgendwo?  
app verschönern und clustering 

- add slider for changing values (https://www.w3schools.com/howto/howto_js_rangeslider.asp)
- check different clustering
 - radius clustering?

- cluster-zooming 
 - via zooming 
 - via rangeslider 


- cluster nodes and showing represents
  - add range slider for clustering segments
  
  
- resize images in scrolling (the factor should be also be getting a +/- value)
- toggle show labels with colored buttons 
BUG: the first sended node (see this with small amount of nodes) is not activatable


- animate activation/deactivation
- reorder pictures shown (which on is up?) maybe with own hitmap - nodes is object now und can easly be used for reordering
- add Webworker https://github.com/casperlamboo/canvas-webworker




- scroll to mouse position (maybe with save/restore)

- research pong-game with webasambly
- research: canvas + webassambly
- research: Awesome Canvas

- add fps measure https://github.com/mrdoob/stats.js/stargazers

- add show label color or not4
- add color picker for labels/classes


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

Backend: 
- Front + Back on same repo: https://daveceddia.com/create-react-app-express-backend/


Roadmap
- Bilder mit fixer größe anzeigen
- zoomen verschiebt position der Bilder aber nicht größe
- img.onClick = Bild + nachbarn vergrößern
- andere Bilder (kanten) hinzufügen/löschen
-
Fragen:
- where/when to add a extra state manager?
- what is faster? Adding var as a prop or via function? 


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
