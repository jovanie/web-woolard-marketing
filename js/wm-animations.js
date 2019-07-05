$(document).ready(function () {});

$(window).on('load', function () {
  //Jquery Slide Animation for Mobile Nav Menu
  $('.header__nav__button').click(function () {
    $('.header__nav__menu__entry').stop().slideToggle(250);
  });

  function checkWidth() {
    var windowWidth = $(window).width();
    if (window.innerWidth <= 768) {
      $('.header__nav__menu__entry').hide();
      return 0;
    }

    if (window.innerWidth > 768) {
      $('.header__nav__menu__entry').stop().show();
      return 0;
    }
  }

  checkWidth();
  $(window).resize(checkWidth);

});
