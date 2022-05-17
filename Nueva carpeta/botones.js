"use strict"
let nombreactual ="";
function cambiarnombre(){
    let nuevoarendiz = "juan"
    nombreactual=document.getElementById("nombreaprendiz").innerHTML;
    if (nombreactual=== nuevoarendiz){
        mensajeusuario();
    }else{
        document.getElementById("nombreaprendiz").innerHTML=nuevoarendiz
    }
}
function retornarnombre(){
    let antiguonombre="julian";
   nombreactual= document.getElementById("nombreaprendiz").innerHTML;
    if(nombreactual===antiguonombre){
        mensajeusuario();
    }else{
        document.getElementById("nombreaprendiz").innerHTML=antiguonombre
    }
}
function mensajeusuario(){
    alert("El nombre ya fue cambiado con aterioridad")
}