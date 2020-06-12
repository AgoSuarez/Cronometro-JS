let corriendo = false;
let hora = 0;
let minutos = 0;
let segundos = 0;
let decimas = 0;
const boton = document.getElementById("boton");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");

boton2.addEventListener("click", () => {
  corriendo = false;
  clearInterval(intervalo);
  boton.classList.remove("disable");
  boton2.classList.add("disable");
});

boton3.addEventListener("click", () => {
  corriendo = false;
  clearInterval(intervalo);
  hora = 0;
  minutos = 0;
  segundos = 0;
  decimas = 0;
  muestraHora(hora);
  muestraMinutos(minutos);
  muestraSegundos(segundos);
  muestraDecimas(decimas);
  boton.classList.remove("disable");
  boton2.classList.add("disable");
  boton3.classList.add("disable");
});

boton.addEventListener("click", () => {
  if (!corriendo) {
    corriendo = true;
    boton.classList.add("disable");
    boton2.classList.remove("disable");
    boton3.classList.remove("disable");
    intervalo = setInterval(() => {
      muestraTiempo();
    }, 10);
  }
});

function muestraHora(hora) {
  document.getElementById("hora").innerHTML =
    hora > 9 ? hora + ":" : "0" + hora + ":";
}
function muestraMinutos(minutos) {
  document.getElementById("minutos").innerHTML =
    minutos > 9 ? minutos + ":" : "0" + minutos + ":";
}
function muestraSegundos(segundos) {
  document.getElementById("segundos").innerHTML =
    segundos > 9 ? segundos + ":" : "0" + segundos + ":";
}
function muestraDecimas(decimas) {
  document.getElementById("decimas").innerHTML =
    decimas > 9 ? decimas : "0" + decimas;
}

function muestraTiempo() {
  decimas++;
  if (decimas == 100) {
    decimas = 0;
    segundos++;
    if (segundos == 60) {
      segundos = 0;
      minutos++;
      if (minutos == 60) {
        minutos = 0;
        hora++;
        muestraHora(hora);
      }
      muestraMinutos(minutos);
    }
    muestraSegundos(segundos);
  }
  muestraDecimas(decimas);
}
