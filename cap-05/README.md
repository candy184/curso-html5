# Introducción al `<canvas>`

El elemento `<canvas>` en HTML5 es un lienzo en blanco donde puedes dibujar utilizando JavaScript. No tiene contenido ni estilo propio (como bordes), pero puedes agregar estos manualmente en el código HTML.

## Ejemplo Básico de un Lienzo

Para crear un lienzo, puedes usar la siguiente estructura básica en HTML:

```html
<canvas id="a" width="300" height="225"></canvas>
```

Para dibujar en el lienzo, primero debes acceder a su contexto de dibujo, que define las herramientas disponibles. El contexto más común es el "2D".

### Acceso al Contexto de Dibujo

```javascript
var canvas = document.getElementById('a');
var context = canvas.getContext('2d');
```

## Dibujar Formas Simples

Una de las primeras cosas que puedes hacer en un lienzo es dibujar un rectángulo. La función `fillRect(x, y, width, height)` dibuja un rectángulo relleno en la posición `(x, y)` con las dimensiones especificadas.

### Ejemplo de Código para Dibujar un Rectángulo

```javascript
context.fillRect(50, 25, 150, 100);
```

Este código dibuja un rectángulo negro en las coordenadas `(50, 25)` con un ancho de 150 píxeles y una altura de 100 píxeles.

## Sistema de Coordenadas en el Lienzo

El sistema de coordenadas del lienzo es una cuadrícula donde el punto `(0, 0)` está en la esquina superior izquierda. Las coordenadas aumentan hacia la derecha en el eje X y hacia abajo en el eje Y, lo cual es fundamental para posicionar los gráficos correctamente.

## Dibujar Líneas

Para dibujar líneas, debes definir un camino o *path* utilizando `moveTo(x, y)` para mover el "lápiz" y `lineTo(x, y)` para dibujar la línea. Finalmente, se usa el método `stroke()` para hacer visible el dibujo.

### Ejemplo de Código para Dibujar una Cuadrícula

```javascript
context.strokeStyle = "#eee";
for (var x = 0.5; x < 500; x += 10) {
    context.moveTo(x, 0);
    context.lineTo(x, 375);
}
context.stroke();
```

Este código dibuja una serie de líneas verticales para formar una cuadrícula con un ancho de 10 píxeles.

## Texto en el Lienzo

Es posible dibujar texto en el lienzo usando el método `fillText()`. El tamaño, fuente y alineación del texto se pueden ajustar con las propiedades `font`, `textAlign` y `textBaseline`.

### Ejemplo de Código para Dibujar Texto

```javascript
context.font = "bold 12px sans-serif";
context.fillText("Texto", 100, 100);
```

## Gradientes

En lugar de usar colores sólidos, se pueden aplicar gradientes. Los gradientes son transiciones suaves entre colores y pueden ser lineales o radiales.

### Ejemplo de Gradiente Lineal

```javascript
var gradiente = context.createLinearGradient(0, 0, 300, 0);
gradiente.addColorStop(0, "black");
gradiente.addColorStop(1, "white");
context.fillStyle = gradiente;
context.fillRect(0, 0, 300, 225);
```

Este código crea un rectángulo con un degradado de negro a blanco de izquierda a derecha.

## Trabajar con Imágenes

El método `drawImage()` permite dibujar imágenes en el lienzo. Puedes utilizar imágenes existentes en la página o cargarlas mediante JavaScript. Además, este método permite escalarlas y recortarlas antes de dibujarlas.

### Ejemplo de Cómo Dibujar una Imagen

```javascript
var img = new Image();
img.src = 'ruta_a_la_imagen.jpg';
img.onload = function() {
    context.drawImage(img, 0, 0);
};
```

## Compatibilidad con Navegadores

No todos los navegadores soportan `<canvas>` de manera nativa, especialmente las versiones antiguas de Internet Explorer. Para estos casos, se puede utilizar la biblioteca `explorercanvas.js`, que permite que Internet Explorer 7 y 8 interpreten el elemento `<canvas>`.
