<?php
const HOST = 'localhost';
const USERNAME = 'admin';
const PASSWORD = '1234';
const DATABASE = 'blog';
const TABLE = 'post';

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

function getDataFromDB(&$featuredPosts, &$mostRecent, mysqli $conn): void
{
    $sql = "SELECT * FROM post";
    $result = $conn->query($sql);
    $rows = $result->fetch_all(MYSQLI_ASSOC);
    foreach ($rows as $row) {
        if ($row['is_feautured'] == 1) {
            array_push($featuredPosts, $row);
        }
        if ($row['is_feautured'] == 0) {
            array_push($mostRecent, $row);
        }
    }
}

function getModifier($className, $idFeautured)
{
    if ($idFeautured == 1) {
        $modifier = 'big';
    };
    if ($idFeautured == 0) {
        $modifier = 'small';
    };
    return $className . '_' . $modifier;
}

function getPostFromDB($postId, $postData, mysqli $conn): array
{
    $sql = "SELECT is_feautured, image_url, image_preview_url, image_alt, title, subtitle, text, avatar_url, author, time_stamp, sticker FROM post WHERE id = {$postId}";
    $result = $conn->query($sql);
    if ($result->num_rows == 1) {
        if ($row = $result->fetch_assoc()) {
            $postData = $row;
        }
    } else {
        throw new Exception('Пост с таким id не существует');
    }
    return $postData;
}

function checkIdQuery($postId): void
{
    if (is_numeric($postId) != true) {
        throw new Exception('Некорректный GET-запрос');
    }
}

function insertPostToDB($dataAsArray, mysqli $conn): void
{
    $sql = "INSERT INTO post 
            SET
                is_feautured = {$dataAsArray['is_feautured']},
                image_url = '{$dataAsArray['image_url']}',
                image_preview_url = '{$dataAsArray['image_preview_url']}',
                image_alt = '{$dataAsArray['image_alt']}',
                title = '{$dataAsArray['title']}',
                subtitle = '{$dataAsArray['subtitle']}',
                text = '{$dataAsArray['text']}',
                avatar_url = '{$dataAsArray['avatar_url']}',
                author = '{$dataAsArray['author']}',
                time_stamp = {$dataAsArray['time_stamp']},
                sticker = '{$dataAsArray['sticker']}'";
    $result = $conn->query($sql);
    if (!$result) {
        throw new Exception('Ошибка при добавлении поста в БД');
    }
}
