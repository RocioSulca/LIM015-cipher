import cipher from './cipher.js';

document.getElementById("empezar").addEventListener("click", () =>{
  document.getElementById("1screen").style.display = "none";
  document.getElementById("2screen").style.display = "block";
});
document.getElementById("code").addEventListener("click", () =>{
  document.getElementById("2screen").style.display = "none";
  document.getElementById("3screen").style.display = "block";
});
document.getElementById("decode").addEventListener("click", () =>{
  document.getElementById("2screen").style.display = "none";
  document.getElementById("4screen").style.display = "block";
});
document.getElementById("back1").addEventListener("click", () =>{
  document.getElementById("3screen").style.display = "none";
  document.getElementById("2screen").style.display = "block";
});
document.getElementById("back2").addEventListener("click", () =>{
  document.getElementById("4screen").style.display = "none";
  document.getElementById("2screen").style.display = "block";
});
document.getElementById("clean1").addEventListener("click", () =>{
  textToCode.value = ""
  codedText.innerHTML = ""
  number1.value = ""
});
document.getElementById("clean2").addEventListener("click", () => {
  textToDecode.value = ""
  decodedText.innerHTML = ""
  number2.value = ""
});


const textToCode = document.getElementById("textToCode");
const codedText = document.getElementById("codedText");
const number1 = document.getElementById("numero1");

document.getElementById("codify").addEventListener("click", function() {       
    codedText.innerHTML = cipher.encode(number1.value, textToCode.value);
});

 
const textToDecode = document.getElementById("textToDecode");
const decodedText = document.getElementById("decodedText");
const number2 = document.getElementById("numero2");

document.getElementById("decodify").addEventListener("click", function() {
  decodedText.innerHTML = cipher.decode(number2.value, textToDecode.value);  
});


console.log(cipher);
