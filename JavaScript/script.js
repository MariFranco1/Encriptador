var input = document.querySelector("#agrega-text");
input.focus(); //Para apuntar a un input/textarea.

function encripta (){
    var agrega = document.querySelector("#agrega-text").value; //Sacar el valor del input con el id agrega-texto, cuando pones. value, estas accediendo al valor.
    var encriptacion = agrega.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat") //Se esta creando la variable para reemplazar las vocales de la plabra
    document.querySelector(".mostrar").value = encriptacion;
    // document.querySelector("#agrega-text");
}

function desencripta(){
    var agrega = document.querySelector("#agrega-text").value;
    var desencriptacion = agrega.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    document.querySelector("#mostrar-text").value = desencriptacion ;
    // document.querySelector("#agrega-text");
}

function copyToClipBoard() {
    var content = document.getElementById('mostrar-text');
    content.select();
    document.execCommand('copy');
    
}
window.onbeforeunload = function() { //Esta función se activa cuando se reseta la pagina
    var campo1 = document.getElementById("formulario").reset(); //Esto  sirve para limpiar el formulario.
   
}; 

var boton = document.querySelector("#btn-encripta");
boton.onclick = encripta;

var botondes = document.querySelector("#btn-desencripta");
botondes.onclick = desencripta;

var botonCopiar = document.querySelector("#btn-copia");
botonCopiar.onclick = copyToClipBoard;