"use strict"

function validarInfo(nombre){
    let informacionn = document.getElementById(nombre).value;

    if (informacionn === ""){
        alert("La informacion es un dato obligatorio.");
    }
    else{
        alert("¡¡La informacion ha sido enviada con exito!!");
    }
}
