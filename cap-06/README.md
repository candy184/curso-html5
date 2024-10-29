# Sumérjase en HTML5: Vídeo en la Web

Esta guía explora en profundidad la incorporación de video en la web mediante HTML5, proporcionando un método estándar para incluir multimedia en las páginas sin depender de complementos de terceros. El documento abarca elementos esenciales, formatos, códecs, compatibilidad y técnicas de codificación.

## Resumen

HTML5 introduce el elemento `<video>`, permitiendo la integración directa de videos en sitios web. Antes de HTML5, los videos en la web requerían plugins como Flash o QuickTime, lo que generaba problemas de compatibilidad en diferentes dispositivos. El video en HTML5, aunque aún en evolución, ofrece una solución más versátil con soporte integrado en varios navegadores para diferentes formatos de video y audio.

## Temas Clave

### 1. Elementos de Video en HTML5
   - **Elemento `<video>`**: Etiqueta estándar de HTML5 para la inclusión de video en la web.
   - **Atributos Importantes**:
     - `src`: Fuente del archivo de video.
     - `controls`: Permite controles de reproducción como play, pausa, y volumen.
     - `autoplay`, `preload`: Opciones para la carga automática y el almacenamiento en búfer.

### 2. Formatos y Contenedores de Video
   - **MP4 (H.264 y AAC)**: Formato ampliamente soportado, especialmente en dispositivos móviles y navegadores.
   - **Ogg (Theora y Vorbis)**: Formato de código abierto, compatible con Firefox, Chrome y Opera.
   - **WebM (VP8 y Vorbis)**: Formato abierto de Google, compatible con navegadores modernos.

### 3. Códecs de Video y Audio
   - **Códecs de Video**: H.264, Theora, VP8, cada uno con diferentes niveles de compresión y compatibilidad.
   - **Códecs de Audio**: MP3, AAC, Vorbis, con diversos grados de calidad y uso.

### 4. Compatibilidad entre Navegadores
   - Cada navegador tiene diferentes niveles de soporte para los formatos de video y códecs. Para máxima compatibilidad, se recomienda:
     1. Codificar en **WebM** (VP8 y Vorbis).
     2. Codificar en **MP4** (H.264 y AAC).
     3. Codificar en **Ogg** (Theora y Vorbis).

### 5. Herramientas de Codificación
   - **Miro Video Converter**: Herramienta de código abierto para convertir videos en múltiples formatos.
   - **HandBrake**: Para codificación H.264 en contenedor MP4.
   - **ffmpeg2theora y Firefogg**: Para conversión de video en formato Ogg.

## Ejemplo de Código HTML para Videos Compatibles en HTML5

```html
<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
</video>
