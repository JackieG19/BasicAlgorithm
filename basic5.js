// Title Case a Sentence

function titleCase(str) {
  
  var word = str.toLowerCase().split(" ");
  
  for(var i=0; i<word.length; i++){
    
    var letter = word[i].split("");
    
    letter[0] = letter[0].toUpperCase("");
    
    word[i] = letter.join("");
  }
  return word.join(" "); //str;
}

titleCase("I'm a little tea pot");


/* Another way */ //-------------------------------


function titleCase(str) {
  var array = str.split(" ");
  // split one string into an array of string seperated by ''
  
  for(var i=0; array.length; i++){
   var placeholder = array[i];
    // place holder for original string
    
    var letter = placeholder.charAt(0).toUpperCase();
    // selects first letter and upper cases it
    
    placeholder = placeholder.slice(1, placeholder.length).toLowerCase();
    // selects the second letter to end of the word and lower case it
    
    array[i] = letter.concat(placeholder);
    // concats upper case first letter and rest of lower case word
  }
  str.array.join('');
  // takes array and sets arr to a single string
  return str;
}

titleCase("I'm a little tea pot");

