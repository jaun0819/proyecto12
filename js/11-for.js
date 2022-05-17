"use strict"

/*Generando un conteo del 1 al 10 */
for (var i = 1; i <=10; i++) {
    console.log( "Aprendiz N." + i);
}
/*/*Generando un consecutivo... 2 4 8 16 32 64 128 256 512 1024  TAREA */
for (var i = 0; i * 10; i++) {
    console.log( "Aprendiz N." + i);
}

/*Mostrando los elemetos de un arreglo */
/*Forma 1 de declarar e inicializar array*/
var aprendiz =new Array();
aprendiz[0] =1;
aprendiz[1] ="CC";
aprendiz[2] ="1007569237";
aprendiz[3] ="Karol Xiomara";
aprendiz[4] ="Rojas";
aprendiz[5] ="Calle 19 N. 5-23";
aprendiz[6] ="3177417087";
aprendiz[7] ="2002-18-03";
aprendiz[8] =true;

/* Forma 2 de declarar e Inicializar arrays */

var instructor = new Array(1, "CC", "18913287467", "Wilson","martinez", "calle 3 N. 3-43","312829837", "2003-23-44",true);

 /* Forma 3 de declarar e Inicializar arrays */

var titulados =[1, "2236074", "ADSI", "2021-01-24", "2022-98-23", "Sergio Jaramillo", true];
 
/* Mostrar los nombres y apellidos del aprendiz , del instructor y del lider del titulado */

 for (var i = 0; i <= aprendiz.length -1; ++i) {
     console.log(aprendiz[i]);
 }

 for (var i = 1; i <= instructor.length -1; ++i) {
     if(i === 5) {

     }
     else{
         console.log(instructor[i]);
   
 }
}
 