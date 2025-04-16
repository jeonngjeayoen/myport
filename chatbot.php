
<?php
// 데이터베이스 설정
$host = "localhost";
$username = "jjy981212";
$password = "ek88701966^";
$dbname = "jjy981212";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("데이터베이스 연결 실패: " . $conn->connect_error);
}

// 사용자 입력 받기
$userInput = $_GET['user_input']; // GET 방식으로 사용자 입력 받음

// 데이터베이스 조회
$query = "SELECT response FROM chatbot WHERE question like '%$userInput%'";
$result = $conn->query($query);
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $response = $row['response'];

    // 응답 출력
    echo $response;
} else {
    // 적절한 응답을 찾지 못한 경우에 대한 처리
    echo "죄송합니다. 제가 그에 대한 답변을 찾지 못했습니다.";
}

// 데이터베이스 연결 종료
$conn->close();
?>
