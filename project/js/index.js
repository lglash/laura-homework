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



  $("dd").filter(":nth-child(n+4)").addClass("hide");

// On "mouseenter" slide down current dd, slideup all other dd "siblings" 
$("dl").on("mouseenter", "dt", function(){
  $(this).next().slideDown(200).siblings("dd").slideUp(200);
});


//CONTACT FORM TO POP UP
var modal = $("#myModal"); //the actual pop up form
var btn = $("#myBtn"); //the button which opens the form
var span = $(".close")[0]; // the 'X' which closes the form


$("#myBtn").click(showModal);
$(".close").click(closeModal);

function showModal() {
    $("#myModal").css("display","block");
    
    }

function closeModal() {
    $("#myModal").css("display","none");
    
    }   

/////CONTACT FORM - PARSLEY VALIDATION

  // bind parsley to the form
        $("#parsley-form").parsley();

        $("#parsley-form").on('submit', function(event) {
    event.preventDefault();
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

