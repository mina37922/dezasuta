window.addEventListener("DOMContentLoaded", () => {
    // 星を表示するための親要素を取得
    const stars = document.querySelector(".stars");
  
    // 星を生成する関数
    const createStar = () => {
      const starEl = document.createElement("span");
      starEl.className = "star";
      const minSize = 1; // 星の最小サイズを指定
      const maxSize = 2; // 星の最大サイズを指定
      const size = Math.random() * (maxSize - minSize) + minSize;
      starEl.style.width = `${size}px`;
      starEl.style.height = `${size}px`;
      starEl.style.left = `${Math.random() * 100}%`;
      starEl.style.top = `${Math.random() * 100}%`;
      starEl.style.animationDelay = `${Math.random() * 10}s`;
      stars.appendChild(starEl);
    };
  
    // for文で星を生成する関数を指定した回数呼び出す
    for (let i = 0; i <= 500; i++) {
      createStar();
    }
  });

  $(function () {
    var num = Math.ceil(3 * Math.random());
    $('.bg-color').addClass('bg-color' + num);
    $('.font-color').addClass('font-color' + num);
  });


  //spメニュー
  $(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
  
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        } 
      
    });
  });

  //メニュー内を閉じておく
  $(function() {
    $('.globalMenuSp a[href]').click(function() {
        $('.globalMenuSp').removeClass('active');
        $('.hamburger').removeClass('active');
  
    });
  });
  
  $(function(){
    $('.btn').on('click', function () {
      if ($(this).text() === 'CLOSE') {
        $(this).text('MENU');
      } else {
        $(this).text('CLOSE');
      }
    });
  });


// ひかるテキスト
function GlowAnimeControl() {
  $('.BrightAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("glow");

    } else {
      $(this).removeClass("glow");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
    var element = $(".BrightAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
        var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述