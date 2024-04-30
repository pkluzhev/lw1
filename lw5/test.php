<?php
const HOST = 'localhost';
const USERNAME = 'user';
const PASSWORD = '1234';
const DATABASE = 'blog';

function createDBConnection(): mysqli
{
    $conn = new mysqli(HOST, USERNAME, PASSWORD, DATABASE);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully<br><br>";
    return $conn;
}

function closeDBConnection(mysqli $conn): void
{
    $conn->close();
}

function getAndPrintPostsFromDB(mysqli $conn): void
{
    $sql = "SELECT * FROM post";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo    "id: {$row['id']}<br>
                    is_feautured: {$row['is_feautured']}<br>
                    image_url: {$row['image_url']}<br>
                    image_prev_url: {$row['image_prev_url']}<br>
                    image_alt: {$row['image_alt']}<br>
                    title: {$row['title']}<br>
                    subtitle: {$row['subtitle']}<br>
                    text: {$row['text']}<br>
                    avatar_url: {$row['avatar_url']}<br>
                    author: {$row['author']}<br>
                    time_stamp: {$row['time_stamp']}<br>
                    sticker: {$row['sticker']}<br>          
                    <br>";
        }
    } else {
        echo "0 results";
    }
}

$conn = createDBConnection();
getAndPrintPostsFromDB($conn);
closeDBConnection($conn);
?>
