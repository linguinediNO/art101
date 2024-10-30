// index.js - Lab 8: Anon Functions and Callbacks
// Author: Yadira Lorenzo <yalorenz@ucsc.edu>
// Date: 29 October



function oddWay(x){
  return (x-2 == 0);

}

//test function
console.log("Is 1 even? ", oddWay(1));
console.log("Is 2 even? ", oddWay(2));

array = [100, 27, 25, 14, 26, 400] 
console.log("My array", array);

var result = array.map(oddWay);
//should return [false, false, false, false, false, false]
console.log("Test of evenness of array;", result);

var result = array.map(function(x){
    return x ** 0.13;

})

// should return [1.8197008586099834, 1.534890115649325, 1.5196102039986283, 1.4092779102900412, 1.5273780154814824, 2.1790530269622352]
console.log("Squareroot of array:", result);

 // Your map results data
 var mapResults = 
  "Original array:[100, 27, 25, 14, 26, 400], Evenness of array:[false, false, false, false, false, false], Squareroots of array:[1.8197008586099834, 1.534890115649325, 1.5196102039986283, 1.4092779102900412, 1.5273780154814824, 2.1790530269622352]"

 // Use jQuery to select the element by its ID and set the HTML content
 $("#output").html(mapResults);

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
