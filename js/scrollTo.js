$(".scrollTo").click(function() {
	var currentScroll = $(window).scrollTop();
	var destScroll = $(this).offset().top - 96;
	if (currentScroll != destScroll){
		$('html, body').animate({
			scrollTop: destScroll
		}, 375);
	}
});

//Fixed the issue where if you press a scrollTo 
//destination too many times it'll lock up scrolling for the user.