$(function () {
    var pagetop = $('#js-pageTop');
    pagetop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    
  });