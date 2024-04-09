const form = document.forms.register;

const inputs = document.querySelectorAll("#formulario input");
const textarea = document.querySelector("#formulario textarea");
const error1 = document.querySelector(".mensaje__error.error-nombre");
const error2 = document.querySelector(".mensaje__error.error-apodo");
const error3 = document.querySelector(".mensaje__error.error-biografia");
const error4 = document.querySelector(".mensaje__error.error-contraseña");
const boton = document.querySelector(".button__form");
const regex = {
  nombre: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]{3,}$/,
  apodo: /^[a-zA-Z0-9]{3,10}$/,
  biografia: /^[a-zA-Z0-9\s]{100,}$/,
  contraseña: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
};

const validarInputs = (event) => {
  switch (event.target.name) {
    case "nombre":
      if (regex.nombre.test(event.target.value)) {
        error1.style.display = "none";
      } else {
        error1.style.display = "block";
      }
      break;
    case "apodo":
      if (regex.apodo.test(event.target.value)) {
        error2.style.display = "none";
      } else {
        error2.style.display = "block";
      }
      break;
    case "biografia":
      if (regex.biografia.test(event.target.value)) {
        error3.style.display = "none";
      } else {
        error3.style.display = "block";
      }
      break;
    case "contraseña":
      if (regex.contraseña.test(event.target.value)) {
        error4.style.display = "none";
      } else {
        error4.style.display = "block";
      }
      break;
  }
  actualizarEstadoBoton();
};

const validarFormulario = () => {
  // Verificar si todos los campos del formulario son válidos
  const nombreValido = regex.nombre.test(form.elements.nombre.value);
  const apodoValido = regex.apodo.test(form.elements.apodo.value);
  const contraseñaValida = regex.contraseña.test(
    form.elements.contraseña.value
  );

  // Devolver true si todos los campos son válidos, de lo contrario, false
  return nombreValido && apodoValido && contraseñaValida;
};

const actualizarEstadoBoton = () => {
  boton.disabled = !validarFormulario();
};

textarea.addEventListener("input", validarInputs);
inputs.forEach((input) => {
  input.addEventListener("input", validarInputs);
  input.addEventListener("input", validarFormulario);
});

form.onsubmit = function (event) {
  event.preventDefault();

  const nombre = form.elements.nombre.value;
  const apodo = form.elements.apodo.value;
  const biografia = form.elements.biografia.value;
  const contraseña = form.elements.contraseña.value;
  // URL de destino
  const url = "https://mocktarget.apigee.net/echo";
  // Crear el objeto de datos a enviar
  const datos = {
    nombre: nombre,
    apodo: apodo,
    biografia: biografia,
    contraseña: contraseña,
  };

  // Opciones para fetch
  const options = {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Realizar petición
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data);
    })
    .catch((error) => {
      console.error("Error al enviar la solicitud:", error);
    });
};

//local storage--------------------------
function saveForm(form) {
  const formData = new FormData(form);
  const formDataObject = {};

  for (const [key, value] of formData.entries()) {
    if (key !== "contraseña") {
      formDataObject[key] = value;
    }
  }

  localStorage.setItem("formData", JSON.stringify(formDataObject));
}

form.addEventListener("change", (_event) => saveForm(form));
