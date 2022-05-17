"use strict"

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

 console.log("Nombre del Aprendiz: ",aprendiz[3],aprendiz[4],"\n","Nombre del Instructor: ", instructor[3],instructor[4],"\n","Nombre del lider: ",titulados[5] );
  
 /* esta es  otra forma de imprimir  */
 console.log("Nombre del Aprendiz", "\n",aprendiz[3],aprendiz[4]);
 console.log("Nombre del Instructor", "\n", instructor[3],instructor[4]);

  /* Método length  */

   /* si la frase supera las 20 letras, informar al usuario  */
    var fraseUsuario = "los aprendices del titulado estan aprendiendo javascript";
    var cantCaracteresFrase =fraseUsuario.length;
        if(cantCaracteresFrase >20){
     console.log("La frase supera los 20 caracteres");
    }
