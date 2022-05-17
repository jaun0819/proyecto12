"use strict"


/* operador condicional sencillo if */
var passBD = "1234";
var passUser = 1234;

if (passBD == passUser) {
    console.log("Bienvenido!!");
}
else {
    console.log("¡¡Acceso denegado!!");  
}

/*Condicional con  Operador 'estritamente igual' */


if (passBD === passUser) {
    console.log("Bienvenido!!");
}
else {
    console.log("¡¡Acceso denegado!!");  
}

/*Condicional anidado */
/* Tiendas metro tiene descuento del 5% en cerveza.
si la compra es igual o superior a $20000 en cervezas tiene un 5 % de descuento adicional.
Declarar 2 variables e inicializar y determinar el valor final  de cada una */

var arroz_roax1b =2000;
var cerveza_coronaxund = 5000;



var productocliente = "arroz_roax1b"; 
var cantidadunidaddescliente= 4;
var costoproductocliente = 0;

var inicialproducto1 = productocliente.slice(0,7);

    if (productocliente === "cerveza_coronaxund") {
        var costocerveza = cerveza_coronaxund * cantidadunidaddescliente;
        cerveza_coronaxund = cerveza_coronaxund * .95;
        var auxcostosindescuento2 = cantidadunidaddescliente * cerveza_coronaxund;
        if (costocerveza >= 20000) {
            cerveza_coronaxund = cerveza_coronaxund * .95;
        }
        console.log("costo Total:" + cerveza_coronaxund + cantidadunidaddescliente);
    }
    else if (productocliente === "arroz_roax1b") {
        console.log("costo Total:" + cantidadunidaddescliente *  arroz_roax1b);
    }
else {
    console.log("selecione un producto valido");

}
