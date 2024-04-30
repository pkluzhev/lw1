<?php

function getModifier($className, $idFeautured)
{
    if ($idFeautured == true) {
        $modifier = 'big';
    };
    if ($idFeautured == false) {
        $modifier = 'small';
    };
    return $className . '_' . $modifier;
}

$featuredPosts = [
    [
        'id' => 1,
        'is_feautured' => true,
        'image_url' => '/static/images/lights_post.png',
        'title' => 'The Road Ahead',
        'subtitle' => 'The road ahead might be paved - it might not be.',
        'avatar_url' => '/static/images/matvogels.png',
        'author' => 'Mat Vogels',
        'time_stamp' => 1443207453,
        'sticker' => ''
    ],
    [
        'id' => 2,
       'is_feautured' => true,
        'image_url' => '/static/images/lanterns_post.png',
        'title' => 'From Top Down',
        'subtitle' => 'Once a year, go someplace you’ve never been before.',
        'avatar_url' => '/static/images/williamwong.png',
        'author' => 'William Wong',
        'time_stamp' => 1443207453,
        'sticker' => 'ADVENTURE'
    ],
];

$mostRecent = [
    [
        'id' => 3,
       'is_feautured' => false,
        'image_url' => '/static/images/balloons_small.png',
        'title' => 'Still Standing Tall',
        'subtitle' => 'Life begins at the end of your comfort zone.',
        'avatar_url' => '/static/images/williamwong.png',
        'author' => 'William Wong',
        'time_stamp' => 1443207453,
        'sticker' => ''
    ],
    [
        'id' => 4,
       'is_feautured' => false,
        'image_url' => '/static/images/bridge_small.png',
        'title' => 'Sunny Side Up',
        'subtitle' => 'No place is ever as bad as they tell you it’s going to be.',
        'avatar_url' => '/static/images/matvogels.png',
        'author' => 'Mat Vogels',
        'time_stamp' => 1443207453,
        'sticker' => ''
    ],
    [
        'id' => 5,
       'is_feautured' => false,
        'image_url' => '/static/images/lake_small.png',
        'title' => 'Water Falls',
        'subtitle' => 'We travel not to escape life, but for life not to escape us.',
        'avatar_url' => '/static/images/matvogels.png',
        'author' => 'Mat Vogels',
        'time_stamp' => 1443207453,
        'sticker' => ''
    ],
    [
        'id' => 6,
       'is_feautured' => false,
        'image_url' => '/static/images/sea_small.png',
        'title' => 'Through the Mist',
        'subtitle' => 'Travel makes you see what a tiny place you occupy in the world.',
        'avatar_url' => '/static/images/williamwong.png',
        'author' => 'William Wong',
        'time_stamp' => 1443207453,
        'sticker' => ''
    ],
    [
        'id' => 7,
       'is_feautured' => false,
        'image_url' => '/static/images/funic_small.png',
        'title' => 'Awaken Early',
        'subtitle' => 'Not all those who wander are lost.',
        'avatar_url' => '/static/images/matvogels.png',
        'author' => 'Mat Vogels',
        'time_stamp' => 1443207453,
        'sticker' => ''
    ],
    [
        'id' => 8,
       'is_feautured' => false,
        'image_url' => '/static/images/waterfall_small.png',
        'title' => 'Try it Always',
        'subtitle' => 'The world is a book, and those who do not travel read only one page.',
        'avatar_url' => '/static/images/matvogels.png',
        'author' => 'Mat Vogels',
        'time_stamp' => 1443207453,
        'sticker' => ''
    ],
];
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
        <div class="header__cover container">
            <h1 class="cover__title">Let's do it together.</h1>
            <h2 class="cover__subtitle">We travel the world in search of stories. Come along for the ride.</h2>
            <a class="cover__button-link" href="#">View Latest Posts</a>
        </div>
    </header>

    <main>
        <div class="topic-bar">
            <nav class="topic-bar navigation container">
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
        <div class="posts container">
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