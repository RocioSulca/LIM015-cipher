import cipher from './cipher.js';

document.getElementById("code").addEventListener("click", coded/*(1,2)*/);
function coded(/*a,b*/) {
  document.getElementById("1screen").style.display = "none";
  document.getElementById("2screen").style.display = "block";
  /*alert(a);
  alert(b);*/
}

document.getElementById("decode").addEventListener("click", decoded);
function decoded() {
  document.getElementById("1screen").style.display = "none";
  document.getElementById("3screen").style.display = "block";
}
document.getElementById("back1").addEventListener("click", back);
function back() {
  document.getElementById("2screen").style.display = "none";
  document.getElementById("1screen").style.display = "block";
}
document.getElementById("back2").addEventListener("click", toBack);
function toBack() {
  document.getElementById("3screen").style.display = "none";
  document.getElementById("1screen").style.display = "block";
}
document.getElementById("clean").addEventListener("click", clean);
function clean() {
  textToCode.value = ""
  codedText.innerHTML = ""
  number.value = ""
}



let textToCode = document.getElementById("textToCode");
let codedText = document.getElementById("codedText");
let number = document.getElementById("numero");

document.getElementById("codify").addEventListener("click", cambiar);
function cambiar() {
  //Moviendo el valor de un input a otro mediante el boton cambiar
  let codificando = textToCode.value;
  document.getElementById("codedText").value = codificando;

  cipher.encode(number.value, textToCode.value);
  codedText.innerHTML= cipher.cambiandoUnaLetra;
}






/*let unaLetra= (parseInt(asciiNumber) - 65 + 3) %26 + 65
let cambiandoUnaLetra = String.fromCharCode(unaLetra)
codedText.innerHTML= cambiandoUnaLetra
}*/


/*let mayuscula= document.getElementById("textToCode").addEventListener("keyup", mayuscula)
function mayuscula() {
  this.value = this.value.toUpperCase();
}*/

console.log(cipher);
