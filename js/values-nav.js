$(document).ready(function(){
    $(".values-content").stop(false,true).slideUp(10);
});

$(function() {
	$("section.wm-values a").click(function() {
		nextValue = $(this).attr("id");
		if($("section.wm-values a#" + nextValue).hasClass("active")
			&& $(".values-content #" + nextValue).hasClass("active")){
			$("section.wm-values a").removeClass("active");
			$(".values-content").stop().slideUp(300,function(){
				$(".values-content .active").removeClass("active");
			});
		}else if($("section.wm-values").children().hasClass("active")
			&& $(".values-content").children().hasClass("active")){
			$("section.wm-values a.active").removeClass("active");
			$("section.wm-values a#" + nextValue).addClass("active");
			$(".values-content").stop().slideUp(200,function(){
				$(".values-content .active").removeClass("active");
				$(".values-content #" + nextValue).addClass("active");
				$(".values-content").stop().slideDown(300);
			});
		}else {
			$(".values-content #" + nextValue).addClass("active");
			$("section.wm-values a#" + nextValue).stop(false,true).addClass("active");
			$(".values-content").stop().slideDown(300);
		}
	});
});