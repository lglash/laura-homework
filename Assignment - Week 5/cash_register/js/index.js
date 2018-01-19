/* global $ */

$(document).ready (function)(){
  $('#entry').submit(addEntry);
//the below (event) is something that needs to be used with .submit. All of the below
//is necessary as is so memorise it or just copy and paste it when using submit! 
//to use with forms
//the name 'event' can be given any name you want
  $ function addEntry (event) {
event.preventDefault();


//var total = 0 initial value
var total = 0;

//to get the user's input values, which is another variable,
//we need to create a function first
var inputVal = $('#newEntry').val ();

//on enter, add input to var total
//parseInt forces a value to become a number
//total += inputVal;  

total =  total + parseFloat(inputVal);
total = total.toFixed(2);

//display input
//to display input we need to create new rows <tr> and cells <td> inside them
// to display the inputs the user adds
// in JS to create a new element which only exists in JS, not HTML, you can do the below:
//we create one td first, then a second td, then we combine them with '.append'
// so that they appear on to a row:
var cel1 = $('<td>');
var cel2 = $('<td>').text(inputVal);
var row = $('<tr>');

$(row).append (cell1, cell2);

$('#entries').append(row);

//now, to make the total update every time a new price is entered:
//we say '$' + total to add the dollar sign in front of the total.
$ ('#total').text('$' + total);


  }
}
























/*
$(document).ready(function () {
  $('#entry').submit(addEntry);

  // var total = 0 initial value
  var total = 0;

  function addEntry (e) {
    e.preventDefault();

    // get user input value
    var inputVal = $('#newEntry').val();
    inputVal = parseFloat(inputVal);

    // on enter, add input to var total
    total = parseFloat(total + inputVal);

    updatePage(inputVal);
  }

  function updatePage (chicken) {
    // print input
    var cell1 = $('<td>');
    var cell2 = $('<td>').text('$' + chicken.toFixed(2));
    var row = $('<tr>');

    $(row).append(cell1, cell2);
    $('#entries').append(row);

    // print var total + input
    var lineItem = '$' + total.toFixed(2);
    $('#total').text(lineItem);
    $('#newEntry').val('');
  }
});
*/


