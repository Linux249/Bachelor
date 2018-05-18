Image Decoding ist etwas? das u.a.? passiert, wenn die größre eines Bildes (Image Object) verändert wird.

Um Bilder in ein Canvas zu bekommen kann man die contex.drawImage(img, x,y,w,h) api (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage) verwenden.

Dabei wird bei unterschiedlichen weiten/Höhen Angaben das bild 'decoded', also auf unterschiedliche größe gescalt was im Main/UI Thread läuft und einige Performance probleme mit sich bringt, wenn man viele Bilder vergrößert/verkleinert

Um grundsätzlich performanter zu werden kommen vor allem Worker und Typed Arrays (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) in s spiel.

ArrayBuffer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
Ein Array mit fester größe der nur rohe binäre Daten beinhaltet. Diese können nicht direkt manipuliert werden. ArrayBuffer können nur mit Hilfe von DataView (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) oder TypedArrays verändert/gelesen werden.


Typed Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
Bestehen aus Buffers und Views. Der Buffer ist ein Object vom Typ ArrayBuffer.
Um Zugriff auf die Daten zu bekommen werden die Views verwendet, welche als Schnittstelle dienen.
Der interessante ist der Uint8ClampedArray welcher für ImageData Objecte verwendet wird. Es sind mehrere Views gleichzeitig für ein Buffer möglich.
Die verschiedenen TypedArrays haben im Grunde nur ein unterschiedlichen Offset welcher bestimmt wie viele binäre Zahlen zu einer Information gehören.
Mit Array.from() kann ein normaler array kreiert werden

ImageData: https://developer.mozilla.org/en-US/docs/Web/API/ImageData/ImageData
Object zum speichern des Bildes in einem eindimensionalem Uint8ClampedArray welches weiterhin die größe und Höhere des Bildes beinhaltet.




ArrayBuffer:

ImageData from Image: https://stackoverflow.com/questions/10754661/javascript-getting-imagedata-without-canvas
https://stackoverflow.com/questions/25651237/how-to-convert-a-base64-datauri-to-uint8clampedarray-without-using-html5-canvas?rq=1
resize image clientside: https://stackoverflow.com/questions/37607745/is-there-a-way-to-use-a-web-worker-to-resize-an-image-client-side
https://github.com/taisel/JS-Image-Resizer


Aktuell wird auf dem Server ein Buffer Object in das base64 format convertiert welches dann an den Client geschickt wird wo damit ein Image Object erstellt wird.
Wird desen größe geändert wird das Image "decoded"



Search:
decode image in webworker
convert base64 uri jpeg to Uint8ClampedArray
node sharp convert to Uint8ClampedArray https://stackoverflow.com/questions/39087314/node-js-pipe-buffer-image-data-into-uint8clampedarray-format


