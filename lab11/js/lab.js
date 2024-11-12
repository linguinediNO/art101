/*
  index.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
  Requirements:jQuery must be loaded for this script to work.
  Author: Yadira Lorenzo <yalorenz@ucsc.edu>
  Date: 11 November
*/

// Sorts the characters of a string in alphebtical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function() {
  // get value of input field
  const text = $("#userInput").val();

  // now let's sort it
  userNameSorted = sortString(text);

  // append a new div to our output div
  $("#output").html('<div class="userText"><p>' + userNameSorted + '</p></div>');
  // <== also changed 'input to 'userNameSorted'});
  });