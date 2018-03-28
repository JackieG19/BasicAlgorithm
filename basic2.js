// Factorialize a Number 

function factorialize(num) {
  var myVar = 1;
  for (var i = 1; i < num+1; i++) {
    myVar *= i;
    console.log(i);
    console.log(myVar);
    }
  return myVar;
}

factorialize(5);

