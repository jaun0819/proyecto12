const toyota1 =document.getElementById("toyota1");
const toyota3 =document.getElementById("toyota3");
const botonAde =document.getElementById("fechaD");


botonAde.addEventListener("click",function(){
    toyota1.classList.add("toyota1-oculta");
    toyota1.classList.remove("toyota1-visible");
    toyota3.classList.add("toyota3-visible");
    toyota3.classList.remove("toyota3-oculta");
    
})