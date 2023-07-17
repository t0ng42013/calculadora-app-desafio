let num1 = "";
let num2 = "";
let operador = "";
let resultado = "";

let btns = document.querySelectorAll('.btn');


btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let btnText = btn.textContent;

    if (btnText === "del") {
      resetearCalculadora();
      return;
    }

    if (esNumero(btnText)) {
      agregarNumero(btnText);
      mostrarEnPantalla();
    }

    if (esOperador(btnText)) {
      if (!operador) {
        operador = btnText;
        mostrarEnPantalla();
      } else {
        calcularResultado();
        operador = btnText;
        num1 = resultado;
        num2 = "";
        mostrarEnPantalla();
      }
    }

    if (btnText === "=") {
      calcularResultado();
      mostrarResultadoEnPantalla();
    }
  });
});

function esNumero(valor) {
  return !isNaN(parseFloat(valor));
}

function esOperador(valor) {
  return valor === "+" || valor === "-" || valor === "X" || valor === "/";
}

function agregarNumero(valor) {
  if (!operador) {
    num1 += valor;
  } else {
    num2 += valor;
  }
}

function guardarOperador(valor) {
  operador = valor;
}

function calcularResultado() {
  const numero1 = parseFloat(num1);
  const numero2 = parseFloat(num2);

  switch (operador) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "X":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
    default:
      console.log("Operador no válido");
      break;
  }
}

function mostrarEnPantalla() {
  const valorAMostrar = num2 ? num2 : num1;
  display.textContent = valorAMostrar;
}

function mostrarResultadoEnPantalla() {
  display.textContent = resultado;
}

function resetearCalculadora() {
  num1 = "";
  num2 = "";
  operador = "";
  resultado = "";
  display.textContent = "0";
}
