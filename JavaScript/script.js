const input = document.querySelector("#agrega-text");
const output = document.querySelector(".mostrar");
const boton = document.querySelector("#btn-encripta");
const botondes = document.querySelector("#btn-desencripta");
const botonCopiar = document.querySelector("#btn-copia");
const formulario = document.getElementById("formulario");
input.focus(); //Para apuntar a un input/textarea.

function encripta (){
    let agrega = input.value; //Sacar el valor del input con el id agrega-texto, cuando pones. value, estas accediendo al valor.
    let encriptacion = agrega.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat") //Se esta creando la variable para reemplazar las vocales de la plabra
    output.value = encriptacion;
}

function desencripta(){
    let agrega = input.value;
    let desencriptacion = agrega.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    output.value = desencriptacion ;
}

function copyToClipBoard() {
    output.select();
    document.execCommand('copy');
    
}
window.onbeforeunload = function() { //Esta función se activa cuando se reseta la pagina
    formulario.reset(); //Esto  sirve para limpiar el formulario.
   
}; 


boton.onclick = encripta;
botondes.onclick = desencripta;
botonCopiar.onclick = copyToClipBoard;
