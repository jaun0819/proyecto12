class automovil {
    constructor (marca,modelo,anyo,imagen){
        this.marca=marca;
        this.modelo=modelo;
        this.anyo=anyo;
        this.imagen=imagen;
    }
}

let auto = new automovil("mazda","3",2020,"img/mazda3.jpg");
let auto2 = new automovil("ford","scape",2021);


function mostrarvehiulo(){
    llamarvehiculo(auto)
}
function llamarvehiculo(auto){
  


    let contenedorobjeto =document.createElement("div");
    let contenedorprincipal=document.getElementById("main-content");
    contenedorprincipal.appendChild(contenedorobjeto);
    contenedorobjeto.setAttribute("class","content-objeto");
  
    let img_auto=document.createElement("img");
    contenedorobjeto.appendChild(img_auto);
    img_auto.setAttribute("src", auto.imagen);
    
}


