$(function(){
	
	
	intro()
    function intro(){
		

        const path = anime.path('.path_line path'); //path 등록
		

        const tl = anime.timeline({
        })
		tl.add({
            targets:'.star01',
			translateX:path('x'),
			translateY:path('y'),
			rotate:path('angle'),
			easing:'linear',
			duration:6000,
			loop:true,
			
		})
		gsap.to('.sec_tit  span',{
			opacity:1,
			duration:1,
			stagger:.1,
			scale:1
		})
		anime({
			targets:'.sec_txt_p  span',
			opacity:1,
			translateY:-50,
			duration:500,
			easing:'linear',
			delay:anime.stagger(200)
		})
		gsap.to('nav li',{
			opacity:1,
			duration:1,
			stagger:.1,
			scale:1
		})
		
    }
    let Timer = setInterval(intro,6000);

	$('.won1').addClass('active_won1');
	$('.won2').addClass('active_won2');
	$('.bg').addClass('active_bg');
	$('.bg2').addClass('active_bg2');
	setTimeout(function(){
		$('.typing li:first-child').addClass('p_active1');
		$('.typing li:nth-child(2)').addClass('p_active2');
		$('.typing li:nth-child(3)').addClass('p_active3');
		$('.text_hello').addClass('p_active4');
		var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
       typingBool=true; 
       
       var tyInt = setInterval(typing,50); // 반복동작 
     } 
     
     function typing(){ 
			$('.cursor').addClass('on');
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
         
         //글자를 이어 붙일 경우에 서식을 넣어줄 글자를 지정한다 
         
        if(typingTxt[typingIdx]=='우'){
          var inText = "<span class='space'>"+typingTxt[typingIdx]+"</span>"
          $(".typing").append(inText); // 한글자씩 이어준다. 
        } else if (typingTxt[typingIdx]=='주'){
          var inText = "<span class='space'>"+typingTxt[typingIdx]+"</span>"
          $(".typing").append(inText); // 한글자씩 이어준다. 
        }else if (typingTxt[typingIdx]=='웹'){
          var inText = "<span class='wep'>"+typingTxt[typingIdx]+"</span>"
          $(".typing").append(inText); // 한글자씩 이어준다. 
        }
         else{
          $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         }
         typingIdx++; 
       } else{ 
         clearInterval(tyInt); //끝나면 반복종료 
       } 
     }  
	},1000)
	$('nav ul li:first-child').click(function(){
		$('.ball1').delay(200).animate({
			'opacity': '1',
			'z-index':'9999999999'
		}, 100).animate({
			'border-radius': '50%'
		}, 100).animate({
			'width': '30px'
		}, 100).animate({
			'height': '30px'
		}, 100).animate({
			'top': '5%'
    	}, 400).animate({
        	'left': '25%'
		}, 200, function () {
			$('.ball1')
				.animate({
					'width': '3000px',
					'height': '3000px',
					'top': '-50%',
                	'left': '-30%'
				}, 1000,function(){
					location.href='./earth.html'})
		});
		setTimeout(function(){
			$('.ball1').css({'display':'none'});
		},3000)
	})
	$('nav ul li:nth-child(2)').click(function(){
		$('.ball2').delay(200).animate({
			'opacity': '1',
			'z-index':'9999999999'
		}, 100).animate({
			'border-radius': '50%'
		}, 100).animate({
			'width': '30px'
		}, 100).animate({
			'height': '30px'
		}, 100).animate({
			'top': '5%'
    	}, 400).animate({
        	'left': '25%'
		}, 200, function () {
			$('.ball2')
				.animate({
					'width': '3000px',
					'height': '3000px',
					'top': '-50%',
                	'left': '-30%'
				}, 1000,function(){
					location.href='./Mars.html'})
		});
		setTimeout(function(){
			$('.ball2').css({'display':'none'});
		},3000)
	})
	$('nav ul li:nth-child(3)').click(function(){
		$('.ball3').delay(200).animate({
			'opacity': '1',
			'z-index':'9999999999'
		}, 100).animate({
			'border-radius': '50%'
		}, 100).animate({
			'width': '30px'
		}, 100).animate({
			'height': '30px'
		}, 100).animate({
			'top': '5%'
    	}, 400).animate({
        	'left': '25%'
		}, 200, function () {
			$('.ball3')
				.animate({
					'width': '3000px',
					'height': '3000px',
					'top': '-50%',
                	'left': '-30%'
				}, 1000,function(){
					location.href='./Jupiter.html'})
		});
		setTimeout(function(){
			$('.ball3').css({'display':'none'});
		},3000)
	})
	$('nav ul li:last-child').click(function(){
		$('.ball4').delay(200).animate({
			'opacity': '1',
			'z-index':'9999999999'
		}, 100).animate({
			'border-radius': '50%'
		}, 100).animate({
			'width': '30px'
		}, 100).animate({
			'height': '30px'
		}, 100).animate({
			'top': '5%'
    	}, 400).animate({
        	'left': '25%'
		}, 200, function () {
			$('.ball4')
				.animate({
					'width': '3000px',
					'height': '3000px',
					'top': '-50%',
          'left': '-30%'
				}, 1000,function(){
					location.href='http://jjy981212.dothome.co.kr/jungport/Neptune.html'})
		});
		setTimeout(function(){
			$('.ball4').css({'display':'none'});
		},3000)
	})
	

	
})