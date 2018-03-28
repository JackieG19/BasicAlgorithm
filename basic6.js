// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  var array = [];
  // create an empty array to fill later
  for(var i=0; i<arr.length; i++){
    var number = 0;
    // place holder to find large number
    for(var a=0; a<arr.length; a++){
      if(number<arr[i][a]){
        number = arr[i][a];
      }
    }
    // adds largesst number to new array
    array.push(number);
  }
  return array;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

