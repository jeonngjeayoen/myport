$(function(){
	$('.skill_lab').hover(function(){
		$('.skill_lab ul li').find('.bar').toggleClass('active');
		$(".fire_off").toggleClass('fire');
		$(".fire_text").toggleClass('on');
		$('.particle_off').toggleClass('particle');
		$('.mouse_line').toggleClass('hover');
	})
	function openModal(index, ballClass, modalClass) {
		let li = $('.sec02_wrap ul li').eq(index - 1);
		let offset = li.offset();
		let scrollTop = $(window).scrollTop();
		
		$(ballClass).css({
			'position': 'fixed',
			'top': offset.top - scrollTop + li.height() / 2,
			'left': offset.left + li.width() / 2,
			'width': '10px',
			'height': '10px',
			'opacity': '0',
			'border-radius': '0%',
			'z-index': '999999',
			'transform': 'translate(-50%, -50%)'
		}).delay(100).animate({
			'opacity': '1'
		}, 100).animate({
			'border-radius': '50%'
		}, 100).animate({
			'width': '1px',
			'height': '1px'
		}, 100).animate({
			'width': '3000px',
			'height': '3000px'
		}, 1000, function(){
			$(modalClass).addClass(`mw0${index}`);
			$('header').hide();
			$(window).scrollTop(0);
			$('.modal img').animate({
				'margin-top': '100px',
				'opacity': '1'
			});
			$('body').css({'overflow': 'hidden'});
		});
	}
	
	function closeModal(index, ballClass, modalClass) {
		$('.modal img').animate({
			"margin-top": "150px",
			'opacity': '0'
		}, function(){
			$(modalClass).removeClass(`mw0${index}`);
			$('header').show();
			$('body').css({'overflow': 'visible'});
			$(window).scrollTop($(document).height());
		});
	
		$(ballClass).animate({
			'width': '1px',
			'height': '1px'
		}, 1000).animate({
			'opacity': '0'
		}, 100);
	}
	
	$('.sec02_wrap ul li').each(function(i) {
		$(this).click(function() {
			openModal(i + 1, `.e_ball${i + 1}`, `.modal_wrap0${i + 1}`);
		});
	});
	
	$('.modal_wrap01, .modal_wrap02, .modal_wrap03, .modal_wrap04').click(function() {
		let index = $(this).attr('class').match(/modal_wrap0(\d)/)[1];
		closeModal(index, `.e_ball${index}`, `.modal_wrap0${index}`);
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
