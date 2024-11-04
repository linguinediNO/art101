/*
  index.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
  Requirements:jQuery must be loaded for this script to work.
  Author: Yadira Lorenzo <yalorenz@ucsc.edu>
  Date: 4 November
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge')>Make Special</button>");

// add a click listener to the challenge button
$("button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});

// add button to probelms section
$("#probelms").append("<button id='button-probelms'>Make Special</button>");

// add a click listener to the problems button
$("button-problems").click(function(){
 // now add (or subtract) the "special" class to the section
  $("#problems").toggleClass("special");
});

// add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the results button
$("button-cresultse").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#results").toggleClass("special");
});
