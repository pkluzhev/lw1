<?php
include './data/sql/UsingDB.php';
include 'check_postdata.php';

$method = $_SERVER['REQUEST_METHOD'];          //запрос в суперглобальный массив $_SERVER по ключу REQUEST_METHOD

if ($method === 'POST') {
    $dataAsJson = file_get_contents("php://input");   //преобразует входные данные в строку
    $dataAsArray = json_decode($dataAsJson, true);    //преобразует строку JSON в ассоциативный массив (т.к. true) 

    try {
        checkIsFeautured($dataAsArray);                   //проверить ВСЕ ключи 
        checkVarChar($dataAsArray, $arrKey = 'image_alt');
        checkVarChar($dataAsArray, $arrKey = 'title');
        checkVarChar($dataAsArray, $arrKey = 'subtitle');
        checkTextType($dataAsArray, $arrKey = 'text');
        checkVarChar($dataAsArray, $arrKey = 'author');
        checkTimestamp($dataAsArray);
        checkVarCharForSticker($dataAsArray, $arrKey = 'sticker');

        saveImage($dataAsArray['image_url'], $dataAsArray, 'image_name'); //сохраняет изображение base64 по ключу 'image_url' и берет ей имя по ключу 'image_name'
        $dataAsArray['image_url'] = getImageLink($dataAsArray['image_url'], $dataAsArray, 'image_name');
        
        saveImage($dataAsArray['image_preview_url'], $dataAsArray, 'image_preview_name');
        $dataAsArray['image_preview_url'] = getImageLink($dataAsArray['image_preview_url'], $dataAsArray, 'image_preview_name'); 
        
        saveImage($dataAsArray['avatar_url'], $dataAsArray, 'author');
        $dataAsArray['avatar_url'] = getImageLink($dataAsArray['avatar_url'], $dataAsArray, 'author');
        
        $conn = createDBConnection();
        insertPostToDB($dataAsArray, $conn);
        closeDBConnection($conn);

        echo 'Пост успешно добавлен в БД.';
    } catch (Throwable $error) {
        echo $error->getMessage();
        exit();
    } 
}

function saveImage(string $imageBase64, $dataAsArray, $keyImage)     //подаём строку $imageBase64
{
    $imageBase64Array = explode(';base64,', $imageBase64);  //возвращается массив подстрок, разделенных разделителем ';base64,', полученных разделением входной строки - аргумента $imageBase64 
    $imgExtention = str_replace('data:image/', '', $imageBase64Array[0]); //заменяет 'data:image/' в строке $imageBase64Array[0] на пустую строку (т.е. в итоге в элементе массива $imageBase64Array[0] остаается только трёхсимвольное расширение)
    $imageDecoded = base64_decode($imageBase64Array[1]); //декодирует строку $imageBase64Array[1], закодированную при помощи base64
    saveFile("./images/".getImageName($dataAsArray, $keyImage).".".$imgExtention, $imageDecoded); //записывает строку из $imageDecoded в файл "image.{$imgExtention} (это расширение)
}

function getImageLink(string $imageBase64, $dataAsArray, $keyImage): string     //подаём строку $imageBase64
{
    $imageBase64Array = explode(';base64,', $imageBase64);  //возвращается массив подстрок, разделенных разделителем ';base64,', полученных разделением входной строки - аргумента $imageBase64 
    $imgExtention = str_replace('data:image/', '', $imageBase64Array[0]); //заменяет 'data:image/' в строке $imageBase64Array[0] на пустую строку (т.е. в итоге в элементе массива $imageBase64Array[0] остаается только трёхсимвольное расширение)
    return "./images/".getImageName($dataAsArray, $keyImage).".".$imgExtention; //возвращает ссылку на изображение
}

function saveFile(string $file, string $data): void
{
    $myFile = fopen($file, 'w');  //fopen() закрепляет именованный ресурс, указанный в аргументе filename ($file), за потоком; Параметр mode ('w') указывает тип доступа ('w' открывает файл только для записи)
    if (!$myFile) {
        exit('Произошла ошибка при открытии файла');
    }
    $result = fwrite($myFile, $data); //записывает содержимое data ($data) в файловый поток stream($myFile)
    if (!$result) {
        exit('Произошла ошибка при сохранении данных в файл');
    }
    fclose($myFile); //закрывает файл ($myFile)
}

function getImageName($dataAsArray, $keyImage): string
{
    try {
        checkVarChar($dataAsArray, $keyImage);
        return $dataAsArray[$keyImage];
    } catch (Throwable $error) {
        echo $error->getMessage();
        exit();
    }
}
