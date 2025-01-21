# API de Historial en HTML5

Este documento ofrece una introducción detallada a la **API de Historial de HTML5**, una herramienta diseñada para mejorar la experiencia de usuario en aplicaciones web dinámicas. A continuación, se presentan los principales conceptos y ejemplos prácticos.

---

## 📖 **Introducción a la API de Historial**

La API de historial permite manipular el historial del navegador mediante scripts. Con esto, es posible:

- Navegar hacia adelante y atrás en el historial sin recargar la página.
- Modificar la URL visible en la barra de direcciones.
- Escuchar eventos relacionados con el historial, como cuando el usuario presiona el botón "Atrás".

**Ventaja principal:** Optimiza las aplicaciones con contenido dinámico al mantener URLs únicas y reducir la sobrecarga de recargas completas.

---

## 🤔 **Razones para usar la API**

Históricamente, cambiar una URL implicaba recargar toda la página, lo que consumía tiempo y recursos. La API de historial permite:

- Actualizar partes específicas del contenido con métodos como `innerHTML` y solicitudes `XMLHttpRequest`.
- Simular la navegación sin recargar completamente.

**Caso práctico:** Si dos páginas son similares en un 90%, puedes intercambiar solo el contenido diferente sin volver a cargar la página completa.

---

## ⚙️ **Cómo funciona la API**

### 🔑 **Métodos principales**
- `history.pushState(state, title, url)`: Añade una nueva entrada al historial.
- `history.replaceState(state, title, url)`: Reemplaza la entrada actual.
- `popstate`: Evento que se dispara al navegar en el historial.

---

### 🖼️ **Ejemplo práctico: Galería de fotos dinámica**

#### **HTML básico**
```html
<aside id="gallery">
  <p class="photonav">
    <a id="photonext" href="next.html">Next ></a>
    <a id="photoprev" href="prev.html">< Previous</a>
  </p>
  <figure id="photo">
    <img id="photoimg" src="photo1.jpg" alt="Photo 1" width="500" height="375">
    <figcaption>Photo 1</figcaption>
  </figure>
</aside>
```

#### **Configuración de eventos en los enlaces**
```javascript
function setupHistoryClicks() {
  addClicker(document.getElementById("photonext"));
  addClicker(document.getElementById("photoprev"));
}

function addClicker(link) {
  link.addEventListener("click", function(e) {
    swapPhoto(link.href);
    history.pushState(null, null, link.href);
    e.preventDefault();
  }, false);
}
```
Cuando se hace clic en un enlace, se ejecuta la función `swapPhoto()` en lugar de navegar directamente.

#### **Intercambio de contenido dinámico**
```javascript
function swapPhoto(href) {
  var req = new XMLHttpRequest();
  req.open("GET", "gallery/" + href.split("/").pop(), false);
  req.send(null);

  if (req.status == 200) {
    document.getElementById("gallery").innerHTML = req.responseText;
    setupHistoryClicks();
  }
}
```

#### **Gestión del botón "Atrás"**
```javascript
window.addEventListener("popstate", function() {
  swapPhoto(location.pathname);
});
```
El evento `popstate` detecta cuando el usuario regresa al estado anterior y actualiza el contenido según la URL.

---

## 🌐 **Compatibilidad**

Esta API es compatible con navegadores modernos como:

- Chrome
- Firefox
- Safari
- Opera

---

## 📝 **Conclusión**

La **API de Historial de HTML5** mejora la usabilidad de aplicaciones web dinámicas al permitir la manipulación del historial y la actualización de contenido sin recargar páginas. Es una herramienta esencial para desarrolladores que buscan optimizar la experiencia del usuario.
