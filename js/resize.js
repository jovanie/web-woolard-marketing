$(window).resize(function() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    $(".nav__menu").hide().stop(true, true);
    $(".nav__menu").addClass(".nav__menu--active");
  } else if (window.matchMedia('max-width: 1023px)').matches) {
    $(".nav__menu").show().stop(true, true);
  } else {
    $(".nav__menu").show().stop(true, true);
  }
}).resize();
