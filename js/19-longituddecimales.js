"use strict"

/* Determinar cuantos decimales se mostraran */
var num1 = 2.56987458;
var num1Fix = num1.toFixed(2);
console.log(num1Fix);



/* Determinar cuantos decimales se mostraran sin redondear */

var num1Str = num1.toString();
var num1StrFix = num1Str[0] + num1Str[1] + num1Str[2] + num1Str[3];
console.log(num1StrFix);
console.log(parseFloat(num1StrFix));