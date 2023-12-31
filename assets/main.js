let num1 = "";
let num2 = "";
let operador = "";
let resultado = "";
let bandera = false;
let bandera2 = false;
let bandera3 = false;

let btns = document.querySelectorAll(".btn");
let display = document.getElementById("display");
let res = document.querySelector(".btnres");
let del = document.querySelector(".btndel");

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

    if (btn.textContent == "Reset" ) {
      resetearCalculadora();    
    }

  });
});

res.addEventListener("click", () => { 
  resetearCalculadora();
});

del.addEventListener("click", () => {
  display.textContent = '0';
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
  if(display.textContent.length < 10){
  display.textContent += valor;
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
      bandera3 = true;
      break;
    case "X":
      resultado = num1 * parseFloat(display.textContent);
      display.textContent = resultado;
      bandera = false;
      bandera3 = true;
      break;
    case "/":
      resultado = num1 / parseFloat(display.textContent);
      display.textContent = resultado;
      bandera = false;
      bandera3 = true;
      break;

    default:
      display.textContent = "ERROR";
      bandera3 = true;
      break;
  }
}
