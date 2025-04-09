$('.mars_bg').stop().addClass('up', 200);

setTimeout(function () {
  intro();

  function intro() {
    // .craft 이동 애니메이션 (path 없이)
    $(".craft").addClass("on");

    // 타이밍 맞춰 클래스 부여 (애니메이션 기준 6000ms)
    setTimeout(() => $('.single01').addClass('on'), 700);
    setTimeout(() => $('.single01').addClass('bub'), 2500);

    setTimeout(() => $('.single02').addClass('on'), 1200);
    setTimeout(() => $('.single02').addClass('bub'), 2800);

    setTimeout(() => $('.single03').addClass('on'), 2000);
    setTimeout(() => $('.single03').addClass('bub'), 3000);

    setTimeout(() => $('.single04').addClass('on'), 2600);
    setTimeout(() => $('.single04').addClass('bub'), 2300);
  }
}, 1000);
