//this is the log message to console to verify that JS file is loaded//

 console.log ("javascript file linked to index.html");

 //this below is for JS to execute only after all elements have rendered on the page//
 $(document).ready(function(){
 	//this below is the log message to the console to verify JQuery has loaded//
 	console.log("jquery is loaded");



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

 $("#faq-1").click(showAnswer1);
 $("#faq-2").click(showAnswer2);
 $("#faq-3").click(showAnswer3);
 

function showAnswer1() {
    var toggleButton = $("#faq-1");
    var findAnswer = $(toggleButton).parent().find(".answer");

    if ($(findAnswer).data("state") === "hidden") {
      $(findAnswer).data("state", "show");
      $(findAnswer).show();

    } else {
      $(findAnswer).data("state", "hidden");
      $(findAnswer).hide();
      

    }
  }

function showAnswer2() {
    var toggleButton = $("#faq-2");
    var findAnswer = $(toggleButton).parent().find(".answer");

    if ($(findAnswer).data("state") === "hidden") {
      $(findAnswer).data("state", "show");
      $(findAnswer).show();
      
    } else {
      $(findAnswer).data("state", "hidden");
      $(findAnswer).hide();

    }
  }

function showAnswer3() {
    var toggleButton = $("#faq-3");
    var findAnswer = $(toggleButton).parent().find(".answer");

    if ($(findAnswer).data("state") === "hidden") {
      $(findAnswer).data("state", "show");
      $(findAnswer).show();

    } else {
      $(findAnswer).data("state", "hidden");
      $(findAnswer).hide();

    }
  }

  //CONTACT FORM TO POP UP

  //my variables: 
var modal = $('#myModal'); //the actual pop up form
var btn = $("#myBtn"); //the button which opens the form
var span = $(".close")[0]; // the 'X' which closes the form

// open form when user clicks on the button
btn.onclick = function() {
    modal.style.display = "block";
}

// close form When user clicks on 'X'
span.onclick = function() {
    modal.style.display = "none";
}


   

//CONTACT FORM - PARSLEY VALIDATION

  // bind parsley to the form
        $("#parsley-form").parsley();

        // on form submit
        $("#parsley-form").on('submit', function(event) {
            // validate form with parsley.
            $(this).parsley().validate();

            // if this form is valid
            if ($(this).parsley().isValid()) {
                
            $('.bs-callout-info').removeClass('hidden');
            $('.bs-callout-warning').addClass('hidden');

        } else {
          //if this form contains errors
           $('.bs-callout-info').addClass('hidden');
            $('.bs-callout-warning').removeClass('hidden');
        }
  
});
        });

