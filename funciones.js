function interactuarCadenas(cadena1, cadena2) {
  let nuevaCadena = "";
  for (let i = 0; i < cadena1.length; i++) {
    if (cadena1[i] === "+" && cadena2[i] === "+") {
      nuevaCadena += "+";
    } else if (cadena1[i] === "-" && cadena2[i] === "-") {
      nuevaCadena += "-";
    } else {
      nuevaCadena += "0";
    }
  }
  return nuevaCadena;
}

function generarApodo(nombre) {
  if (nombre.length < 4) {
    throw new Error("Nombre muy corto.");
  }
  const vocales = "aeiou";

  let apodo = "";
  for (let i = 0; i < nombre.length; i++) {
    if (vocales.includes(nombre[2])) {
      return nombre.slice(0, 4);
    } else {
      return nombre.slice(0, 3);
    }
  }
  return apodo;
}

function obtenerMarcador(texto) {
  const numeros = {
    cero: 0,
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9,
  };

  const palabras = texto.split(" ");
  const numerosArray = palabras
    .filter((palabra) => numeros.hasOwnProperty(palabra))
    .map((palabra) => numeros[palabra]);

  return numerosArray.length === 2 ? numerosArray : [0, 0];
}

class Barco {
  constructor(calado, tripulacion) {
    this.calado = calado;
    this.tripulacion = tripulacion;
  }
  valeLaPena() {
    const caladoDespues = this.tripulacion * 1.5;
    const diferenciaCalado = this.calado - caladoDespues;
    if (diferenciaCalado > 20) {
      return true;
    } else {
      return false;
    }
  }
}
