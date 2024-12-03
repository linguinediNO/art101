/*
  index.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
  Requirements:jQuery must be loaded for this script to work.
  Author: Yadira Lorenzo <yalorenz@ucsc.edu>
  Date: 2 December
*/

// Using the core $.ajax() method
// Define the API endoint
let endpoint = "https://api.nasa.gov/planetary/apod";

//Configure the AJAX request
let ajaxConfig = {
  url: endpoint, // API URL
  method: "GET", //HTTP method
  dataType: "json", // Payload type
  data: {
    api_key: "w8OceZfzrF8xEHfGcrDKAGDwljee9z6BcNHlvOzg", // API token
    count: 1,
  },
  success: function(data) { // Success handler
    // get first element of array
    let record = data [0];
    // console.log(data);
    // add fields to output w append
    $("#output").append("<h2>" + record.title);
    //display data.url
    $("#output").append("<img src='" + record.url + "' >");
    $("#output").append("<p>" + record.explanation); 
  },
  error: function(xhr, stauts, error) { // Error handle
    console.error(error);
  }
};
  
$("#output").append("<h1>XKCD comic NOT!!");
    
// Send the AJAX request
$.ajax(ajaxConfig);
