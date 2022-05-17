"use strict"


function mostrarformulario() {
    let fromchat =document.getElementById("fromchat");
    fromchat.classList.add("form-chat-visible")
}

function  ocultarformulario(){
    let from = document.getElementById("fromchat");
    from.classList.remove("form-chat-visible");
}       

const lupa = document.getElementById("idLupa");
const menu1 = document.getElementById("idHeader");
const menu2 = document.getElementById("idhearder2");
const cerrarMenu2 = document.getElementById("cerrarcontenedor2");


lupa.addEventListener("click",function(){
    menu1.classList.remove("encabezado");
    menu1.classList.add("encabezadoInvisible");
    menu2.classList.add("encabezado2");
    menu2.classList.remove("encabezado2invisible");
})

cerrarMenu2.addEventListener("click",function(){
    menu2.classList.remove("encabezado2");
    menu2.classList.add("encabezado2invisible");
    menu1.classList.add("encabezado");
    menu1.classList.remove("encabezadoInvisible");
})