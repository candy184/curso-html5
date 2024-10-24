Introducción al <canvas>
El elemento <canvas> es como un lienzo en blanco en el que puedes dibujar utilizando JavaScript. No tiene contenido ni estilo propio (ni borde), pero puedes agregarlo manualmente en el código HTML. Aquí tienes un ejemplo básico de un lienzo:

html
Copiar código
<canvas width="300" height="225"></canvas>
Para poder dibujar en el lienzo, debes acceder a su contexto de dibujo, que define las herramientas que usarás. El más común es el contexto "2D".

javascript
Copiar código
var canvas = document.getElementById('a');
var context = canvas.getContext('2d');
Dibujar Formas Simples
Una de las primeras cosas que puedes hacer en un lienzo es dibujar un rectángulo. La función fillRect(x, y, width, height) dibuja un rectángulo relleno en la posición (x, y) con las dimensiones indicadas.

Ejemplo de código:

javascript
Copiar código
context.fillRect(50, 25, 150, 100);
Este código dibuja un rectángulo negro en las coordenadas (50, 25) con un ancho de 150 píxeles y una altura de 100 píxeles.

Coordenadas en el Lienzo
El sistema de coordenadas del lienzo es una cuadrícula donde el punto (0, 0) está en la esquina superior izquierda. Las coordenadas aumentan hacia la derecha (eje X) y hacia abajo (eje Y). Esto es fundamental para posicionar los gráficos correctamente.

Dibujar Líneas
Para dibujar líneas, debes definir un camino o path usando los métodos moveTo(x, y) para mover el "lápiz" y lineTo(x, y) para dibujar la línea. Luego, para hacer visible el dibujo, se usa el método stroke().

Ejemplo de código para dibujar una cuadrícula:

javascript
Copiar código
for (var x = 0.5; x < 500; x += 10) {
  context.moveTo(x, 0);
  context.lineTo(x, 375);
}
context.strokeStyle = "#eee";
context.stroke();
Este código dibuja una serie de líneas verticales para formar una cuadrícula de 10 píxeles de ancho.

Texto en el Lienzo
También puedes dibujar texto en el lienzo utilizando el método fillText(). El tamaño, fuente y alineación del texto se pueden ajustar con las propiedades font, textAlign y textBaseline.

Ejemplo de texto:

javascript
Copiar código
context.font = "bold 12px sans-serif";
context.fillText("Texto", 100, 100);
Gradientes
En lugar de usar colores sólidos, puedes llenar figuras con gradientes. Los gradientes son transiciones suaves entre colores y pueden ser lineales o radiales.

Ejemplo de gradiente lineal:

javascript
Copiar código
var gradiente = context.createLinearGradient(0, 0, 300, 0);
gradiente.addColorStop(0, "black");
gradiente.addColorStop(1, "white");
context.fillStyle = gradiente;
context.fillRect(0, 0, 300, 225);
Este código crea un rectángulo con un degradado de negro a blanco que va de izquierda a derecha.

Trabajar con Imágenes
El método drawImage() permite dibujar imágenes en el lienzo. Puedes usar imágenes existentes en la página o cargarlas mediante JavaScript. El método permite escalar y recortar la imagen antes de dibujarla.

Ejemplo de cómo dibujar una imagen:

javascript
Copiar código
var img = new Image();
img.src = 'ruta_a_la_imagen.jpg';
img.onload = function() {
  context.drawImage(img, 0, 0);
};
Compatibilidad con Navegadores
No todos los navegadores soportan <canvas> de manera nativa (especialmente versiones antiguas de Internet Explorer). Para esos casos, existe una biblioteca llamada explorercanvas.js, que permite que Internet Explorer 7 y 8 interpreten el lienzo.

Ejemplo Completo: Juego de Halma
