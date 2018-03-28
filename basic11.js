// Mutations

function mutation(arr) {
  var wordA = arr[0].toLowerCase();
  var wordB = arr[1].toLowerCase();
  // lower case both string inputs for comparison purposes
  
  for(var i=0; i<wordB.length; i++){
    // goes thru wordB letters to see if they are in wordA
    var value = wordA.indexOf(wordB[i]);
    // value holder for charactor
    if(value===-1){
      return false;
      // -1 is the result meaning its not contained in wordA
    }
  }
  return true; //arr;
}

mutation(["hello", "hey"]);