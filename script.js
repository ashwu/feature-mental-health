$(document).ready(function(){
	// init controller
	var controller = new ScrollMagic.Controller();

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#intro"})
		.setClassToggle("#sub-one", "selected") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#diversity"})
		.setClassToggle("#sub-two", "selected") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#straight-a-grade-a"})
		.setClassToggle("#sub-three", "selected") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#campus-culture"})
		.setClassToggle("#sub-four", "selected") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#growing"})
		.setClassToggle("#sub-five", "selected") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#self-care"})
		.setClassToggle("#sub-six", "selected") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#what-can-we-do"})
		.setClassToggle("#sub-seven", "selected") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);

	
	var stickyNavTop = $('#sidebar').offset().top;
	 
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop(); 
		if (scrollTop > stickyNavTop) { 
	   		$('#sidebar').addClass('sticky');
		} else {
	    	$('#sidebar').removeClass('sticky'); 
		}
	};
 
	stickyNav();
 
	$(window).scroll(function() {
	    stickyNav();
	});


});