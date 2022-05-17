"use strict"


/* Convercion implicita  */
var num1 = "12";
var num2 = 4;
console.log(" el resultado de la suma es: " + (num2 + num1));
console.log(" el resultado de la resta es: " + (num2 - num1));
console.log(" el resultado de la multiplicacion es: " + (num2 * num1));
console.log(" el resultado de la division es: " + (num2 / num1));

/*Convertir de forma explicita */ 
var num1Int = parseInt(num1);
console.log(" el resultado de la suma es: " + (num2 + num1Int));

/* Convertir a string cadena de texto o tambien un varchar  */
var num3 =12;
var num4 =12;
var num3Str = num3.toString();
var num4Str = num4.toString();
console.log("El resultado de la suma es:" + (num3 + num4));
console.log("El resultado de la concatenacion es:" + num3Str + num4Str);