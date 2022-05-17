"use strict" 

/* Funcion sin parametros y sin retornos */
function mostrarHora() {
    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActual = fechaActual.getMinutes();
    var minutosActualStr = minutosActual.toString();

    if (horaActual > 12) {
        horaActual = horaActual - 12;

    }
    if (minutosActual < 10){
        minutosActualStr = "0" + minutosActualStr;
    }
    alert("hora actual: " + horaActual + ":" + minutosActualStr);
}

/* funcion con parametros y sin retornos */

function saludo(striHtml) {
   alert(striHtml);
}
/* funcion con dos parametros  */
function presentacion(nombre, titulado) {
    alert(" Mi nombre es: " + nombre + " del titulado " + titulado);
}
/* funcion con retorno */
function validardescuento(valorproducto) {
    var total = 0; 
    /* si la compra es igual o mayor a 10000 tiene descuento del 10% y si esta entre 5000 y 9999
     tiene descuento del 5% */
    if (valorproducto >= 10000) {
        total = valorproducto * .9;
    }
    else if (valorproducto >= 5000 && valorproducto <= 9999) {
        total = valorproducto * .95;
    }
    return total;
}
function calculardescuento(valorproducto) {
    alert("costo total descuento: " + validardescuento(valorproducto));
}