$(document).ready(function(){
	// init controller
	var controller = new ScrollMagic.Controller();

	var divs = ["#intro", "#diversity", "#straight-a-grade-a", "#campus-culture", "#growing", "#self-care", "#what-can-we-do"];
	// console.log(divs.length);

	var height_intro = $("#intro").height();
	var height_diversity = $("#diversity").height();
	var height_straight = $("#straight-a-grade-a").height();
	var height_campus = $("#campus-culture").height();
	var height_grow = $("#growing").height();
	var height_care = $("#self-care").height();
	var height_what = $("#what-can-we-do").height();

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#intro",  duration: height_intro})
		.setClassToggle("#sub-one", "selected") // add class toggle
		// .addIndicators() // add indicators (requires plugin)

		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#diversity", duration: height_diversity})
		.setClassToggle("#sub-two", "selected") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#straight-a-grade-a", duration: height_straight})
		.setClassToggle("#sub-three", "selected") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#campus-culture", duration: height_campus})
		.setClassToggle("#sub-four", "selected") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#growing", duration: height_grow})
		.setClassToggle("#sub-five", "selected") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#self-care", duration: height_care})
		.setClassToggle("#sub-six", "selected") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#what-can-we-do", duration: height_what})
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