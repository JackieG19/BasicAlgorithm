// Where do I belong

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var count = 0;
  // counter variable for results
  for(var i=0; i<arr.length; i++){
    if(arr[i]-num<0){
      // if arr value - number return negative it is a smaller number
      count = count+1;
    }
  }
  return count; //num;
}

getIndexToIns([40, 60], 50);