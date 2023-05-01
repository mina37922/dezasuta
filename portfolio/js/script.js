document.addEventListener('DOMContentLoaded', function() {
	document.body.style.display = 'block';
});


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
    $('.icon-color').addClass('font-color' + num);
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

  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if(scroll>50){
      $('.cloud').fadeOut(1000);
    }else{
      $('.cloud').fadeIn();
    }
  });


  $('.outer-wrapper').scroll(function() {
    var scroll = $(this).scrollTop();
    if(scroll>50){
      $('.cloud').fadeOut(2000);
    }else{
      $('.cloud').fadeIn();
    }
  });
  

  $(function() {

    // パラメータ取得
    function getParam(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    //hr top service tab choicies
    let tabPram = ['tab-1', 'tab-2', 'tab-3', 'tab-4', 'tab-5'];
    let pram = getParam('active-tab');
    if (pram && $.inArray(pram, tabPram) !== -1) {
      $('.js-tab-cts,.js-tab-switch').removeClass('is-active');
      $('[data-tab="' + pram + '"]').addClass('is-active');
    }
    $('.js-tab-switch').on('click', function() {
      let dataPram = $(this).data('tab');
      $('.js-tab-cts,.js-tab-switch').removeClass('is-active');
      $('[data-tab="' + dataPram + '"]').addClass('is-active');
    });
  });
