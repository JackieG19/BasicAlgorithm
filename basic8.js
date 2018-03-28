// Repeat a string repeat a string

function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num < 0){
    str = "";
    return str;
  }
  else{
    var conCat = str.repeat(num);
    return conCat;
  }
}

repeatStringNumTimes("abc", 3);