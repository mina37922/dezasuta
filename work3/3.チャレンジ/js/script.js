$(".hamburger").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#G-nav-sp").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#G-nav-sp a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".hamburger").removeClass('active');//ボタンの activeクラスを除去し
    $("#G-nav-sp").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});