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

 $('#faq-1').click(showAnswer1);
 $('#faq-2').click(showAnswer2);
 $('#faq-3').click(showAnswer3);
 $('#faq-4').click(showAnswer4);

function showAnswer1() {
    var toggleButton = $('#faq-1');
    var findAnswer = $(toggleButton).parent().find('.answer');

    if ($(findAnswer).data('state') === 'hidden') {
      $(findAnswer).data('state', 'show');
      $(findAnswer).show();

    } else {
      $(findAnswer).data('state', 'hidden');
      $(findAnswer).hide();
      

    }
  }

function showAnswer2() {
    var toggleButton = $('#faq-2');
    var findAnswer = $(toggleButton).parent().find('.answer');

    if ($(findAnswer).data('state') === 'hidden') {
      $(findAnswer).data('state', 'show');
      $(findAnswer).show();
      
    } else {
      $(findAnswer).data('state', 'hidden');
      $(findAnswer).hide();

    }
  }

function showAnswer3() {
    var toggleButton = $('#faq-3');
    var findAnswer = $(toggleButton).parent().find('.answer');

    if ($(findAnswer).data('state') === 'hidden') {
      $(findAnswer).data('state', 'show');
      $(findAnswer).show();

    } else {
      $(findAnswer).data('state', 'hidden');
      $(findAnswer).hide();

    }
  }
  
});