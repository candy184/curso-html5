# Resumen del documento: Aplicaciones Web sin Conexión con HTML5

Este documento explica cómo las aplicaciones web pueden funcionar sin conexión a internet utilizando características de HTML5. A continuación, se describen los principales temas tratados y se incluyen ejemplos prácticos.

## 1. ¿Qué es una aplicación web sin conexión?

Una aplicación web sin conexión es aquella que funciona incluso sin acceso a internet. Esto se logra descargando previamente los recursos necesarios (como archivos HTML, CSS, JavaScript e imágenes) y almacenándolos localmente.

**Funcionamiento básico:**
- Cuando estás conectado, el navegador descarga y guarda los recursos locales.
- Si no hay conexión, el navegador usa estos recursos almacenados para que la aplicación siga funcionando.

---

## 2. El Manifiesto de Caché

El manifiesto de caché es un archivo especial que indica al navegador qué recursos deben almacenarse para que la aplicación funcione sin conexión.

### Cómo se ve un manifiesto básico:
```plaintext
CACHE MANIFEST
# Archivos para almacenar en caché
/index.html
/style.css
/script.js
```

### Cómo configurarlo:
1. Crea un archivo con extensión `.appcache`.
2. Configura tu servidor para que lo sirva con el tipo de contenido correcto:
   ```apache
   AddType text/cache-manifest .appcache
   ```
3. Enlaza el archivo desde tu HTML usando el atributo `manifest`:
   ```html
   <!DOCTYPE html>
   <html manifest="appname.appcache">
   <head>
       <title>Mi App Sin Conexión</title>
   </head>
   <body>
       <h1>Hola, Mundo</h1>
   </body>
   </html>
   ```

---

## 3. Secciones del Manifiesto

El manifiesto puede dividirse en tres partes principales:

1. **CACHE:** Archivos que se almacenarán para usar sin conexión.
2. **NETWORK:** Recursos que siempre deben cargarse desde internet.
3. **FALLBACK:** Alternativas para mostrar si un recurso no está disponible.

**Ejemplo:**
```plaintext
CACHE MANIFEST
CACHE:
/index.html
/style.css
/script.js

NETWORK:
/api/

FALLBACK:
/offline.html
```

---

## 4. Eventos del Caché de Aplicaciones

El navegador genera eventos que puedes usar para manejar el estado del almacenamiento en caché.

**Eventos importantes:**
- `cached`: Todos los recursos están listos para usarse sin conexión.
- `error`: Algo falló al cargar los recursos.

**Ejemplo en JavaScript:**
```javascript
window.applicationCache.addEventListener('cached', function() {
    console.log('Recursos almacenados con éxito.');
});

window.applicationCache.addEventListener('error', function() {
    console.error('Hubo un problema al almacenar los recursos.');
});
```

---

## 5. Depuración y errores comunes

### Problemas típicos:
1. Si un recurso no se puede descargar, todo el proceso de almacenamiento en caché falla.
2. Cambios en los recursos pueden no reflejarse de inmediato debido al caché del navegador.

### Soluciones:
- Actualiza el número de revisión en el manifiesto para forzar una recarga:
  ```plaintext
  CACHE MANIFEST
  # rev 1
  /index.html
  ```

---

## 6. Ejemplo práctico: Juego Halma sin conexión

Este ejemplo muestra cómo crear una aplicación sin conexión.

**Archivo manifiesto:**
```plaintext
CACHE MANIFEST
halma.html
script.js
```

**Archivo HTML:**
```html
<!DOCTYPE html>
<html manifest="halma.appcache">
<head>
    <title>Juego Halma</title>
</head>
<body>
    <canvas id="board"></canvas>
    <script src="script.js"></script>
</body>
</html>
```
