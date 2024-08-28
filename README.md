# Encriptador de Texto

## Descripción

Este proyecto es un encriptador y desencriptador de texto simple, desarrollado con el propósito de aprender y aplicar conocimientos en **HTML**, **CSS**, y **JavaScript**. La aplicación permite a los usuarios ingresar un texto que puede ser encriptado y desencriptado mediante un conjunto de reglas específicas. Además, se puede copiar el resultado al portapapeles para un uso posterior.

## Funcionalidades

- **Encriptar texto:** Convierte vocales en secuencias de caracteres según las siguientes reglas:
  - `a` -> `ai`
  - `e` -> `enter`
  - `i` -> `imes`
  - `o` -> `ober`
  - `u` -> `ufat`

- **Desencriptar texto:** Reemplaza las secuencias de caracteres encriptadas con las vocales originales.

- **Copiar al portapapeles:** El usuario puede copiar el texto encriptado o desencriptado con un solo clic.

## Tecnologías Utilizadas

- **HTML:** Estructura básica de la aplicación.
- **CSS:** Estilos personalizados utilizando **CSS** puro con variables globales para mantener consistencia en colores y estilos.
- **JavaScript:** Lógica de encriptado/desencriptado y manejo de eventos en la interfaz.
- **[SweetAlert2](https://sweetalert2.github.io/):** Biblioteca externa para la visualización de alertas personalizadas.

## Cómo lo Hice

1. **Estructura del Proyecto:**
   - El archivo `index.html` contiene la estructura principal de la página, incluyendo los contenedores para el texto de entrada y salida, los botones, y las imágenes decorativas.
   - El archivo `estilos.css` gestiona todos los estilos de la aplicación, incluyendo el uso de variables CSS y media queries para un diseño responsivo.
   - El archivo `encriptador.js` implementa la lógica para encriptar, desencriptar, y copiar texto, además de integrar alertas personalizadas con SweetAlert2.

2. **Lógica de Encriptado y Desencriptado:**
   - Utilicé **JavaScript** para capturar los eventos de clic en los botones de encriptar y desencriptar. Dependiendo de la entrada del usuario, se aplican transformaciones específicas al texto.
   - La función de copiado se ejecuta al presionar el botón "Copiar", lo cual selecciona el texto y lo copia al portapapeles del usuario.

3. **Estilos y Diseño:**
   - Usé **CSS** para diseñar una interfaz de usuario limpia y amigable. El diseño es responsivo, adaptándose a diferentes tamaños de pantalla.

4. **Alertas Personalizadas:**
   - Implementé alertas utilizando la biblioteca **SweetAlert2** para mejorar la experiencia de usuario, mostrando advertencias claras cuando se ingresan datos incorrectos.

## Cómo Ejecutarlo

1. Clona el repositorio o descarga los archivos.
2. Abre `index.html` en tu navegador.
3. Ingresa el texto que deseas encriptar o desencriptar.
4. Utiliza los botones para realizar la acción deseada.
