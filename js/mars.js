$(function(){
  $('.mars_bg').stop().addClass('up',200);
  setTimeout(function(){
  intro()
  function intro(){
  

      const path = anime.path('.craft_line path'); //path 등록

      
      const tl = anime.timeline({
      })
    tl.add({
    targets:'.craft',
    translateX:path('x'),
    translateY:path('y'),
    rotate:path('angle'),
    easing:'linear',
    duration:6000,
    loop:true,
    
  })
  }
  $('.single01').addClass('on',700);
  $('.single01').addClass('bub',2500);
  $('.single02').addClass('on',1200);
  $('.single02').addClass('bub',2500);
  $('.single03').addClass('on',2000);
  $('.single03').addClass('bub',2500);
  $('.single04').addClass('on',2600);
  $('.single04').addClass('bub',2500);
  },1000);
  
  
})