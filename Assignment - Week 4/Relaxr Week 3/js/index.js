//this is the log message to console to verify that JS file is loaded//

 console.log ('javascript file linked to index.html');

 //this below is for JS to execute only after all elements have rendered on the page//
 $(document).ready(function(){
 	//this below is the log message to the console to verify JQuery has loaded//
 	console.log('jquery is loaded');

// Add click event listeners to "Read more >" of each post
  $('#more-1').click(showMorePost1);
  $('#more-2').click(showMorePost2);


function showMorePost1() {
    var toggleButton = $('#more-1');
    var postExerpt = $(toggleButton).parent().find('.exerpt');

    if ($(postExerpt).data('state') === 'hidden') {
      // change data-state attribute value to 'show'
      $(postExerpt).data('state', 'show');

      // reveal exerpt with animation (try with show() and slideDown())
      $(postExerpt).show();
      // $(postExerpt).slideDown();

      // change the text to "Read less"
      $(toggleButton).text('Read less <');
    } else {
      // change data-state attribute value to 'hidden'
      $(postExerpt).data('state', 'hidden');

      // hide exerpt with animation (try with hide() and slideUp())
      $(postExerpt).hide();
      // $(postExerpt).slideUp();

      // change text back to "Read more"
      $(toggleButton).text('Read more >');
    }
  }
 /**
   * Basically the same function as showMorePost1
   */
  function showMorePost2() {
    var toggleButton = $('#more-2');
    var postExerpt = $(toggleButton).parent().find('.exerpt');

    if ($(postExerpt).data('state') === 'hidden') {
      $(postExerpt).data('state', 'show');
      $(postExerpt).slideDown();
      $(toggleButton).text('Read less <');
    } else {
      $(postExerpt).data('state', 'hidden');
      $(postExerpt).slideUp();
      $(toggleButton).text('Read more >');
    }
  }
});







