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
