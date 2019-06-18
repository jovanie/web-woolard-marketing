(function($) {
	var $window = $(window),
		$html = $('html');

	function resize() {
		if (window.innerWidth < 768) {
			$(".header__nav").removeClass('header__nav--desktop');
			$(".header__nav").addClass('header__nav--mobile');
			$(".header__nav__button").removeClass('header__nav__button--desktop');
			$(".header__nav__button").addClass('header__nav__button--mobile');
			$(".header__nav__menu").removeClass('header__nav__menu--desktop');
			$(".header__nav__menu").addClass('header__nav__menu--mobile');
			$(".header__nav__menu__entry").removeClass('header__nav__menu__entry--desktop');
			$(".header__nav__menu__entry").addClass('header__nav__menu__entry--mobile');
			return 0;
		}
		$(".header__nav").removeClass('header__nav--mobile');
		$(".header__nav").addClass('header__nav--desktop');
		$(".header__nav__button").removeClass('header__nav__button--mobile');
		$(".header__nav__button").addClass('header__nav__button--desktop');
		$(".header__nav__menu").removeClass('header__nav__menu--mobile');
		$(".header__nav__menu").addClass('header__nav__menu--desktop');
		$(".header__nav__menu__entry").removeClass('header__nav__menu__entry--mobile');
		$(".header__nav__menu__entry").addClass('header__nav__menu__entry--desktop');
		return 0;
	}
	$window
		.resize(resize)
		.trigger('resize');
})(jQuery);

//Jquery Slide Animation for Mobile Nav Menu
$(".header__nav__button").click(function() {
	$(".header__nav__menu__entry").stop().slideToggle(250);
});
//Jquery Mobile Nav Toggle
$(document).ready(function() {
	function checkWidth() {
		var windowWidth = $(window).width();
		if (window.innerWidth <= 768) {
			//$(".header__nav__menu").hide();
		}
		if (window.innerWidth > 768) {
			$(".header__nav__menu").show();
		}
	}
	checkWidth();
	$(window).resize(checkWidth);
});
