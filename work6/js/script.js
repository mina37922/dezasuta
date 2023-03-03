
// ページトップ
$(function () {
    var pagetop = $('#js-pageTop');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });


// メインビジュアル
  $('.slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
    arrows: false,
});

// ギャラリー
$('.gallery-wrap').slick({
  arrows: true,
  autoplay: false,
  autoplaySpeed: 0,
  speed: 300,
  infinite: true,
  cssEase: 'linear',
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
        slidesToShow: 1,},
      },
    ],
});

lightbox.option({
  'wrapAround': true,
  'showImageNumberLabel':false,
})
$(window).on('load', function () {
  $('.slick-cloned a').removeAttr('data-lightbox');
});



// ハンバーガーメニュー
  $('.hamburger').on('click', function () {
      $('.sp-nav').fadeToggle();
      $('.hamburger').toggleClass('open');
  });
  $('.sp-nav ul li a').on('click', function() {
    $('.hamburger').click();
    return true;
    });

});


// スクロールで固定
  $(window).on('scroll', function () {
    if ($('.slider').height()  < $(this).scrollTop()) {
        $('.header').addClass('change-color');
    } else {
        $('.header').removeClass('change-color');
    }
    
  });

