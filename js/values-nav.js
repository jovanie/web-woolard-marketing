$(document).ready(function() {});

$(function() {
  $('.values__thumbnails__entry').click(function() {
    nextValue = $(this).attr('id');

    // Check if it's the same thumb
    if ($('.values__thumbnails__entry#' + nextValue).hasClass('active') &&
      $('.values__content__entry#' + nextValue).hasClass('active')) {
      $('.values__thumbnails__entry#' + nextValue).removeClass('active');
      $('.values__content__entry.active .text').slideUp(400, function () {
        $('.values__content__entry.active').removeClass('active');
      });

      // Check if they're mixed for some reason
    } else if ($('.values__thumbnails').children().hasClass('active') &&
      $('.values__content').children().hasClass('active')) {
      $('.values__thumbnails__entry.active').removeClass('active');
      $('.values__thumbnails__entry#' + nextValue).addClass('active');
      $('.values__content__entry.active .text').slideUp(400, function () {
        $('.values__content__entry.active').removeClass('active');
        $('.values__content__entry#' + nextValue).addClass('active');
        $('.values__content__entry.active .text').hide();
        $('.values__content__entry.active .text').slideDown(350);
      });

      //$('.values__content__entry.active').delay(500).end().removeClass('active');
      //$('.values__content__entry#' + nextValue).addClass('active');
      //$('.values__content__entry.active .text').slideDown();

    } else {
      $('.values__thumbnails__entry#' + nextValue).addClass('active');
      $('.values__content__entry#' + nextValue).addClass('active');
      $('.values__content__entry.active .text').hide();
      $('.values__content__entry.active .text').slideDown(350);

    }
    /*else {
      $('.values__content__entry#' + nextValue).addClass('active');
      $('.values__thumbnails__entry#' + nextValue).stop(false, true).addClass('active');
      $('.values__content').slideDown(300);
    }*/
  });
});

/*
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
}); */
