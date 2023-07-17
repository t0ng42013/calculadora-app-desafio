let num1 = "";
let num2 = "";
let operador = "";
let resultado = "";
let bandera = false;
let bandera2 = false;
let bandera3 = false;

let btns = document.querySelectorAll(".btn");
let display = document.getElementById("display");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (bandera3) {
      resetearCalculadora();
      bandera3 = false;
    }

    // Ingreso de numeros
    if (
      (btn.textContent >= 0 && btn.textContent <= 9) ||
      btn.textContent == "."
    ) {
      if (display.textContent == operador) {
        display.textContent = "";
      }

      mostrarEnPantalla(btn.textContent);
      bandera = true;
      console.log(btn.textContent, num1, bandera, "ss");
    }

    // Ingreso de operadores
    if (
      (btn.textContent == "+" && bandera) ||
      (btn.textContent == "-" && bandera) ||
      (btn.textContent == "X" && bandera) ||
      (btn.textContent == "/" && bandera) ||
      (bandera2 && btn.textContent == "+") ||
      (bandera2 && btn.textContent == "-") ||
      (bandera2 && btn.textContent == "X") ||
      (bandera2 && btn.textContent == "/")
    ) {
      operador = btn.textContent;

      if (
        display.textContent !== "+" &&
        display.textContent != "-" &&
        display.textContent != "X" &&
        display.textContent !== "/"
      ) {
        console.log(display.textContent, "ssssss");
        num1 = parseFloat(display.textContent);
      }
      bandera = false;
      bandera2 = true;
      display.textContent = operador;
    }
    //calcular
    if (btn.textContent == "=" && num1 && bandera) {
      calcularResultado(num1, operador);
    }

    if (btn.textContent == "Reset") {
      resetearCalculadora();
    }
  });
});

function resetearCalculadora() {
  display.textContent = "0";
  num1 = "";
  num2 = "";
  operador = "";
  bandera = false;
  bandera2 = false;
  bandera3 = false;
}

function mostrarEnPantalla(valor) {
  if (display.textContent === "0") {
    display.textContent = "";
  }
  display.textContent += valor;
}

function operadores(operador) {
  console.log("operador");
  if (
    valor.textContent === "+" ||
    valor.textContent === "-" ||
    valor.textContent === "X" ||
    valor.textContent === "/"
  ) {
    console.log("first");
    operadores(valor);
  }
}

function calcularResultado(num1, operador) {
  num2 = parseFloat(display.textContent);

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      display.textContent = resultado;
      bandera = false;
      bandera3 = true;
      break;
    case "-":
      resultado = num1 - parseFloat(display.textContent);
      display.textContent = resultado;
      bandera = false;
      break;
    case "X":
      resultado = num1 * parseFloat(display.textContent);
      display.textContent = resultado;
      bandera = false;
      break;
    case "/":
      resultado = num1 / parseFloat(display.textContent);
      display.textContent = resultado;
      bandera = false;
      break;

    default:
      display.textContent = "ERROR";
      break;
  }
}
