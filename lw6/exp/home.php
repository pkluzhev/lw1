<?php
include './data/sql/UsingDB.php';

$featuredPosts = [];
$mostRecent = [];
getDataFromDB($featuredPosts, $mostRecent);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,0">
    <title>Let's do it together.</title>
    <link rel="stylesheet" href="styles/style1.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Lora&amp;family=Oxygen&amp;display=swap" rel="stylesheet">
</head>

<body>

    <header class="header">
        <nav class="container container__header-navigation">
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
        <div class="header__cover container">
            <h1 class="cover__title">Let's do it together.</h1>
            <h2 class="cover__subtitle">We travel the world in search of stories. Come along for the ride.</h2>
            <a class="cover__button-link" href="#">View Latest Posts</a>
        </div>
    </header>

    <main>
        <div class="topic-bar">
            <nav class="container container__topic-navigation">
                <ul class="navigation__list">
                    <li class="navigation__item"><a class="navigation__link_topic-bar" href="#">Nature</a></li>
                    <li class="navigation__item"><a class="navigation__link_topic-bar" href="#">Photography</a></li>
                    <li class="navigation__item"><a class="navigation__link_topic-bar" href="#">Relaxation</a></li>
                    <li class="navigation__item"><a class="navigation__link_topic-bar" href="#">Vacation</a></li>
                    <li class="navigation__item"><a class="navigation__link_topic-bar" href="#">Travel</a></li>
                    <li class="navigation__item"><a class="navigation__link_topic-bar" href="#">Adventure</a></li>
                </ul>
            </nav>
        </div>
        <div class="container container__posts">
            <div class="posts__title-block">
                <h3 class="posts__title">Featured Posts</h3>
            </div>
            <div class="posts__content">
                <?php
                foreach ($featuredPosts as $post) {
                    include 'post_preview.php';
                }
                ?>
            </div>
            <div class="posts__title-block">
                <h3 class="posts__title">Most Recent</h3>
            </div>
            <div class="posts__content">
                <?php
                foreach ($mostRecent as $post) {
                    include 'post_preview.php';
                }
                ?>
            </div>
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