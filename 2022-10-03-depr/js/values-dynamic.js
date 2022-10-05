$(function() {

  var newHash = "",
    $pageWrap = $("#values-wrap"),
    $mainContent = $("#values-content"),
    baseHeight = 0,
    $el;

  $pageWrap.height($pageWrap.height());
  baseHeight = $pageWrap.height() - $mainContent.height();

  $("#values-nav").delegate("a", "click", function() {
    window.location.hash = $(this).attr("href");
    return false;
  });

  $(window).bind('hashchange', function() {

    newHash = window.location.hash.substring(1);

    if (newHash) {
      $mainContent
        .find(".values-text .active").fadeOut(200, function() {
          $mainContent.hide().load(newHash + ".values-text", function() {
            $mainContent.fadeIn(200, function() {
              $pageWrap.animate({
                height: baseHeight + $mainContent.height() + "px"
              }, 100);
            });
            $("#values-nav a").removeClass("active");
            $("#values-nav a[href='" + newHash + "']").addClass("active");
          });
        });
    }

  });

});