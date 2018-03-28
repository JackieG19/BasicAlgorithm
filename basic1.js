// Reverse a String

function reverseString(str) {
 var strArray = str.split("");
// console.log(strArray);
  //console.log("after split:");
  
  strArray.reverse();
  //console.log(strArray);
  //console.log("after reverse");
  
  var reversedStr = strArray.join("");
  //console.log(reversedStr);
  //console.log("joining");
  return reversedStr;
}

reverseString("hello");


//function reverseString(str) {
 // a= str.split("");
  //b= a.reverse();
  //c= b.join("");
  //return c;
//}

//reverseString("hello")

//function reverseString(str) {
 //return str.split("").reverse("").join("");}

function r(s){return s.split("").reverse("").join("");}
r("hello");

