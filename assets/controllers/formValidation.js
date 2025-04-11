// formValidator.js

export default function validarFormulario() {
    const form = document.querySelector("form");
    const nombre = document.querySelector(".nombre");
    const email = document.querySelector(".email");
    const contra = document.querySelector(".contra");
    const motivo = document.querySelector("#motiv");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let errores = [];

        if (nombre.value.trim() === "") {
            errores.push("El nombre es obligatorio");
        }

        if (!validarEmail(email.value)) {
            errores.push("El correo no es válido");
        }

        if (contra.value.length < 6) {
            errores.push("La contraseña debe tener al menos 6 caracteres");
        }

        if (motivo.value.trim() === "") {
            errores.push("Debes escribir un motivo");
        }

        if (errores.length > 0) {
            alert("Errores:\n" + errores.join("\n"));
        } else {
            alert("Formulario enviado correctamente ✅");
            form.reset();
        }
    });

    function validarEmail(email) {
        // Expresión regular básica para validar email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

validarFormulario();
