### TODO: 
- Bachelor Thesis Lesen (High Performance ECMAScript und HTML5 Canvas) http://www.danielbaulig.de/wp-content/uploads/2011/04/Bachelor-Thesis.pdf


### Perfomance Tests 
Verschiedene canvas draw Methoden vergleichen, z.b. drawImage vs. putImageData
verschiedene Bild 'Container' (canvas, img, svg, ImageData, ImageBitmap etc) vergleichen (zeichengeschwindigkeit, Heap, etc) 
Das scale/transoform vergleichen

- test Idee: https://jsperf.com/buffering

#### Rail: 
- https://developers.google.com/web/fundamentals/performance/rail
Anschauen und überlegen, wie das Konzept angewendet werden kann

### Image.Decode()
- https://medium.com/dailyjs/image-loading-with-image-decode-b03652e7d2d2
Ausprobiert (1 Woche vor dem 16.5.) - es hat nicht funktioniert und es wurde auch nicht klar, wie die parallele/in einem anderem Thread stattfindene decodierung stattfindet. 


### Image Resize in the browser? 
Aktuell wird das resizen aufm Server gemacht 
- ginge es auch im browser? würde eine besser expirence bringen da die Bilder dann scalierbarer sind in ihrerm größen verhältniss
  
Links:
- resize in a Worker: https://github.com/taisel/JS-Image-Resizer/blob/master/resizeWorker.js
- webworker and scaling: https://stackoverflow.com/questions/10218774/web-worker-and-scaling-images
- example: https://jsfiddle.net/n3drn8v9/5/
- pica maybe: https://github.com/nodeca/pica



### new Architecure

Problem/Vorher: 
Bei vielen Bilder verbraucht das größe verändern von Bilder viel Zeit. Dieses sogenannte Decoding verusachte laut messungen den größten zeitlichen utnerschied. 
Dafür sind die drei Perfomance messungen zoom-zoom-drag, zoom-zoom-drag-noScale, zoom-zoom-drag-noScale-NoResize ausschlaggeben. Gemacht am 9.5. müsste hier nochmal 
geschaut werden wie die commits damals sind. eventuell lässt sich auch gut ein neuer Branch hier erstellen um das Thema nochmal durchzutesten. Das Backend wäre ebenfalls auf diesen Stand zu bringen. 



16.05.
Umbau der App 
Aus perfromance gründen (Render) wird die Architektur verändert. Anstatt dass beim Zommen die größe der Bilder verändert wird bzw. das canvas scaliert wird,
werden verschieden Große Bilder geladen. Dabei wird serverseitig das Bild umskalliert. anfänglich gibt es das Bild mit volgender Größe [10,20,30,40,50,60,70,80,90,100].
Beim Größe ändern gilt die vorgegebene Größe als Referenzwert für die längere Kante des meistens rechtekcigen bildes und die kürze Kante wird proportional verringert. 
Zusätzlich werden Clientseitig nun die Bilder mit createImageBitmap zu einer Bitmap convertiert?. Eine Bitmap ist die denkbar einfachste Datenstruktur für ein Bild. 
Es enthält nur die Bytes in einem Array sowie die größe und die Höhe des Bildes. Dies sollte eine geringere Objectgröße mitsich bringen und evtl. eine perfomance verbesserung. 
Dafür wurden mit new_architectur und new_architectur2 ein performance vegleich gemacht. Der aktuelle commit von heute bietet den Stand von new_architectur2




TODO: 
- Das Image wird als Base64 convertiert und dann zu einer Bitmap - das müsste mit weniger zwischenschritten gehen. 
- Serviceworker implementieren

Fragen: 
- ist drawImage(Bitmap) schneller als drawImage(Img)
- wie die Performance des bilder skalieren eröhen?


Links:
- Tricks wie z.B. Garbage collecetion angewendet und in der Arbeti erwähnt werden sollten. (DONE)  https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/ Beinhaltet zahlreiche 
- Perfomance tips und test (READ AGAIN) https://www.html5rocks.com/en/tutorials/canvas/performance/#toc-ref



### webGL
Es sollte auf jedenfall ausprobiert werden wie schnell 6000 Bilder mittels WebGL sind. 

Dabei kann eine eigene Implementierung helfen einige Grundlagen zu verstehen.
folgende zwei Frameworks sollten aber auch ausprobiert werden: 
- http://www.pixijs.com
- ThreeJS

Links: 
- WebGL 2.0 https://blog.tojicode.com/2013/09/whats-coming-in-webgl-20.html


### OffscreenCanvas
Ob die Chrome implementierung oder eine eigene (https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface) - beides sollte eigentlich machbar sein. 
Optimalerweise sollte natürlich der Code direkt in WebAssambly/c++ geschrieben sein. 

    
    
# Measuring

### wie kann man was messen? Methoden?

### RAIL Model https://developers.google.com/web/fundamentals/performance/rail

### Lighthouse
TODO: Was ist das? Sieht aus wie ein Tool für performance in Webapps
- Einführung https://www.youtube.com/watch?v=JOKlXygMq7o
- new version 3.0 https://developers.google.com/web/updates/2018/05/lighthouse3


 
# new Architecure 2
draw2 





# webassambly
Evtl. lässt sich das Bild noch schneller mit c++ zeichnen

- guter Einstieg und hat was mit bilder zu tun: https://developers.google.com/web/updates/2018/03/emscripting-a-c-library#grand_finale_encode_the_image
- Canvas + Webasambly https://stackoverflow.com/questions/42806037/modify-canvas-from-wasm
- WebAssembly JavaScript API https://developer.mozilla.org/en-US/docs/WebAssembly/Using_the_JavaScript_API
