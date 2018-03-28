// Truncate a string

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num>3){
    if(str.length>num){
      str = str.slice(0, num-3);
      // slice the string 3 short of number
      str = str.concat("...");
      // add...to end of string
    }
    return str;
  }
  else{
    str = str.slice(0, num);
    // slice string
    str = str.concat("...");
    // concat to the end
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

