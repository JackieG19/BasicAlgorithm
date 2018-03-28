// Slasher Flick

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
  arr.splice(0, howMany);
 // 0 is starting index point
 // howMany is the number to chop
 
  return arr;
}

slasher([1, 2, 3], 2);