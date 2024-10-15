# Detección de Características HTML5

## Introducción
HTML5 no es una única tecnología, sino un conjunto de características. No se puede detectar la compatibilidad con "HTML5" en general, sino que se deben detectar características específicas como `canvas`, `video` o `geolocalización`.

## Técnicas de Detección
Existen cuatro técnicas básicas para detectar si un navegador admite una característica en particular:
1. **Comprobar si una propiedad existe en un objeto global**, como `window` o `navigator`.
2. **Crear un elemento y verificar sus propiedades**, como el soporte para `canvas`.
3. **Verificar métodos en elementos y analizar el valor devuelto**, como los formatos de vídeo compatibles.
4. **Establecer una propiedad con un valor determinado y verificar si se mantiene**, como en los tipos de input.

## Uso de Modernizr
Modernizr es una biblioteca de código abierto que permite detectar la compatibilidad de muchas funciones HTML5 y CSS3 de forma automática. Al ejecutarse, crea un objeto global llamado `Modernizr` con propiedades booleanas que indican si una característica es compatible o no.

### Ejemplo de Detección de `canvas`
```javascript
if (Modernizr.canvas) {
  // El navegador soporta canvas
  console.log("El navegador soporta canvas.");
} else {
  // El navegador no soporta canvas
  console.log("El navegador no soporta canvas.");
}
