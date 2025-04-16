$(function(){
  $('.tab01').addClass('on');
  $('.jupiter_bg').stop().addClass('up',200);
  $('.img_box img').addClass('on');
  $('.img_box').addClass('on');
  $('.phone_img img').addClass('on');
  $('.phone_img').addClass('on');
  $('.lightning').addClass('on',100);
  $('.lightning').removeClass('on',100);
  $('.tab01').delay(3000).animate({'top':'140px'});
  $('.tab02').delay(3200).animate({'top':'160px'});
  $('.tab03').delay(3400).animate({'top':'160px'});
  $('.tab01 p').addClass('on');
  // 첫번째 번개
  $('.lightning02').addClass('on',1000);
  $('.lightning02').removeClass('on',100);
  $('.sumkwang').addClass('on');
  $('.sumkwang').removeClass('on',100);
  // 두번째 번개
  $('.lightning03').addClass('on',2700);
  $('.lightning03').removeClass('on',100);
  $('.sumkwang').addClass('on',1000);
  $('.sumkwang').addClass('on2',500);
  $('.sumkwang').removeClass('on',1500);
  $('.img_box').delay(2000).animate({
    'width':'100%',
    'height':'10px'
},500,function(){
  $('.jupiter_art01').animate({
    'width':'98%'
  });
  $('.img_box img').removeClass('on');
}).animate({
  'height': '485px',
  'top': '0px'
}, 500);
//폰
  $('.phone_img').delay(2000).animate({
    'width':'86%',
    'height':'5px'
  },500,function(){
    $('.phone_img img').removeClass('on');
  }).animate({
    'height': '85%',
    'top': '49%'
  }, 500);
//탭버튼 첫번째
  $(".tab01").click(function(){
    $('.tab01').addClass('on');
    $('.tab02').removeClass('on');
    $('.tab03').removeClass('on');
    $('.tab01 p').addClass('on');
    $('.tab02 p').removeClass('on');
    $('.tab03 p').removeClass('on');
    $('.tab01').animate({'top':'140px'});
    $('.tab02').animate({'top':'160px'});
    $('.tab03').animate({'top':'160px'});
    //다른버튼
    $('.img_box2').animate({
      'height': '0px',
      'top': '250px'
  },500,function(){
    $('.jupiter_art02').animate({
      'width':'50%'
    });
    $('.img_box2 img').addClass('on');
  }).animate({
    'width':'0px',
    'height':'0px'
  }, 500);
  $('.img_box3').animate({
    'height': '0px',
    'top': '250px'
},500,function(){
  $('.jupiter_art03').animate({
    'width':'50%'
  });
  $('.img_box3 img').addClass('on');
}).animate({
  'width':'0px',
  'height':'0px'
}, 500);
  // 다른 폰
$('.phone_img2').animate({
  'height':'5px'
},500,function(){
  $('.phone_img2 img').addClass('on');
}).animate({
  'width':'0px',
  'height':'0px'
}, 500);
$('.phone_img3').animate({
  'height':'5px'
},500,function(){
  $('.phone_img3 img').addClass('on');
}).animate({
  'width':'0px',
  'height':'0px'
}, 500);
//실제폰
$('.phone_img').delay(800).animate({
  'width':'86%',
  'height':'5px'
},500,function(){
  $('.phone_img img').removeClass('on');
  $('.phone_boxin div:first-of-type').addClass('on');
}).animate({
  'height': '85%',
  'top': '49%'
}, 500);
    //실제이미지
    $('.img_box').delay(800).animate({
      'width':'100%',
      'height':'10px'
  },500,function(){
    $('.jupiter_art01').animate({
      'width':'98%'
    });
    $('.img_box img').removeClass('on');
    $('#monitorscreen div:first-child').addClass('on');
  }).animate({
    'height': '485px',
    'top': '0px'
  }, 500);
  });
  //탭버튼 2번째
  $(".tab02").click(function(){
    $('.tab02').addClass('on');
    $('.tab01').removeClass('on');
    $('.tab03').removeClass('on');
    $('.tab02 p').addClass('on');
    $('.tab01 p').removeClass('on');
    $('.tab03 p').removeClass('on');
    $('.tab01').animate({'top':'160px'});
    $('.tab02').animate({'top':'140px'});
    $('.tab03').animate({'top':'160px'});
    //다른버튼
    $('.img_box').animate({
      'height': '0px',
      'top': '250px'
  },500,function(){
    $('.jupiter_art01').animate({
      'width':'50%'
    });
    $('.img_box img').addClass('on');
  }).animate({
    'width':'0px',
    'height':'0px'
  }, 500);
  $('.img_box3').animate({
    'height': '0px',
    'top': '250px'
},500,function(){
  $('.jupiter_art03').animate({
    'width':'50%'
  });
  $('.img_box3 img').addClass('on');
}).animate({
  'width':'0px',
  'height':'0px'
}, 500);
//다른폰
$('.phone_img').animate({
  'height':'5px'
},500,function(){
  $('.phone_img img').addClass('on');
}).animate({
  'width':'0px',
  'height':'0px'
}, 500);
$('.phone_img3').animate({
  'height':'5px'
},500,function(){
  $('.phone_img3 img').addClass('on');
}).animate({
  'width':'0px',
  'height':'0px'
}, 500);
//실제폰
$('.phone_img2').delay(800).animate({
  'width':'86%',
  'height':'5px'
},500,function(){
  $('.phone_img2 img').removeClass('on');
  $('.phone_boxin div:nth-of-type(2)').addClass('on');
}).animate({
  'height': '250px',
  'top': '49%'
}, 500);
    //실제 이미지
    $('.img_box2').delay(800).animate({
      'width':'100%',
      'height':'10px'
  },500,function(){
    $('.jupiter_art02').animate({
      'width':'98%'
    });
    $('.img_box2 img').removeClass('on');
    $('#monitorscreen div:nth-child(2)').addClass('on');
  }).animate({
    'height': '485px',
    'top': '0px'
  }, 500);
  });
  //탭버튼 3번째
  $(".tab03").click(function(){
    $('.tab03').addClass('on');
    $('.tab01').removeClass('on');
    $('.tab02').removeClass('on');
    $('.tab03 p').addClass('on');
    $('.tab01 p').removeClass('on');
    $('.tab02 p').removeClass('on');
    $('.tab01').animate({'top':'160px'});
    $('.tab02').animate({'top':'160px'});
    $('.tab03').animate({'top':'140px'});
    //다른버튼
    $('.img_box').animate({
      'height': '0px',
      'top': '250px'
  },500,function(){
    $('.jupiter_art01').animate({
      'width':'50%'
    });
    $('.img_box img').addClass('on');
  }).animate({
    'width':'0px',
    'height':'0px'
  }, 500);
  $('.img_box2').animate({
    'height': '0px',
    'top': '250px'
},500,function(){
  $('.jupiter_art02').animate({
    'width':'50%'
  });
  $('.img_box2 img').addClass('on');
}).animate({
  'width':'0px',
  'height':'0px'
}, 500);
//다른폰
$('.phone_img2').animate({
  'height':'5px'
},500,function(){
  $('.phone_img2 img').addClass('on');
}).animate({
  'width':'0px',
  'height':'0px'
}, 500);
$('.phone_img').animate({
  'height':'5px'
},500,function(){
  $('.phone_img img').addClass('on');
}).animate({
  'width':'0px',
  'height':'0px'
}, 500);
//실제폰
$('.phone_img3').delay(800).animate({
  'width':'86%',
  'height':'5px'
},500,function(){
  $('.phone_img3 img').removeClass('on');
  $('.phone_boxin div:last-of-type').addClass('on');
}).animate({
  'height': '85%',
  'top': '49%'
}, 500);
    //실제 이미지
    $('.img_box3').delay(800).animate({
      'width':'100%',
      'height':'10px'
  },500,function(){
    $('.jupiter_art03').animate({
      'width':'98%'
    });
    $('.img_box3 img').removeClass('on');
    $('#monitorscreen div:last-child').addClass('on');
  }).animate({
    'height': '485px',
    'top': '0px'
  }, 500);
  });
  //모달1번째
  $('.img_box').click(function(){
		$('.j_ball1').animate({
			'opacity': '1',
			'z-index':'999999'
		}, 100).animate({
			'border-radius': '50%'
		}, 100).animate({
			'width': '1px'
		}, 100).animate({
			'height': '1px'
		}, 200, function () {
			$('.j_ball1')
				.animate({
					'width': '3000px',
					'height': '3000px',
					'top': '-50%',
          'left': '-28%',
				}, 1000,function(){
					$('.modal_wrap01').addClass('mw01');
					$('header').css({'display':'none'});
					$('.modal img').animate({
						"margin-top" : "100px",
						'opacity': '1'
					});
				})
        $(window).scrollTop(0);
      });
	});
	
	$('.modal_wrap01').click(function(){
		$('.modal img').animate({
			"margin-top" : "150px",
			'opacity': '0'
		},function(){
			$(".modal_wrap01").removeClass('mw01')
      $(window).scrollTop(0);
		});
		$('.j_ball1').animate({
					'width': '1px',
					'height': '1px',
					'top': '50%',
          'left': '50%',
				}, 1000).animate({
					'opacity': '0'
				}, 100)
		$('header').css({'display':'block'});
	});
  //모달2번째
  $('.img_box2').click(function(){
		$('.j_ball2').animate({
			'opacity': '1',
			'z-index':'999999'
		}, 100).animate({
			'border-radius': '50%'
		}, 100).animate({
			'width': '1px'
		}, 100).animate({
			'height': '1px'
		}, 200, function () {
			$('.j_ball2')
				.animate({
					'width': '3000px',
					'height': '3000px',
					'top': '-50%',
          'left': '-28%',
				}, 1000,function(){
					$('.modal_wrap02').addClass('mw02');
					$('header').css({'display':'none'});
					$('.modal2 img').animate({
						"margin-top" : "100px",
						'opacity': '1'
					});
				})
        $(window).scrollTop(0);
      });
	});
	
	$('.modal_wrap02').click(function(){
		$('.modal2 img').animate({
			"margin-top" : "150px",
			'opacity': '0'
		},function(){
			$(".modal_wrap02").removeClass('mw02')
      $(window).scrollTop(0);
		});
		$('.j_ball2').animate({
					'width': '1px',
					'height': '1px',
					'top': '50%',
          'left': '50%',
				}, 1000).animate({
					'opacity': '0'
				}, 100)
		$('header').css({'display':'block'});
	});
  //모달 3번째
  $('.img_box3').click(function(){
		$('.j_ball3').animate({
			'opacity': '1',
			'z-index':'999999'
		}, 100).animate({
			'border-radius': '50%'
		}, 100).animate({
			'width': '1px'
		}, 100).animate({
			'height': '1px'
		}, 200, function () {
			$('.j_ball3')
				.animate({
					'width': '3000px',
					'height': '3000px',
					'top': '-50%',
          'left': '-28%',
				}, 1000,function(){
					$('.modal_wrap03').addClass('mw03');
					$('header').css({'display':'none'});
					$('.modal3 img').animate({
						"margin-top" : "100px",
						'opacity': '1'
					});
				})
        $(window).scrollTop(0);
      });
	});
	
	$('.modal_wrap03').click(function(){
		$('.modal3 img').animate({
			"margin-top" : "150px",
			'opacity': '0'
		},function(){
			$(".modal_wrap03").removeClass('mw03')
      $(window).scrollTop(0);
		});
		$('.j_ball3').animate({
					'width': '1px',
					'height': '1px',
					'top': '50%',
          'left': '50%',
				}, 1000).animate({
					'opacity': '0'
				}, 100)
		$('header').css({'display':'block'});
	});
})

