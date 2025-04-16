$(function () {
    $('.nep_bg').stop().addClass('up', 200);
    $('.ufo').addClass('on', 1000);
    $('.ufo').addClass('bub', 1200);
    setTimeout(function () {
        $('.ufo_bottom').addClass('on');
    }, 3000);

    var initialText =
        '안녕하세요 저는 정재연님이 만든 초간단 챗봇 유니 입니다, 궁금한 키워드를 입력해주세요!'; // 출력할 초기 텍스트

    // 초기 텍스트를 가진 li.chat2 요소 생성
    var listItem = $("<li class='chat2'>").text('유니 : ');
    var chatText = $("<span class='typing'></span>");
    listItem.append(chatText);
    $('#chat_history').append(listItem);

    function typeText(element, text) {
        var typingIdx = 0;
        var tyInt = setInterval(function () {
            if (typingIdx < text.length) {
                element.append(text[typingIdx]);
                typingIdx++;
            } else {
                clearInterval(tyInt);
            }
        }, 50);
    }

    function updateChatHistory(userInput, response) {
        var chatHistory = $('#chat_history');

        var userListItem = $("<li class='user'>").text('나 : ' + userInput);
        chatHistory.append(userListItem);

        var inputWidth = userInput.length * 18;
        userListItem.css('width', inputWidth + 28 + 'px');

        var chatListItem = $("<li class='chat'>").text('유니 : ');
        chatHistory.append(chatListItem);
        var chatText = $("<span class='typing'></span>");
        chatListItem.append(chatText);
        typeText(chatText, response, function () {
            var responseWidth = response.length * 14;
            chatListItem.css('width', responseWidth + 5 + 'px');
        });
    }

    $(document).ready(function () {
        $('form').submit(function (event) {
            event.preventDefault();

            var userInput = $('#user_input').val();

            $.ajax({
                type: 'GET',
                url: 'chatbot.php',
                data: { user_input: userInput },
                success: function (response) {
                    updateChatHistory(userInput, response);
                    $('#user_input').val('');

                    $('.n_art2').scrollTop($('.n_art2')[0].scrollHeight);
                },
            });
        });

        // 초기 텍스트 타이핑 효과 시작
        typeText($('.typing'), initialText);
    });
    setInterval(function () {
        $('.n_art2').scrollTop($('.n_art2')[0].scrollHeight);
    }, 1000);
    $('.ufo_rotate li').click(function () {
        let text = $(this).text(); // 클릭한 li의 텍스트 가져오기
        $('#user_input').attr('placeholder', text); // input placeholder 변경
    });
});
