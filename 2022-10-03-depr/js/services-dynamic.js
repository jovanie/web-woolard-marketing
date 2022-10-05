$(function() {

  var newHash = "",
    $pageWrap = $("#services-wrap"),
    $mainContent = $("#service-content"),
    baseHeight = 0,
    $el;

  $pageWrap.height($pageWrap.height());
  baseHeight = $pageWrap.height() - $mainContent.height();

  $("#services-nav").delegate("a", "click", function() {
    window.location.hash = $(this).attr("href");
    return false;
  });

  $(window).bind('hashchange', function() {

    newHash = window.location.hash.substring(1);

    if (newHash) {
      $mainContent
        .find("#service-text").fadeOut(200, function() {
          $mainContent.hide().load(newHash + " #service-text", function() {
            $mainContent.fadeIn(200, function() {
              $pageWrap.animate({
                height: baseHeight + $mainContent.height() + "px"
              }, 100);
            });
            $("#services-nav a").removeClass("active");
            $("#services-nav a[href='" + newHash + "']").addClass("active");
          });
        });
				$mainContent
        .find("#service-image").fadeOut(200, function() {
          $mainContent.hide().load(newHash + " #service-image", function() {
            $mainContent.fadeIn(200, function() {
              $pageWrap.animate({
                height: baseHeight + $mainContent.height() + "px"
              }, 100);
            });
					});
        });
    }

  });

});