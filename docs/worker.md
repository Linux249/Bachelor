# Web Worker
Für eine bessere UX sollten Web worker benutzt werden

Fragen: 
- Sind worker dauerhaft vorhanden? 
- Wie lange dauert das (neu) starten?
- Wie lange dauert das übertragen/message posting ansich
- Welche Datentypen lassen sich als REfrenz übertragen (no copy)


- Motivation: Parallelität https://itnext.io/achieving-parallelism-in-javascript-using-web-workers-8f921f2d26db
- Integrieren mit webpack: https://github.com/webpack-contrib/worker-loader
- Websockets in Worker: https://stackoverflow.com/questions/17998011/html5-websocket-within-webworker
- Trennung zwischen Websockets, Webworker und ServiceWorker: https://aarontgrogg.com/blog/2015/07/20/the-difference-between-service-workers-web-workers-and-websockets/
