<?php

function checkIsFeautured($dataAsArray): void
{
    if (gettype($dataAsArray['is_feautured']) !== 'integer') {
        throw new Exception('Некорректный тип данных для ключа is_feautured');
    }
    if ($dataAsArray['is_feautured'] !== 0) {
        if ($dataAsArray['is_feautured'] !== 1) {
            throw new Exception('Некорректное значение по ключу is_feautured');
        }
    }
}

function checkVarChar($dataAsArray, $arrKey): void
{
    if (gettype($dataAsArray[$arrKey]) !== 'string') {
        throw new Exception('Некорректный тип данных для ключа ' . $arrKey);
    }
    if (!$dataAsArray[$arrKey]) {
        throw new Exception('Пустое поле по ключу ' . $arrKey);
    }
    if (strlen($dataAsArray[$arrKey]) > 255) {
        throw new Exception('Превышена длина для данных по ключу ' . $arrKey);
    }
}

function checkTextType($dataAsArray, $arrKey): void
{
    if (gettype($dataAsArray[$arrKey]) !== 'string') {
        throw new Exception('Некорректный тип данных для ключа ' . $arrKey);
    }
    if (!$dataAsArray[$arrKey]) {
        throw new Exception('Пустое поле по ключу ' . $arrKey);
    }
}

function checkTimestamp($dataAsArray): void
{
    if (gettype($dataAsArray['time_stamp']) !== 'integer') {
        throw new Exception('Некорректный тип данных для ключа time_stamp');
    }
    $len = strval($dataAsArray['time_stamp']);
    if (strlen($len) !== 10) {
        throw new Exception('Некорректное значение по ключу timestamp');
    }
}

function checkVarCharForSticker($dataAsArray, $arrKey): void
{
    if (gettype($dataAsArray[$arrKey]) !== 'string') {
        throw new Exception('Некорректный тип данных для ключа ' . $arrKey);
    }
    if (strlen($dataAsArray[$arrKey]) > 255) {
        throw new Exception('Превышена длина для данных по ключу ' . $arrKey);
    }
}

function checkPostData($dataAsArray): void
{
    checkIsFeautured($dataAsArray);                  
    checkVarChar($dataAsArray, 'image_alt');
    checkVarChar($dataAsArray, 'title');
    checkVarChar($dataAsArray, 'subtitle');
    checkTextType($dataAsArray, 'text');
    checkVarChar($dataAsArray, 'author');
    checkTimestamp($dataAsArray);
    checkVarCharForSticker($dataAsArray, 'sticker');
}
