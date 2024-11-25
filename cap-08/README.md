# Almacenamiento Local con HTML5

Este proyecto explora el uso del almacenamiento local con HTML5, permitiendo guardar datos directamente en el navegador sin depender de cookies o complementos externos. Además, explica los beneficios del almacenamiento local frente a soluciones previas y presenta ejemplos prácticos, como el almacenamiento del estado de un juego.

## Tabla de Contenidos
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Ejemplos de Código](#ejemplos-de-código)
- [Limitaciones](#limitaciones)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características
- **Almacenamiento Persistente**: Guarda datos en el navegador del usuario, que se conservan incluso después de cerrar la pestaña o el navegador.
- **Compatibilidad con Navegadores Modernos**: Compatible con Chrome, Firefox, Safari, Opera, iOS, Android, y versiones recientes de Edge.
- **Métodos CRUD Simples**: Métodos intuitivos (`setItem`, `getItem`, `removeItem`, `clear`) para almacenar, leer, actualizar y borrar datos.
- **Eventos de Cambio**: Escucha cambios en el almacenamiento mediante el evento `storage`, útil para aplicaciones que usan datos compartidos.

## Requisitos
Para usar este proyecto necesitas:
- Un navegador moderno compatible con HTML5 (Chrome, Firefox, Safari, Opera, etc.).
- Habilidad para ejecutar código JavaScript.

## Instalación
Este proyecto no requiere instalación de dependencias ni de un entorno complejo. Simplemente:
1. Descarga o clona el repositorio.
2. Abre el archivo `index.html` en tu navegador.

Alternativamente, también puedes incluir el archivo `almacenamiento.js` en cualquier proyecto que desee utilizar almacenamiento local en HTML5.

## Uso
El almacenamiento HTML5 se basa en pares clave-valor. Aquí te mostramos cómo verificar la compatibilidad y usar los métodos de almacenamiento básico.

### Verificar Compatibilidad
Para verificar si el navegador soporta almacenamiento local:
```javascript
function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}
```

### Guardar Datos
Almacenar un valor utilizando `localStorage.setItem`:
```javascript
localStorage.setItem("usuario", "Juan Perez");
```

### Leer Datos
Recuperar un valor con `localStorage.getItem`:
```javascript
var usuario = localStorage.getItem("usuario");
console.log(usuario); // "Juan Perez"
```

### Eliminar Datos
Eliminar un valor específico:
```javascript
localStorage.removeItem("usuario");
```

Eliminar todos los valores almacenados:
```javascript
localStorage.clear();
```

## Ejemplos de Código

### Ejemplo 1: Guardar el Estado de un Juego
Este ejemplo almacena el estado de un juego, como la posición de piezas y número de movimientos.
```javascript
function saveGameState() {
    localStorage.setItem("juegoEnCurso", true);
    localStorage.setItem("movimientos", JSON.stringify(movimientos));
}

function loadGameState() {
    if (localStorage.getItem("juegoEnCurso") === "true") {
        movimientos = JSON.parse(localStorage.getItem("movimientos"));
    }
}
```

### Ejemplo 2: Escuchar Cambios en el Almacenamiento
Registrar cambios en el almacenamiento:
```javascript
window.addEventListener("storage", function(e) {
    console.log("Clave cambiada:", e.key);
    console.log("Valor anterior:", e.oldValue);
    console.log("Nuevo valor:", e.newValue);
});
```

### Ejemplo 3: Almacenamiento de Datos en una Base de Datos SQL (Web SQL)
Con Web SQL, puedes almacenar datos en una base SQL dentro del navegador.
```javascript
var db = openDatabase('miDB', '1.0', 'Almacenamiento de prueba', 2 * 1024 * 1024);
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios (id, nombre)');
    tx.executeSql('INSERT INTO usuarios (id, nombre) VALUES (1, "Juan")');
});
```

## Limitaciones
- **Espacio de Almacenamiento**: La mayoría de los navegadores limitan el almacenamiento a 5 MB por dominio.
- **Compatibilidad**: Aunque ampliamente compatible, algunos navegadores antiguos no soportan todas las características de HTML5 Storage.
- **Solo Almacena Texto**: Todos los datos se guardan como texto, por lo que valores numéricos o booleanos deben transformarse al recuperarlos.

## Contribuciones
¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:
1. Realiza un fork del repositorio.
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -m 'Agrego nueva funcionalidad'`).
4. Envía un push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre una solicitud de pull.

## Licencia
Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
