"use strict"
/* hora automatica del navegador para sacar la hora */
console.log("===fecha y hora del Navegador===");
var timeGMT = new Date();
console.log(" La fecha y Hora actual es: " + timeGMT);

/*  Obtener el dia actual de la semana  */

var fechaActual = new Date();
var diasemanaInt = fechaActual.getDay();
var diasemanaStr = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
console.log(" Dia de la semana: " + diasemanaStr[diasemanaInt]);

/* obtener Hora  dia, mes y año Actual */
var fechaActual = new Date();
var dia = fechaActual.getDay();
var mes = fechaActual.getMonth()+1 ;
var año = fechaActual.getFullYear();
console.log(" dia mes y año Actual : " + dia + "/"+mes +"/"+año );
var horaActual = fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" +
fechaActual.getSeconds();
console.log("Hora actual: " + horaActual);

/* obtener  milisegundos */
console.log("Milisegundos:" + fechaActual.getMilliseconds());

/* Establecer dias de diferencia  */
var newyear = new Date("january 1, 2022");
console.log(newyear.getTime());

var msCurrent = fechaActual.getTime();
console.log(msCurrent);

var diffMs = newyear.getTime() - fechaActual.getTime();
var diasDiff =  diffMs / (1000 * 60 * 60 * 24);
console.log(diasDiff);