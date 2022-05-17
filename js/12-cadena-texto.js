"use strict"
  /* Cambiando todo a Mayuscula  con el metodo toUpperCase*/
   var fraseMayuscula = "Esta es Una prueba en JAvasCRipt";/* camel case*/
   var fraseMayuscula =fraseMayuscula.toUpperCase();

   console.log(fraseMayuscula);

 /* Cambiando todo a miniscula con el metodo tolowerCase */
   var fraseMinuscula= "Esta es Una prueba en JAvasCRipt";/* camel case*/
   var fraseMinuscula =fraseMinuscula.toLowerCase();

   console.log(fraseMinuscula);


/* Cambiar todo en mayuscula y la primer letra a mayuscula  */
 
var frasesmayus= "esta es una pRUeba en JAvascriPT";
var auxprimletra= "";
var auxletrasrestantes="";
var auxtotalletrasrestantes="";

for(var i=0;i<=frasesmayus.length -1;i++){
if(i===0){
    auxprimletra= frasesmayus.charAt(0);
    auxprimletra= auxprimletra.toUpperCase();
}
else{
   auxletrasrestantes= frasesmayus.charAt(i);
   auxletrasrestantes=auxletrasrestantes.toLowerCase();
   auxtotalletrasrestantes= auxtotalletrasrestantes + auxletrasrestantes;
    
}
}
console.log(auxprimletra+auxtotalletrasrestantes)