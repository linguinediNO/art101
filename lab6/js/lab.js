// index.js - Lab 6: Arrays and Objects
// Author: Yadira Lorenzo <yalorenz@ucsc.edu>
// Date: 22 October

// Define Variblees
myTransport = ["Ford Mustang Base", "public bus", "my legs"];


// create an object for my main ride
myMainRide = {
    make: "Ford",
    model: "Mustang Base",
    color: "Black",
    year: 1967,
    // we can define a function within our object (called a method)
    // that uses the vaule of year above (using this.year)
    age: function () {
      return 2022 - this.year;
  }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
// this little trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'),"</pre>");
// Constants

// Functions

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
