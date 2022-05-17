var fraseusuario= prompt("ingrese texto");
var fraseusuario1= "";
var cantcaracteresfrase=fraseusuario.length;
if(cantcaracteresfrase > 50 ){
    fraseusuario=document.write("la frase supera los 50 caracteres");
 fraseusuario=console.log("la frase supera los 50 caracteres")
}else{
 document.write(fraseusuario1+"la frase no supera los 50 caracteres")
 console.log(fraseusuario1+"la frase no supera los 50 caracteres")
}