<?php
const HOST = 'localhost';
const USERNAME = 'admin';
const PASSWORD = '1234';
const DATABASE = 'blog';
const TABLE = 'user';

function createDBConnection(): mysqli
{
    $conn = new mysqli(HOST, USERNAME, PASSWORD, DATABASE);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

function closeDBConnection(mysqli $conn): void
{
    $conn->close();
}

function checkEmail($email): bool
{
    $checkResult = false;
    $conn = createDBConnection();

    $sql = "SELECT email * FROM user";
    $result = $conn->query($sql);
    $rows = $result->fetch_all(MYSQLI_ASSOC);
    foreach ($rows as $row) {
        if ($row['email'] == $email) {
            $checkResult = true;
        }
    }

    closeDBConnection($conn);
    return($checkResult);
}




function getPostFromDB($postId, &$postData): void
{
    $conn = createDBConnection();

    $sql = "SELECT is_feautured, image_url, image_preview_url, image_alt, title, subtitle, text, avatar_url, author, time_stamp, sticker FROM post WHERE id = {$postId}";
    $result = $conn->query($sql);
    if ($result->num_rows == 1) {
        if ($row = $result->fetch_assoc()) {
            $postData = $row;
        }
    } else {
        // throw new Exception('Пост с таким id не существует');
        header('Location: http://localhost:8001/error404.php');
    }

    closeDBConnection($conn);
}

function checkIdQuery($postId): void
{
    if (is_numeric($postId) != true) {
        throw new Exception('Некорректный GET-запрос');
    }
}
