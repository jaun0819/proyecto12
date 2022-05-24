const pueblo = document.getElementById("pueblo");
const avion = document.getElementById("avion");
const montana = document.getElementById("montana");
const botonAdelante = document.getElementById("botonAdelante");
const botonAtras = document.getElementById("botonAtras");
const circulo1 = document.getElementById("circulo1");
const circulo2 = document.getElementById("circulo2");
const circulo3 = document.getElementById("circulo3");

botonAdelante.addEventListener("click", function() {
    if(avion.classList.contains("avion-visible")){
    avion.classList.add("avion-oculta");
    avion.classList.remove("avion-visible");
    pueblo.classList.add("pueblo-visible");
    pueblo.classList.remove("pueblo-oculta-derecha");
    circulo1.classList.add("color-claro");
    circulo1.classList.remove("color-oscura");
    circulo2.classList.add("color-oscura");
    circulo2.classList.remove("color-claro");

}else{
    pueblo.classList.add("pueblo-oculta-izquierda");
    pueblo.classList.remove("pueblo-visible");
    montana.classList.add("montana-visible");
    montana.classList.remove("montana-oculta");
    circulo2.classList.add("color-claro");
    circulo2.classList.remove("color-oscura");
    circulo3.classList.add("color-oscura");
    circulo3.classList.remove("color-claro");
}
});

botonAtras.addEventListener("click", function() {
   if(montana.classList.contains("montana-visible")) {
    montana.classList.add("montana-oculta");
    montana.classList.remove("montana-visible");
    pueblo.classList.add("pueblo-visible");
    pueblo.classList.remove("pueblo-oculta-izquierda");
    circulo3.classList.add("color-claro");
    circulo3.classList.remove("color-oscura");
    circulo2.classList.add("color-oscura");
    circulo2.classList.remove("color-claro");

}else{

    pueblo.classList.add("pueblo-oculta-derecha");
    pueblo.classList.remove("pueblo-visible");
    avion.classList.add("avion-visible");
    avion.classList.remove("avion-oculta");
    circulo2.classList.add("color-claro");
    circulo2.classList.remove("color-oscura");
    circulo1.classList.add("color-oscura");
    circulo1.classList.remove("color-claro");
}
});