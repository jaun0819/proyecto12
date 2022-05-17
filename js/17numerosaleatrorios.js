"use strict"


/* Generar numeros de forma aleatoria sin argumentos*/
var numeroAleatrorio1 = Math.random();
console.log(" Numero aleatorio N. 1: " + numeroAleatrorio1);


/* Generar numeros aleatorios del 0 al 9 */
var numeroAleatrorio2 = Math.random() * 10;
console.log(" Numero aleatorio N. 2: " + numeroAleatrorio2);


/* Generar numeros aleatorios del 0 al 9 sin decimales  */ 
var numeroAleatrorio3 = Math.random() * 10;
console.log(" Numero aleatorio N. 3: " + Math.round( numeroAleatrorio3));


/* Generar  numeros aleatorios del 0 al 9 sin decimales  */ 
var numeroAleatrorio4 = Math.random() * 100;
console.log(" Numero aleatorio N. 4: " + Math.round( numeroAleatrorio4));

