# Capítulo 3: ¿Qué significa todo esto?

## Resumen del capítulo

El capitulo aborda la evolución y mejora de la semántica en HTML5, explicando cómo las nuevas etiquetas y prácticas ayudan a hacer el código HTML más claro y significativo, tanto para los navegadores como para los usuarios. A continuación, se exploran los principales subtemas.

#### 1. El DOCTYPE
El documento comienza explicando la importancia del DOCTY.
Antes, existían DOCTYPE largos y complejos como:

`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`

pero fueron modificados por uno mas corto :

`<!DOCTYPE html>`

#### 2. El Elemento Raíz
La estructura de una
En HTML5, la etiqueta <html>yxmlns, que
`<html lang="en">`

3. El Elemento<head>
El <head>contiene met
El documento destaca una nueva manera simplificada de declarar la codificación de caracteres en HTML5:

`<meta charset="utf-8" />` 

4. Relaciones de Enlaces (link relations)

Los enlaces `<a>` no solo conectan a otras páginas, también pueden tener relaciones específicas, como "stylesheet" para hojas de estilo o "alternate" para feeds RSS.

HTML5 introduce nuevas relaciones, como:

`<link rel="stylesheet" href="style.css">
`

5. Nuevos Elementos Semánticos
HTML5 introduce varios elementos semánticos nuevos que mejoran la estructura y el significado del contenido:

 `<section>: Agrupa contenido temático, como capítulos o secciones de una página.`

`<nav>: Representa un conjunto de enlaces de navegación.`

`<article>: Define contenido que puede ser independiente, como una entrada de blog.`

`<aside>: Se usa para contenido tangencial al principal, como citas o anuncios.`

`<header> y <footer>: Se utilizan para definir encabezados y pies de página.
Ejemplo de uso de elementos semánticos:`

 `<article>`
  
  `<header>`
   
    <h1>Título del artículo</h1>
 
  `</header>`
  
  `<p>Este es el contenido del artículo.</p>`
  
  `<footer>`
   
    `<p>Publicado por Autor</p>`
  
  `</footer>`

`</article>`

6. El Elemento `<time>`
Para representar fechas y horas, HTML5 introduce el elemento `<time>`, que puede incluir una fecha legible por humanos y otra por máquinas:

`<time datetime="2024-10-15">15 de octubre de 2024</time>`

7. Compatibilidad con Navegadores Antiguos
El documento explica cómo manejar los nuevos elementos en navegadores antiguos que no los reconocen. Una técnica es crear estos elementos mediante JavaScript para que el navegador los trate correctamente:

`<script>document.createElement("article");</script>
`

8. Conclusión
HTML5 simplifica la estructura del código HTML, haciéndolo más semántico y fácil de interpretar tanto para navegadores como para personas. Los nuevos elementos semánticos mejoran la accesibilidad y organización del contenido, lo que ayuda tanto a usuarios con discapacidades como a los motores de búsqueda a entender mejor el propósito de cada parte de la página.