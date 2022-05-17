"use strict"

function validarInfo(){
    let informacionn = document.getElementById("nombre").value;
     if (informacionn === ""){
        alert("El nombre es un dato obligatorio.");
    }

        let apellido = document.getElementById("apellido").value;
         if (apellido === ""){
          alert("El apellido es un dato obligatorio.");
        }

            let consulta = document.getElementById("consulta").value;
            if (consulta === ""){
             alert("La consulta es un dato obligatorio.");
       

    }else{
        alert("Informacion exitosa")
    }
}
