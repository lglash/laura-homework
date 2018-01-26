//this is the log message to console to verify that JS file is loaded//
 //console.log ('javascript file linked to index.html');

 //this below is for JS to execute only after all elements have rendered on the page//
 $(document).ready(function(){
 	//this below is the log message to the console to verify JQuery has loaded//
 	console.log('jquery is loaded');



//PSEUDOCODE for dropdown menu:

//The different cities to appear on drop down menu
var cities = ["NYC", "SF", "LA", "ATX", "SYD"]; //this is my array, listing all the cities, just one name per place.

for (var i = 0; //assigning 0 for the loop to start counting on 0.
  i < cities.length; //this is my stop statement. the loop will run until the index is smaller than my let cities.
  i++) //every time that the loop runs it will add 1.
{
  //console.log(cities[cityIndex]); // here i put my function, specifying the target where I want my loop to show.
   $('#city-type').append('<option>' + cities[i] + '</option>');
   //I am asking to add the list on my array in between the option tags, after 'choose a city name'.
}




/*PSEUDOCODE for changing images when entering different names:
user types city on form (can be upper case, lower case, different names for one same place) - .toLowerCase
on click, 
IF text input value on form is:
New York" || "New York City" || "NYC" make the background of the page nyc.jpg  
"San Francisco" || "SF" || "Bay Area" make the background of the page sf.jpg 
"Los Angeles" || "LA" || "LAX" make the background of the page la.jpg 
"Austin" || "ATX" make the background of the page austin.jpg 
"Sydney" || "SYD" make the background of the page sydney.jpg 

The image has to stay in the background and not switch back.

ELSE, stick to default background image
*/

$('#submit-btn').click(function(){


//.toLowerCasex allows for city names to be entered in either upper or lower case. i do however need to specify names
//the text variations on the conditionals below
var answer = $('#city-type').val().toLowerCase();

if (answer === 'la' || answer === 'los angeles' || answer === 'lax'){
  $('body').removeClass().addClass('la');
//go to body and add a css style with the backgound image saved as specified.
//the return false is to avoid the browser to refresh the picture
  return false;

   } else if (answer === 'austin' || answer === 'texas' || answer === 'tx') {

  //added an 'alert ('awesome'); ' under each else if to see if each of them worked'

  $('body').removeClass().addClass('austin');

  return false;


   } else if (answer === 'nyc'|| answer === 'new york' || answer === 'new york city' ) {

  $('body').removeClass().addClass('nyc');
  
  return false;

//**these two below don't work and I cannot see why. Alerts don't work but don't see any errors on the console

  } else if (answer === 'San Francisco' || answer === 'sf' || answer === 'bay area') {

  $('body').removeClass().addClass('sf');

  return false;


  } else if (answer === 'sydney' || answer === 'syd') {

  $('body').removeClass().addClass('sydney');

  return false;
}

});

});


