<?php
include './data/sql/UsingDB.php';

$postId = $_GET['id'];
$postData = [];
try {
    checkIdQuery($postId); // провалидировать без запроса к базе данных
    getPostFromDB($postId, $postData);
} catch (Throwable $error) {
    echo $error->getMessage();
    exit();
} 
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,0">
    <title><?= $postData['title'] ?></title>
    <link rel="stylesheet" href="styles/style2.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Lora&amp;family=Oxygen&amp;display=swap" rel="stylesheet">
</head>

<body>

    <header class="header">
        <nav class="header__navigation navigation container">
            <div class="navigation__block">
                <a class="navigation__logo_header" href="/home">Escape.</a>
                <ul class="navigation__list">
                    <li class="navigation__item"><a class="navigation__link_header" href="/home">HOME</a></li>
                    <li class="navigation__item"><a class="navigation__link_header" href="#">CATEGORIES</a></li>
                    <li class="navigation__item"><a class="navigation__link_header" href="#">ABOUT</a></li>
                    <li class="navigation__item"><a class="navigation__link_header" href="#">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <div class="banner container">
            <h1 class="banner__title"><?= $postData['title'] ?></h1>
            <h2 class="banner__subtitle"><?= $postData['subtitle'] ?></h2>
        </div>
        <img class="main-img" src="<?= $postData['image_url'] ?>" alt=”<?= $postData['image_alt'] ?>”>
        <div class="content container">
            <p class="content__text">
                <?= $postData['text'] ?>
            </p>
        </div>
    </main>

    <footer class="footer">
        <nav class="footer__navigation navigation container">
            <div class="navigation__block">
                <a class="navigation__logo_footer" href="/home">Escape.</a>
                <ul class="navigation__list">
                    <li class="navigation__item"><a class="navigation__link_footer" href="/home">HOME</a></li>
                    <li class="navigation__item"><a class="navigation__link_footer" href="#">CATEGORIES</a></li>
                    <li class="navigation__item"><a class="navigation__link_footer" href="#">ABOUT</a></li>
                    <li class="navigation__item"><a class="navigation__link_footer" href="#">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </footer>

</body>

</html>