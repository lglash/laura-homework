//this is the log message to console to verify that JS file is loaded//

 console.log ('javascript file linked to index.html');

 //this below is for JS to execute only after all elements have rendered on the page//
 $(document).ready(function(){
 	//this below is the log message to the console to verify JQuery has loaded//
 	console.log('jquery is loaded');

//TEAM//

//direct children of directors (top 3 images). When hovering over each image, toggle between showing hidden div/hiding it.
  $(".directors > div").each( function() {
    $(this).hover(function() {
      $(this).toggleClass("hover");
    });
    
  });
//direct children of minions (bottom 3 images). When hovering over each image, toggle between showing hidden div/hiding it.
   $(".minions > div").each( function() {
    $(this).hover(function() {
      $(this).toggleClass("hover");
    });
    
  });

//FAQs//



  
});