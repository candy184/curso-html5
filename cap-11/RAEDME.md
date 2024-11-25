# Introducción a los Microdatos en HTML5

Este documento es una guía práctica para implementar **microdatos en HTML5**, proporcionando una estructura semántica que permite a los motores de búsqueda y aplicaciones comprender mejor el contenido de una página web. A continuación, se detalla cómo utilizar microdatos, los modelos de datos asociados y ejemplos para marcar información como perfiles personales, organizaciones y eventos.

---

## 1. ¿Qué son los Microdatos?

Los microdatos son una forma de anotar el DOM con información estructurada usando pares nombre/valor organizados en vocabularios personalizados.


### **Ventajas:**
- Permiten definir vocabularios personalizados.
- Integran fácilmente datos adicionales a HTML existente.

---

## 2. Modelo de Datos de Microdatos

### **Elementos Clave:**
1. **Vocabularios personalizados:** Identificados por una URL única (namespace).
2. **Propiedades comunes:**
   - `name`: Texto que representa un nombre.
   - `photo`: URL de una imagen.
   - `url`: Enlace relacionado.

### **Ejemplo Básico:**
```html
<section itemscope itemtype="http://data-vocabulary.org/Person">
  <h1 itemprop="name">John Doe</h1>
  <img itemprop="photo" src="photo.jpg" alt="Foto de John">
  <a itemprop="url" href="https://johndoe.com">Sitio web</a>
</section>
```
**Explicación:**  
- `itemscope` establece el alcance.  
- `itemtype` especifica el vocabulario.  
- `itemprop` define propiedades dentro del vocabulario.

---

## 3. Origen de los Valores de Propiedades

El valor de cada propiedad depende del elemento HTML donde se aplica:  
- Para `<img>`, proviene de `src`.  
- Para `<a>`, proviene de `href`.  
- Otros elementos usan el contenido textual.

---

## 4. Marcado de Personas

El marcado de personas en microdatos enriquece la semántica de perfiles personales, permitiendo definir propiedades como nombre, título profesional y dirección.

### **Ejemplo:**
```html
<section itemscope itemtype="http://data-vocabulary.org/Person">
  <h1 itemprop="name">Jane Smith</h1>
  <p itemprop="title">Ingeniera de Software</p>
  <address itemprop="address" itemscope itemtype="http://data-vocabulary.org/Address">
    <span itemprop="street-address">123 Calle Principal</span>
    <span itemprop="locality">Ciudad</span>
    <span itemprop="region">Estado</span>
    <span itemprop="postal-code">12345</span>
    <span itemprop="country-name">País</span>
  </address>
</section>
```
**Explicación:**  
Se definen propiedades como nombre (`name`), título (`title`) y dirección (`address`) con su propia jerarquía.

---

## 5. Marcado de Organizaciones y Negocios

El marcado de organizaciones permite definir propiedades como nombre, dirección, teléfono y URL.

### **Ejemplo:**
```html
<article itemscope itemtype="http://data-vocabulary.org/Organization">
  <h1 itemprop="name">Empresa XYZ</h1>
  <p itemprop="address" itemscope itemtype="http://data-vocabulary.org/Address">
    <span itemprop="street-address">456 Calle Secundaria</span>
    <span itemprop="locality">Otra Ciudad</span>
    <span itemprop="region">Otro Estado</span>
  </p>
  <p itemprop="tel">123-456-7890</p>
  <a itemprop="url" href="http://empresa.com">Sitio web</a>
</article>
```

---

## 6. Marcado de Eventos

El marcado de eventos define propiedades como nombre del evento, fechas de inicio y fin, ubicación y descripción.

### **Ejemplo:**
```html
<article itemscope itemtype="http://data-vocabulary.org/Event">
  <h1 itemprop="summary">Conferencia Anual</h1>
  <p>
    <time itemprop="startDate" datetime="2024-12-01T10:00">1 de diciembre de 2024</time>
    -
    <time itemprop="endDate" datetime="2024-12-01T17:00">17:00</time>
  </p>
  <p itemprop="location" itemscope itemtype="http://data-vocabulary.org/Address">
    <span itemprop="street-address">789 Calle Tercera</span>
    <span itemprop="locality">Ciudad de Ejemplo</span>
  </p>
</article>
```

---

## 7. Aplicaciones en Motores de Búsqueda

Los microdatos se utilizan para generar **Rich Snippets**, que mejoran los resultados de búsqueda al mostrar información estructurada.

### **Ejemplo de Resultado:**  
```
Conferencia Anual  
1 de diciembre de 2024, 10:00 - 17:00  
Ciudad de Ejemplo
```

---

## Conclusión

Este documento ofrece una introducción detallada al uso de microdatos en HTML5, proporcionando ejemplos claros para implementar semántica adicional en diversas aplicaciones web.
