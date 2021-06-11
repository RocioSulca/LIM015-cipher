const cipher = {
  encode: function (offsetC, stringC) {
    if (offsetC === null || offsetC === 0) {
      throw new TypeError();
    }
    // ASCII
    let letraC;
    let cadenaC = ""
    for (let i = 0; i < stringC.length; i++) {
      let ascii = stringC[i].charCodeAt(0);
      if (ascii >= 65 && ascii <= 90) {
        let letra = (ascii - 65 + parseInt(offsetC)) % 26 + 65;
        letraC = String.fromCharCode(letra);
      } else if (ascii >= 97 && ascii <= 122) {
        let letra = (ascii - 97 + parseInt(offsetC)) % 26 + 97;
        letraC = String.fromCharCode(letra);
      }
      for (let i = 0; i < letraC.length; i++) {
        cadenaC += letraC
      }
    }
    return cadenaC
  },

  decode: function (offsetD, stringD) {
    if (offsetD === null || offsetD === 0) {
      throw new TypeError();
    }
    // ASCII
    let letraD;
    let cadenaD = ""
    for (let i = 0; i < stringD.length; i++) {
      let asciiD = stringD[i].charCodeAt(0);
      if (asciiD >= 65 && asciiD <= 90) {
        let letras = (asciiD + 65 - parseInt(offsetD)) % 26 + 65;
        letraD = String.fromCharCode(letras);
      } else if (asciiD >= 97 && asciiD <= 122) {
        let letras = (asciiD + 97 - parseInt(offsetD)) % 26 + 97;
        letraD = String.fromCharCode(letras);
        console.log(letras)
      }
      for (let i = 0; i < letraD.length; i++) {
        cadenaD += letraD
      }
    }
    return cadenaD
  }
};

export default cipher;