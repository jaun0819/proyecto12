"use strict"

var nombreEncontrado = false;
var nombreBuscar = "JUAN";
    var lstNombres = [];
    lstNombres.push("PEDRO");
    lstNombres.push("JUAN");
    lstNombres.push("MARIA");

    for(var i=0;i<lstNombres.length;i++){
        if(lstNombres[i] == nombreBuscar){
            nombreEncontrado = true;
           break;
        }
    }if(nombreEncontrado){
        console.log('NOMBRE ENCONTRADO!!!!!!!');
    }else{
        console.log('NOMBRE NO ENCONTRADO:(');
    }
