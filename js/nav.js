jQuery(window).resize(function() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    jQuery(".nav__menu").hide().stop(true, true);
    jQuery(".nav__menu").addClass(".nav__menu--active");
  } else if (window.matchMedia('max-width: 1023px)').matches) {
    jQuery(".nav__menu").show().stop(true, true);
  } else {
    jQuery(".nav__menu").show().stop(true, true);
  }
}).resize();

jQuery(document).ready(function() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    jQuery(".nav__menu").slideUp(function() {}).stop(true, true);
  }
  jQuery(".nav__button").on("click", function(event) {
    jQuery(".nav__menu").stop(true, true).slideToggle();
  });
  jQuery(document).on("click", function(event) {
    if (window.matchMedia('(max-width: 767px)').matches) {
      var $trigger = jQuery(".nav");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        jQuery(".nav__menu").stop(true, true).slideUp();
      }
    }
  });
});
