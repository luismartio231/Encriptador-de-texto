//-------Selección de Elementos-------//
// Selecciona el botón de encriptar del DOM
const btnEncriptar = document.querySelector(".btn-encriptar");
// Selecciona el área de texto donde se ingresan los datos para encriptar
const txtEncriptar = document.querySelector(".encriptar");
// Selecciona el elemento para mostrar mensajes de aviso
const aviso = document.querySelector(".texto-aviso");
// Selecciona el elemento donde se mostrará el texto encriptado o desencriptado
const respuesta = document.querySelector(".evaluar");
// Selecciona el contenedor de la tarjeta que puede ser removido después de encriptar/desencriptar
const contenido = document.querySelector(".tarjeta-contenedor");
// Selecciona el botón de copiar para copiar el texto encriptado/desencriptado
const btnCopiar = document.querySelector(".btn-copiar");
// Selecciona el botón de desencriptar del DOM
const btnDesencriptar = document.querySelector(".btn-desencriptar");

//-------Boton de Encriptar-------//
// Añade un evento de clic al botón de encriptar
btnEncriptar.addEventListener("click", e => {
    e.preventDefault(); // Previene el comportamiento por defecto del botón (recargar la página)
    let texto = txtEncriptar.value; // Obtiene el valor del área de texto
    // Normaliza el texto para eliminar acentos y caracteres especiales
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == "") { // Verifica si el campo de texto está vacío
        // Aplica estilo al mensaje de aviso si el campo de texto está vacío
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        // Muestra un mensaje de advertencia utilizando SweetAlert
        Swal.fire({
            title: "Aviso!",
            color: "#0A3871",
            text: "El campo de texto no debe estar vacio",
            icon: "warning"
        });

        // Elimina el estilo aplicado al mensaje de aviso después de 1.5 segundos
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (texto !== txt) { // Verifica si el texto contiene caracteres especiales o acentos
        // Aplica estilo al mensaje de aviso si hay caracteres especiales o acentos
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        // Muestra un mensaje de advertencia utilizando SweetAlert
        Swal.fire({
            title: "Aviso!",
            color: "#0A3871",
            text: "No debe tener acentos y caracteres especiales",
            icon: "warning"
        });

        // Elimina el estilo aplicado al mensaje de aviso después de 1.5 segundos
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (texto !== texto.toLowerCase()) { // Verifica si el texto no está en minúsculas
        // Aplica estilo al mensaje de aviso si el texto no está en minúsculas
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        // Muestra un mensaje de advertencia utilizando SweetAlert
        Swal.fire({
            title: "Aviso!",
            color: "#0A3871",
            text: "El texto debe ser todo en minúscula",
            icon: "warning"
        });

        // Elimina el estilo aplicado al mensaje de aviso después de 1.5 segundos
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else { // Si el texto es válido, procede a encriptarlo
        // Reemplaza las vocales por sus correspondientes encriptadas
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto; // Muestra el texto encriptado en el elemento 'respuesta'
        btnCopiar.style.visibility = "inherit"; // Hace visible el botón de copiar
        contenido.remove(); // Remueve el contenedor de la tarjeta del DOM
    }
});

//-------Boton de Desencriptar-------//
// Añade un evento de clic al botón de desencriptar
btnDesencriptar.addEventListener("click", e => {
    e.preventDefault(); // Previene el comportamiento por defecto del botón (recargar la página)
    let texto = txtEncriptar.value; // Obtiene el valor del área de texto
    // Normaliza el texto para eliminar acentos y caracteres especiales
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == "") { // Verifica si el campo de texto está vacío
        // Aplica estilo al mensaje de aviso si el campo de texto está vacío
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        // Muestra un mensaje de advertencia utilizando SweetAlert
        Swal.fire({
            title: "Aviso!",
            color: "#0A3871",
            text: "El campo de texto no debe estar vacio",
            icon: "warning"
        });

        // Elimina el estilo aplicado al mensaje de aviso después de 1.5 segundos
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (texto !== txt) { // Verifica si el texto contiene caracteres especiales o acentos
        // Aplica estilo al mensaje de aviso si hay caracteres especiales o acentos
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        // Muestra un mensaje de advertencia utilizando SweetAlert
        Swal.fire({
            title: "Aviso!",
            color: "#0A3871",
            text: "No debe tener acentos y caracteres especiales",
            icon: "warning"
        });

        // Elimina el estilo aplicado al mensaje de aviso después de 1.5 segundos
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (texto !== texto.toLowerCase()) { // Verifica si el texto no está en minúsculas
        // Aplica estilo al mensaje de aviso si el texto no está en minúsculas
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        // Muestra un mensaje de advertencia utilizando SweetAlert
        Swal.fire({
            title: "Aviso!",
            color: "#0A3871",
            text: "El texto debe ser todo en minúscula",
            icon: "warning"
        });

        // Elimina el estilo aplicado al mensaje de aviso después de 1.5 segundos
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else { // Si el texto es válido, procede a desencriptarlo
        // Reemplaza los textos encriptados por las vocales originales
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto; // Muestra el texto desencriptado en el elemento 'respuesta'
        btnCopiar.style.visibility = "inherit"; // Hace visible el botón de copiar
        contenido.remove(); // Remueve el contenedor de la tarjeta del DOM
    }
});

//-------Boton de Copiar-------//
// Añade un evento de clic al botón de copiar
btnCopiar.addEventListener("click", e => {
    e.preventDefault(); // Previene el comportamiento por defecto del botón (recargar la página)
    let copiar = respuesta; // Selecciona el elemento que contiene el texto para copiar
    copiar.select(); // Selecciona el texto dentro del elemento
    document.execCommand("copy"); // Ejecuta el comando de copiar para copiar el texto al portapapeles
});
