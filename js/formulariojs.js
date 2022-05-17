let nodetable=undefined;

function registrarinfo(){
    if(validarformulario()){
    crearencabezado();
    cargarproducto();
    limpiar();
    }
}

function crearencabezado(){
    if(!document.getElementById("table-content")){
     nodetable=document.createElement("table"); 
    let contenedor= document.getElementById("table-js");
    contenedor.appendChild(nodetable);
    nodetable.setAttribute("id","table-content");

    let nodeTR1= document.createElement("tr");
    nodetable.appendChild(nodeTR1);

    let nodeTH1= document.createElement("th");
    nodeTR1.appendChild(nodeTH1);
    let nodeTH2= document.createElement("th");
    nodeTR1.appendChild(nodeTH2);
    let nodeTH3= document.createElement("th");
    nodeTR1.appendChild(nodeTH3);
    let nodeTH4= document.createElement("th");
    nodeTR1.appendChild(nodeTH4);

    let nodeTH1Txt= document.createTextNode(" Codigo ");
    nodeTH1.appendChild(nodeTH1Txt);
    let nodeTH2Txt= document.createTextNode(" Descripcion ");
    nodeTH2.appendChild(nodeTH2Txt);
    let nodeTH3Txt= document.createTextNode(" Valor unitario ");
    nodeTH3.appendChild(nodeTH3Txt);
    let nodeTH4Txt= document.createTextNode(" Stock ");
    nodeTH4.appendChild(nodeTH4Txt);


    nodetable.setAttribute("class","table-style");
  }
}


  function cargarproducto(){  
    let TrProducto = document.createElement("tr");
    nodetable.appendChild(TrProducto);
    let Trdescrip= document.createElement("tr");
    nodetable.appendChild(Trdescrip);
    let Trvalor = document.createElement("tr");
    nodetable.appendChild(Trvalor);
    let Trstock = document.createElement("tr");
    nodetable.appendChild(Trstock);

    let TdCodigo = document.createElement("td");
    TrProducto.appendChild(TdCodigo);
    let Tddescrip = document.createElement("td");
    Trdescrip.appendChild(Tddescrip);
    let Tdvalor= document.createElement("td");
    Trvalor.appendChild(Tdvalor);
    let Tdstock = document.createElement("td");
    Trstock.appendChild(Tdstock);


    let inputCodigo = document.getElementById("codigo").value;
    let TextCodigo = document.createTextNode(inputCodigo);
    TdCodigo.appendChild(TextCodigo);
    let inputdescrip = document.getElementById("descrip").value;
    let Textdescrip = document.createTextNode(inputdescrip);
    Tddescrip.appendChild(Textdescrip);
    let inputvalor = document.getElementById("valor").value;
    let Textvalor = document.createTextNode(inputvalor);
    Tdvalor.appendChild(Textvalor);
    let inputstock = document.getElementById("stock").value;
    let Textstock = document.createTextNode(inputstock);
    Tdstock.appendChild(Textstock);

  }
  function limpiar(){
    document.getElementById("codigo").value = "";
    document.getElementById("descrip").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("stock").value = "";
  }
  function validarformulario(){
    if(document.getElementById("codigo").value.trim() == ""){
        alert("por favor ingrese el codigo del producto");
        document.getElementById("codigo").focus();
        return false;
    }
    if(document.getElementById("descrip").value.trim() == ""){
        alert("por favor ingrese la descripcion del producto");
        document.getElementById("descrip").focus();
        return false;
    }
    if(document.getElementById("valor").value.trim() == ""){
        alert("por favor ingrese el valor del producto");
        document.getElementById("valor").focus();
        return false;
    }
    if(document.getElementById("stock").value.trim() == ""){
        alert("por favor ingrese el stock del producto");
        document.getElementById("stock").focus();
        return false;
    }
    return true;
  }
