<?php
include '../data/sql/AuthorizationDB.php';

$method = $_SERVER['REQUEST_METHOD'];          //запрос в суперглобальный массив $_SERVER по ключу REQUEST_METHOD

if ($method === 'POST') {
    try {
        $dataAsJson = file_get_contents("php://input");   //преобразует входные данные в строку
        $dataAsArray = json_decode($dataAsJson, true);    //преобразует строку JSON в ассоциативный массив (т.к. true) 
        if(!$dataAsArray) {
            throw new Exception('Некорректная структура JSON');
        }
        
        var_dump($dataAsArray);
        
        

    } catch (Throwable $error) {
        echo $error->getMessage();
        exit();
    } 
}

