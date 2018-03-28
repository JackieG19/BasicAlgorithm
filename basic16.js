// Caesars Cipher

function rot13(str) { // LBH QVQ VG!
  var codeArr = str.split(""); // string to array
  var deCodeArr = []; // results will go here
  
  // create alphabet character array that goes pass Z by 13 letters starting with A
  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  
  for(var i=0; i<codeArr.length; i++){
    // goes thru input string array
    if(alphabet.indexOf(codeArr[i])===-1){
      // if current value isn't in alphabet
      deCodeArr.push(codeArr[i]);
      // add that value to the deCodeArr array
    }
    else{
      for(var h=0; h<alphabet.length; h++){
        // goes thru the alphabet
        if(codeArr[i]===alphabet[h]){
          // if current value in array is equal to alphabet
          deCodeArr.push(alphabet[h + 13]);
          // add the value to the deCodeArr + 13 index shifts the alphabet
        }
      }
    }
  }
  return deCodeArr.join("");//str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

