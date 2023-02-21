
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
    
  });


// メインビジュアル
  $('.mainVisual-slider').slick({
		fade:true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed:1000,
		infinite: true,
		dots: true,
    arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
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

// ハンバーガーメニュー
$(function(){
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
$(function () {
  $(window).on('scroll', function () {
    if ($('.mainVisual-slider').height()  < $(this).scrollTop()) {
        $('.header').addClass('change-color');
    } else {
        $('.header').removeClass('change-color');
    }
  });
});

