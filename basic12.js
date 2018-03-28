// Falsy Bouncer

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(item){
    return item;
  });
  //return arr;
}

bouncer([7, "ate", "", false, 9]);