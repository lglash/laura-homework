//this is the log message to console to verify that JS file is loaded//

 console.log ('javascript file linked to index.html');

 //this below is for JS to execute only after all elements have rendered on the page//
 $(document).ready(function(){
 	//this below is the log message to the console to verify JQuery has loaded//
 	console.log('jquery is loaded');


$('#faq-1').click(revealAnswer1); 
	
function revealAnswer1() {

	$('answer-1').toggle({
		'easing' : 'swing'
 	
});

}

});
