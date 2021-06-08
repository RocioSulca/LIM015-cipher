const cipher = {
 encode: function(offsetC,stringC){
     // Convertiendo los numeros a codigo ASCII 
  let asciiNumber = [];
  
  for (let i = 0; i < stringC.length; i++) {
    asciiNumber[i] = stringC.charAt(i).charCodeAt(0);
  }
  console.log(asciiNumber);

 //Entrando dentro del array para poder sumarle el desplazamiento offset
  for (let j = 0; j < asciiNumber.length; j++) {
    let unaLetra = (asciiNumber[j] - 65 + parseInt(offsetC)) % 26 + 65;
    let cambiandoUnaLetra = String.fromCharCode(unaLetra);
    //codedText.innerHTML= cambiandoUnaLetra;
    console.log(cambiandoUnaLetra);
  }
  //return asciiNumber;
 }
};




export default cipher;