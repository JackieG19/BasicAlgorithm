// Confirm the Ending

function confirmEnding(str, target) {
 var start = str.length-(target.length);
  // var for just comparing end of string
  if(str.substr(start, str.length)===target){
    // compares end of a string with the target string 
    return true;
  }
  else{
    return false;
  }
}

confirmEnding("Bastian", "n");