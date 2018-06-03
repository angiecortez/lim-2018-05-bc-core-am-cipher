window.cipher = {
  encode : (string, offset) => {
    let wordCif = "";
    // string = string.toUpperCase();
    for(let i = 0; i < string.length; i++)// for(let blabla of string)
    {
      let textChar = string.charCodeAt(i);
      if(textChar >= 65 && textChar <= 90){
        wordCif += String.fromCharCode((textChar - 65 + parseInt(offset))%26+65);
       }
      else if (textChar >= 97 && textChar <= 122) {
        wordCif  += String.fromCharCode((textChar - 97 + parseInt(offset))%26+97);
        }
      else {
        wordCif += String.fromCharCode(textChar);
      }
    }
   //retornando el valor
   return wordCif;
 },

//funcion Decipher
  decode : (string, offset) => {
    let wordNoCif = "";
    // string = string.toUpperCase();
    for(let i = 0; i < string.length; i++){
      let textChar = string.charCodeAt(i);
      if(textChar >= 65 && textChar <= 90) {
      wordNoCif  += String.fromCharCode((textChar + 65 - parseInt(offset))%26+65);
      }
      else if (textChar >= 97 && textChar <= 122) {
      wordNoCif += String.fromCharCode((textChar + 97 - parseInt(offset)-12)%26+97);
        }
      else  {
        wordNoCif += String.fromCharCode(textChar);
      }
    }
  return wordNoCif;
},

  // createCipherWithOffset : (offset) => {
  //   let cipherWithOffset = {
  //     encode : (string) => cipher.encode(string,offset),
  //
  //     decode : (string) => cipher.decode(string,offset)
  //   }
  // return cipherWithOffset;
  // }

};
