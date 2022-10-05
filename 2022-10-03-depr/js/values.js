$(document).ready(myfunction);
$(window).on('resize', myfunction);

function myfunction() {
	var maxHeight = 0;
	$(".values-text.active, .values-text").each(function() {
		if ($(this).height() >= maxHeight) {
			maxHeight = $(this).height();
		}
	});

	$(".values-text").height(maxHeight);
}