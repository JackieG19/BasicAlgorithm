// Find the Longest Word in a String

function findLongestWord(str) {
  var array = str.split(" ");
  // create an array of strings breaking up every space
  var word = '';
  // Temparay placeholder for longest string 
  for(var i=0; i<array.length; i++){
    if(word.length<array[i].length){
      word = array[i];
    }
  }
  // goes thru the array and compar word with currant string
  str = word;
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

