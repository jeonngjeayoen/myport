$(function () {
    function intro() {
        const path = anime.path('.path_line path'); //path 등록
        anime({
            targets: '.star01',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 6000,
            loop: true,
        });
        gsap.to('.sec_tit  span', {
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            scale: 1,
        });
        anime({
            targets: '.sec_txt_p  span',
            opacity: 1,
            translateY: -50,
            duration: 500,
            easing: 'linear',
            delay: anime.stagger(200),
        });
        gsap.to('nav li', {
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            scale: 1,
        });
    }
    intro();
    setInterval(intro, 6000);
    $('.won1').addClass('active_won1');
    $('.won2').addClass('active_won2');
    $('.bg').addClass('active_bg');
    $('.bg2').addClass('active_bg2');
    setTimeout(function () {
        $('.typing li:first-child').addClass('p_active1');
        $('.typing li:nth-child(2)').addClass('p_active2');
        $('.typing li:nth-child(3)').addClass('p_active3');
        $('.text_hello').addClass('p_active4');
        var typingIdx = 0;
        var lineIdx = 0;

        // 문자열을 직접 정의하고 줄바꿈 처리
        var text = `안녕하세요, 항상 무한한 우주처럼
        성장력이 있는 웹 개발자 정재연입니다.
        저와 같이 우주여행을 떠나 볼까요?`;

        var lines = text.split('\n'); // 줄바꿈으로 배열 만들기
        var typingTxt = lines[lineIdx]; // 첫 줄

        if (typingIdx < typingTxt.length) {
            var tyInt = setInterval(typing, 70);
        }

        function typing() {
            $('.cursor').addClass('on');
            var currentChar = typingTxt[typingIdx];
            var formattedChar = currentChar;

            // 강조 조건
            if (currentChar === '우' || currentChar === '주') {
                formattedChar =
                    "<span class='space'>" + currentChar + '</span>';
            } else if (currentChar === '웹') {
                formattedChar = "<span class='wep'>" + currentChar + '</span>';
            }

            $('.typing').append(formattedChar);
            typingIdx++;

            if (typingIdx >= typingTxt.length) {
                if (lineIdx < lines.length - 1) {
                    $('.typing').append('<br>'); // 줄바꿈
                }
                lineIdx++;
                typingIdx = 0;
                if (lineIdx >= lines.length) {
                    clearInterval(tyInt);
                } else {
                    typingTxt = lines[lineIdx];
                }
            }
        }
    }, 1000);
    $('nav ul li').click(function () {
        var ballIndex = $(this).data('ball-index'); // 클릭한 li의 data-ball-index 값을 가져옴
        animate(ballIndex);
    });
    function updatePositions() {
        if ($(window).width() < 1200) {
            topPosition = '1%';
            leftPosition = '1%';
            topBigPosition = '-60%';
            leftBigPosition = '-125%';
        } else {
            topPosition = '5%';
            leftPosition = '20%';
            topBigPosition = '-40%';
            leftBigPosition = '-35%';
        }
    }
    function animate(ballIndex) {
        if (ballIndex === 1) {
            var urlLocation = './earth.html';
        } else if (ballIndex === 2) {
            var urlLocation = './Mars.html';
        } else if (ballIndex === 3) {
            var urlLocation = './Jupiter.html';
        } else if (ballIndex === 4) {
            var urlLocation =
                'http://jjy981212.dothome.co.kr/jungport/Neptune.html';
        }
        $('.ball' + ballIndex)
            .delay(200)
            .animate(
                {
                    opacity: '1',
                    'z-index': '9999999999',
                    'border-radius': '50%',
                    width: '30px',
                    height: '30px',
                },
                100
            )
            .animate(
                {
                    top: topPosition,
                },
                400
            )
            .animate(
                {
                    left: leftPosition,
                },
                200,
                function () {
                    $('.ball' + ballIndex).animate(
                        {
                            width: '3200px',
                            height: '3200px',
                            top: topBigPosition,
                            left: leftBigPosition,
                        },
                        1000,
                        function () {
                            location.href = urlLocation;
                        }
                    );
                }
            );
        setTimeout(function () {
            $('.ball' + ballIndex).css({ display: 'none' });
        }, 3000);
    }
    updatePositions();
    $(window).resize(function () {
        updatePositions();
    });
});
