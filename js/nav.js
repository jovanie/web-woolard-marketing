$(document).ready(function() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    $(".nav__menu").hide().stop(true,true);
    $(".nav__button").unbind("click");
    $(".nav__button").click(function() {
      $(".nav__menu").stop(true,true).slideToggle();
    });
  }
});

$(window).resize(function() {
  $(".nav__button").unbind("click");
  $(".nav__button").click(function() {
    $(".nav__menu").stop(true,true).slideToggle();
  });
  if (window.matchMedia('(max-width: 767px)').matches) {
    $(".nav__menu").hide().stop(true,true);
    $(".nav__menu").addClass(".nav__menu--active");
    $(document).on("click", function(event) {
      if (window.matchMedia('(max-width: 767px)').matches) {
        var $trigger = $(".nav");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
          $(".nav__menu").stop(true,true).slideUp(); 
        }
      }
    });
  } else if (window.matchMedia('max-width: 1023px)').matches) {
    $(".nav__menu").show().stop(true,true);
  } else {
    $(".nav__menu").show().stop(true,true);
  }
}).resize();
