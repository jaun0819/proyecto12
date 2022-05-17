"use strict"
console.log("operador AND.....&&");
console.log("operador OR.....||");
console.log("operador de negacion.....!=");

/*operador AND */
var nameUser = "pedro";
var passUser = "1234";
var nameBD = "pedro";
var passBD  = "12345";

if (nameUser === nameBD && passUser ===passBD) {
    console.log("Bienvenido");
}else {
    console.log("usuario y/o contraseña incorrecta");
}

/* Operador OR */
/* si no hay fluido electrico o no hay transporte se suspende el evento */
var transporte = true;
var electricidad = true;
if (transporte === false  || electricidad === false) {
    console.log("El evento ha sido suspendido");
}
else {
    console.log("El evento no ha sufrido modificaciones");
}

var estado = true;
if (estado !=false) {
console.log("Algoritmo ejecutado");
}