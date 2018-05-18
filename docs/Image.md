Images are maybe a good Area for topics cause of Computer Vision
- how to handle them with web technologies 





Kommunikations possibilities:
Different technics for different reasons 
- what are our needs 
- what are there gains
- test all of them in a sample project 
- http
- http2 (waiting for node 10 / April 2018) 
- webRTC
- Websocket
- UDP Socket
- socket.io (what are the fallbacks?)
- pre buffering/caching?
- List of Communication protocols: https://stackoverflow.com/questions/4672201/other-common-protocols-besides-http

Websockets
- Introduction: https://www.html5rocks.com/en/tutorials/websockets/basics/

WebRTC: 
- Motivation: https://www.html5rocks.com/en/tutorials/webrtc/datachannels/


Image decoding: 
- what takes time? decoding, loading, rendering
- how to test this? 
- looking for different ways to solve this problems 

problems/motivation
- decoding https://medium.com/dailyjs/image-loading-with-image-decode-b03652e7d2d2


Idee:

wir laden alle bilder im Vorfeld
- während des trainings kann schonmal geladen werden
- wie lange arbeitetr python nach dem ersten request? wird nur embeding ausgerechnet? 
- es muss am anfang klar sein welche bilder geladen werden

ping timeout ändern
- der server darf sein pong später zurpck schicken 

Image En/Decoding
Insbesondere der Decoding Bereich ist ein Bottleneck im aktuellen Code - das resizen von 5k Bildern braucht seine Zeit

In der aktuellen Version (stand 11.05.) werden die bilder als Image Objecte gehalten und mit der API canvas.drawImage visualisiert. 
Während des scrollens/Zoomens werden zum einem die größe der Bilder verändert sowie die Position im Canvas. 
  

# Canvas 2D
Mit einem Canvs zu arbeiten ist der am weitesten verbreitete Standart.
Hier sind ein paar Perfomance tips: https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/


# WebGL 
Fragen:
- ist WebGL schneller als Canvas? 

Links:
- guter Übersicht über alles https://webglfundamentals.org
- draw image in WebGl https://webglfundamentals.org/webgl/lessons/webgl-2d-drawimage.html
- picture in WebGL example https://codepen.io/anon/pen/wzvkar



## Images Test

#### Test größe (Testaufbaue)
Ein Anfängliches Maß sind folgende Menge an Bilder:  
 - 100
 - 1000
 - 6000
   
 
 
## Decoding optimizing

#### image.decode()
Diese Api ist noch in der Entwicklung und nur in Chrome verfügbar. 
Sie lässt das Decoden in einem anderem prozess (?) laufen und sorgt dafür, dass der Main thread wärend des decodens nicht geblockt wird. 


Links: 
- description: https://medium.com/dailyjs/image-loading-with-image-decode-b03652e7d2d2
- spec: https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element
- implementation: https://www.chromestatus.com/feature/5637156160667648#

##### Versuch: 
Dem Image seine größe über seine Attribute (neu) setzen und dann das bild decoden, bevor es dann mit drawImage(img, x, y) in der richtigen (neuen) größe gezeichnet wird. 


##### Testen: 
```js
    const w = imgData.width * imgWidth  / scale2;
    const h = imgData.height * imgWidth  / scale2;
    const x = this._x - (w / 2);
    const y = this._y - (h / 2);

    console.log({x, y, w, h})
    imgData.width = w
    imgData.height = h

    imgData.decode().then(() => {
        console.log("IMAGE DECODED")
        this.ctx.drawImage(imgData, x, y);
    })
```

##### Resultat
Das setzten der größe funktioniert nicht - im canvas wird immer die original größe benutzt. 

