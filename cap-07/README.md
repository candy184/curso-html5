# Geolocalización en HTML5

Este documento resume los conceptos básicos de la geolocalización en HTML5, explicando la API de geolocalización, cómo usarla para obtener la ubicación del usuario y cómo manejar errores y opciones de precisión. También se incluyen ejemplos de código y una guía sobre la compatibilidad en navegadores antiguos.

## Tabla de Contenidos
1. [¿Qué es la Geolocalización?](#qué-es-la-geolocalización)
2. [Privacidad y Permisos](#privacidad-y-permisos)
3. [API de Geolocalización en HTML5](#api-de-geolocalización-en-html5)
4. [Manejo de Errores](#manejo-de-errores)
5. [Opciones de Precisión](#opciones-de-precisión)
6. [Actualización Continua de la Ubicación](#actualización-continua-de-la-ubicación)
7. [Soporte en Navegadores Antiguos y Dispositivos](#soporte-en-navegadores-antiguos-y-dispositivos)
8. [Ejemplo Completo usando geo.js](#ejemplo-completo-usando-geojs)
9. [Lecturas Adicionales](#lecturas-adicionales)

---

### ¿Qué es la Geolocalización?
La **geolocalización** permite determinar y compartir la ubicación física de un usuario. Algunos métodos incluyen el uso de la dirección IP, señales de red inalámbrica, torres de telefonía o dispositivos GPS. La geolocalización permite que los dispositivos calculen coordenadas, como latitud y longitud, para determinar una ubicación precisa.

### Privacidad y Permisos
El uso de la geolocalización en el navegador requiere el **consentimiento explícito** del usuario. Los navegadores no comparten la ubicación sin el permiso del usuario, permitiendo un control completo sobre la privacidad.

### API de Geolocalización en HTML5
La API de geolocalización en HTML5 permite a los desarrolladores acceder a la ubicación del usuario mediante JavaScript, enviando esta información a un servidor para mostrar mapas o localizar servicios cercanos. La mayoría de navegadores modernos son compatibles.

#### Ejemplo básico
```javascript
function get_location() {
  navigator.geolocation.getCurrentPosition(show_map);
}
```
Este código solicita la ubicación del usuario y, al obtenerla, ejecuta una función llamada `show_map`, que puede mostrar un mapa usando las coordenadas obtenidas.

### Manejo de Errores
La API permite manejar errores comunes, como el rechazo del usuario a compartir su ubicación o problemas técnicos.

#### Ejemplo
```javascript
navigator.geolocation.getCurrentPosition(show_map, handle_error);

function handle_error(err) {
  if (err.code == 1) {
    // El usuario rechazó compartir su ubicación
  }
}
```
Este código define una función `handle_error` que actúa como respaldo en caso de errores al obtener la ubicación.

### Opciones de Precisión
La API permite ajustar la precisión de la ubicación mediante el objeto `PositionOptions`. Esto ayuda a equilibrar precisión y consumo de batería.

#### Ejemplo con opciones de precisión
```javascript
navigator.geolocation.getCurrentPosition(success_callback, error_callback, {
  enableHighAccuracy: true,
  timeout: 5000, // Tiempo máximo de espera en milisegundos
  maximumAge: 0 // No usar posiciones en caché
});
```
Aquí, `enableHighAccuracy` permite alta precisión, `timeout` limita el tiempo de espera y `maximumAge` evita el uso de datos en caché.

### Actualización Continua de la Ubicación
Para aplicaciones que necesitan monitorear la ubicación en tiempo real, como una guía paso a paso, se usa `watchPosition()` en lugar de `getCurrentPosition()`.

#### Ejemplo de `watchPosition()`
```javascript
let watchID = navigator.geolocation.watchPosition(update_map);

function update_map(position) {
  // Actualiza el mapa con las nuevas coordenadas
}

// Para detener la actualización:
navigator.geolocation.clearWatch(watchID);
```

### Soporte en Navegadores Antiguos y Dispositivos
Para navegadores sin soporte nativo de la API de geolocalización de HTML5, se puede usar Google Gears, un plugin que facilita la compatibilidad con navegadores antiguos. Además, librerías como **geo.js** unifican el uso de la API en diferentes plataformas.

### Ejemplo Completo usando geo.js
La librería `geo.js` permite detectar la ubicación del usuario, incluso en navegadores más antiguos o sistemas diferentes. A continuación, un ejemplo completo:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Geolocalización</title>
  <script src="gears_init.js"></script>
  <script src="geo.js"></script>
</head>
<body>
  <button onclick="lookup_location()">Buscar mi ubicación</button>
  
  <script>
    function lookup_location() {
      geo_position_js.getCurrentPosition(show_map, show_map_error);
    }
    
    function show_map(position) {
      alert("Estás en latitud: " + position.coords.latitude +
            ", longitud: " + position.coords.longitude);
    }

    function show_map_error() {
      alert("No se pudo obtener la ubicación.");
    }
  </script>
</body>
</html>
```
En este ejemplo, `geo.js` ayuda a detectar la ubicación y mostrar un mensaje con las coordenadas. `show_map` ejecuta acciones con la ubicación, mientras que `show_map_error` maneja errores.

### Lecturas Adicionales
Para más información, consulta los siguientes recursos:
- [API de geolocalización W3C](http://www.w3.org/TR/geolocation-API/)
- [Google Gears](http://tools.google.com/gears/)
- Documentación de APIs específicas para móviles: BlackBerry, Nokia, Palm, OMTP BONDI.
- [geo.js en GitHub](http://code.google.com/p/geo-location-javascript/)

---

Este resumen cubre los temas principales y presenta ejemplos prácticos de cómo usar la API de geolocalización de HTML5.
