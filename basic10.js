// Chunky Monkey

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var array = []; // add into empty array
  var count = 0;
  // while loop counter and increment index
  while(count < arr.length){
    array.push(arr.slice(count, count + size));
    // add to array values between current index and size
    count = count + size;
    // increase count
  }
  return array;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
