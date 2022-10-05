$(function() {
	$("section.block-dyna-1 .services-list").delegate("a", "click", function() {
		nextValue = $(this).children().attr("id");
		$("section.block-dyna-1 .services-list a .active").removeClass("active");
		$(this).children().addClass("active");
		
		$("section.block-dyna-1 .services-list .detail.active").removeClass("active");
		$("section.block-dyna-1 .services-list .detail#" + nextValue).addClass("active");
	});
});