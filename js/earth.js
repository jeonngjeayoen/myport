$(function(){
	$('.skill_lab').hover(function(){
		$('.skill_lab ul li').find('.bar').toggleClass('active');
		$(".fire_off").toggleClass('fire');
		$(".fire_text").toggleClass('on');
		$('.particle_off').toggleClass('particle');
		$('.mouse_line').toggleClass('hover');
	})
  //첫번째 모달
	$('.sec02_wrap ul li:first-child').click(function(){
			$('.e_ball1').delay(200).animate({
				'opacity': '1',
				'z-index':'999999'
			}, 100).animate({
				'border-radius': '50%'
			}, 100).animate({
				'width': '1px'
			}, 100).animate({
				'height': '1px'
			}, 200, function () {
				$('.e_ball1')
					.animate({
						'width': '3000px',
						'height': '3000px',
						'top': '-320%',
						'left': '-125%',
					}, 1000,function(){
						$('.modal_wrap01').addClass('mw01');
						$('header').css({'display':'none'});
						$(window).scrollTop(0);
						$('.modal img').animate({
							"margin-top" : "100px",
							'opacity': '1'
						});
					})
			$('.wrap').css({'overflow':'hidden'});
			});
			
	});
	
	$('.modal_wrap01').click(function(){
		$('.modal img').animate({
			"margin-top" : "150px",
			'opacity': '0'
		},function(){
			$(window).scrollTop($(document).height());
			$(".modal_wrap01").removeClass('mw01')
		});
		$('.e_ball1').animate({
					'width': '1px',
					'height': '1px',
					'top': '30%',
					'left': '50%',
				}, 1000).animate({
					'opacity': '0'
				}, 100)
		$('header').css({'display':'block'});
				
	});
	//두번째 모달
	$('.sec02_wrap ul li:nth-child(2)').click(function(){
		$('.e_ball2').delay(200).animate({
			'opacity': '1',
			'z-index':'999999'
		}, 100).animate({
			'border-radius': '50%'
		}, 100).animate({
			'width': '1px'
		}, 100).animate({
			'height': '1px'
		}, 200, function () {
			$('.e_ball2')
				.animate({
					'width': '3000px',
					'height': '3000px',
					'top': '-420%',
					'left': '-225%',
				}, 1000,function(){
					$('.modal_wrap02').addClass('mw02');
					$('header').css({'display':'none'});
					$('.modal img').animate({
						"margin-top" : "100px",
						'opacity': '1'
					});
				})
		$('body').css({'overflow':'hidden'});
		$(window).scrollTop($(document).height());
		});
		
	});
	
	$('.modal_wrap02').click(function(){
		$('.modal img').animate({
			"margin-top" : "150px",
			'opacity': '0'
		},function(){
			$(".modal_wrap02").removeClass('mw02')
		});
		$('.e_ball2').animate({
					'width': '1px',
					'height': '1px',
					'top': '50%',
					'left': '50%',
				}, 1000).animate({
					'opacity': '0'
				}, 100)
				$('header').css({'display':'block'});
				$('body').css({'overflow':'visible'});
				
	});
	//모달 세번째
	$('.sec02_wrap ul li:nth-child(3)').click(function(){
		$('.e_ball3').delay(200).animate({
			'opacity': '1',
			'z-index':'999999'
		}, 100).animate({
			'border-radius': '50%'
		}, 100).animate({
			'width': '1px'
		}, 100).animate({
			'height': '1px'
		}, 200, function () {
			$('.e_ball3')
				.animate({
					'width': '3000px',
					'height': '3000px',
					'top': '-420%',
					'left': '-325%',
				}, 1000,function(){
					$('.modal_wrap03').addClass('mw03');
					$('header').css({'display':'none'});
					$('.modal img').animate({
						"margin-top" : "100px",
						'opacity': '1'
					});
				})
				$('body').css({'overflow':'hidden'});
				$(window).scrollTop($(document).height());
			});
		
	});
	$('.modal_wrap03').click(function(){
		$('.modal img').animate({
			"margin-top" : "150px",
			'opacity': '0'
		},function(){
			$(".modal_wrap03").removeClass('mw03')
		});
		$('.e_ball3').animate({
					'width': '1px',
					'height': '1px',
					'top': '50%',
					'left': '50%',
				}, 1000).animate({
					'opacity': '0'
				}, 100)
		$('header').css({'display':'block'});
		$('body').css({'overflow':'visible'});
				
	});
	//모달 네번째
	$('.sec02_wrap ul li:last-child').click(function(){
		$('.e_ball4').delay(200).animate({
			'opacity': '1',
			'z-index':'999999'
		}, 100).animate({
			'border-radius': '50%'
		}, 100).animate({
			'width': '1px'
		}, 100).animate({
			'height': '1px'
		}, 200, function () {
			$('.e_ball4')
				.animate({
					'width': '3000px',
					'height': '3000px',
					'top': '-340%',
					'left': '-425%',
				}, 1000,function(){
					$('.modal_wrap04').addClass('mw04');
					$(window).scrollTop(0);
					$('header').css({'display':'none'});
					$('.modal img').animate({
						"margin-top" : "100px",
						'opacity': '1'
					});
				})
		$('.wrap').css({'overflow':'hidden'});
		});
		
	});
	
	$('.modal_wrap04').click(function(){
		$('.modal img').animate({
			"margin-top" : "150px",
			'opacity': '0'
		},function(){
			$(".modal_wrap04").removeClass('mw04');
			$(window).scrollTop($(document).height());
		});
		$('.e_ball4').animate({
					'width': '1px',
					'height': '1px',
					'top': '50%',
					'left': '50%',
				}, 1000).animate({
					'opacity': '0'
				}, 100)
		$('header').css({'display':'block'});
				
	});
	// 이름 바꾸기
	var idx=0
	var chAngtxt= $('.name_box ul li')
	chAng()
	function chAng(){
		$(chAngtxt).eq(idx).addClass('on',500,function(){
			$(this).removeClass('off')
			$(this).siblings('li').addClass('off')
			$(this).siblings('li').removeClass('on')
		})
		idx++;
		if(idx >= chAngtxt.length) idx= 0;
	}
	setInterval(chAng,3000);
});
