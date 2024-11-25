# Formularios Web en HTML5: Guía Práctica

Este proyecto explora las características avanzadas de los formularios en HTML5, presentando sus nuevos atributos, tipos de entrada y funcionalidades. La guía incluye ejemplos prácticos, consejos de implementación y estrategias para asegurar compatibilidad con navegadores antiguos.

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Nuevos Tipos de Entrada](#nuevos-tipos-de-entrada)
3. [Texto de Marcador de Posición](#texto-de-marcador-de-posicion)
4. [Autofoco Automático](#autofoco-automático)
5. [Validación de Formularios](#validación-de-formularios)
6. [Compatibilidad con Navegadores](#compatibilidad-con-navegadores)

---

## Introducción
HTML5 revoluciona la manera en que los formularios web son construidos y utilizados, ofreciendo nuevas herramientas que mejoran la experiencia del usuario. Este documento explica cómo implementar estas características y adaptarlas según las necesidades de cada proyecto.

---

## Nuevos Tipos de Entrada
HTML5 define múltiples nuevos tipos de campos, entre ellos:
- **Correo Electrónico (`<input type="email">`)**: Valida automáticamente correos electrónicos.
- **URLs (`<input type="url">`)**: Asegura que el contenido sea un enlace válido.
- **Números (`<input type="number">`)**: Permite establecer rangos y pasos.
- **Rangos (`<input type="range">`)**: Representa valores numéricos con controles deslizantes.
- **Fecha y Hora (`<input type="date">`, `<input type="time">`)**: Agrega selectores de fecha y hora nativos.
- **Color (`<input type="color">`)**: Selección de colores mediante un cuadro emergente.

Ejemplo para un campo de número:
```html
<input type="number" min="1" max="10" step="1" value="5">
```

---

## Texto de Marcador de Posición
El atributo `placeholder` muestra un texto guía dentro de un campo vacío:
```html
<input type="text" placeholder="Introduce tu nombre">
```
Este texto desaparece al enfocarse el campo.

---

## Autofoco Automático
El atributo `autofocus` posiciona el cursor automáticamente en un campo al cargar la página:
```html
<input type="text" autofocus>
```
Compatibilidad con navegadores antiguos:
```html
<script>
  if (!("autofocus" in document.createElement("input"))) {
    document.getElementById("campo").focus();
  }
</script>
```

---

## Validación de Formularios
HTML5 incluye validación automática para campos como:
- **Correo Electrónico (`type="email"`)**
- **URLs (`type="url"`)**
- **Números (`type="number"`)**: Respetando atributos `min` y `max`.

### Campos Requeridos
Agrega el atributo `required` para forzar que un campo sea llenado:
```html
<input type="text" required>
```

### Desactivación de Validación
Usa `novalidate` para evitar validaciones automáticas:
```html
<form novalidate>
  <input type="email">
</form>
```

---

## Compatibilidad con Navegadores
Las nuevas características de HTML5 se degradan elegantemente en navegadores antiguos, tratándolas como campos de texto normales (`<input type="text">`). Se recomienda usar bibliotecas como [Modernizr](https://modernizr.com/) para detectar soporte y ofrecer soluciones alternativas.
