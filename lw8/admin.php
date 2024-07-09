<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="admin-script.js" defer></script>
    <title>New post - Escape.</title>
    <link rel="stylesheet" href="styles/style4.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Lora&amp;family=Oxygen&amp;display=swap" rel="stylesheet">
</head>

<body>

    <header class="header">
        <div class="container header-container">
            <div class="title-container">
                <h1 class="title">Escape.</h1>
                <h2 class="title title_author">author</h2>
            </div>
            <div class="login-actions-block">
                <img class="account-avatar" src="/images/avatar.png">
                <a href="#" class="logout-button"></a>
            </div>
        </div>
    </header>

    <main>
        <form id="admin-form" action="#" method="POST">
            <div class="container main-banner-container">
                <div class="main-title-container">
                    <h3 class="main-title">New Post</h3>
                    <h4 class="main-subtitle">Fill out the form bellow and publish your article</h4>
                </div>
                <input class="publish-button" type="submit" name="submit-button" id="submit-button" value="Publish">
            </div>

            <!-- для алерта добавить alert-banner__show -->
            <div class="alert-banner" id="alert-banner">
                <img class="alert-banner-icon" src="/images/alert.png">
                <h5 class="alert-banner-message">Whoops! Some fields need your attention :o</h5>
            </div>

            <!-- при успехе добавить success-banner__show -->
            <div class="success-banner" id="success-banner">
                <img class="success-banner-icon" src="/images/check-circle.png">
                <h5 class="success-banner-message">Publish Complete!</h5>
            </div>

            <div class="container main-info-container">
                <h5 class="main-info-title">Main Information</h5>
                <div class="fill-post-container">
                    <fieldset class="form-field">
                        <label class="form-title" for="title">Title</label>
                        <!-- для алерта добавить form-input__title-alert -->
                        <input class="form-input" name="title" id="title" autocomplete="off" maxlength="255">
                        <!-- для алерта добавить alert-message-title__show -->
                        <h5 class="alert-message" id="alert-title">Check that field o_0</h5>
                        <h5 class="alert-message" id="alert-title-empty">Title is required</h5>
                        <br>

                        <label class="form-title" for="subtitle">Short description</label>
                        <!-- для алерта добавить form-input__subtitle-alert -->
                        <input class="form-input" name="subtitle" id="subtitle" autocomplete="off" maxlength="255">
                        <!-- для алерта добавить alert-message-subtitle__show -->
                        <h5 class="alert-message" id="alert-subtitle">Check that field o_0</h5>
                        <h5 class="alert-message" id="alert-subtitle-empty">Subtitle is required</h5>
                        <br>

                        <label class="form-title" for="author-name">Author name</label>
                        <!-- для алерта добавить form-input__author-name-alert -->
                        <input class="form-input" name="author-name" id="author-name" autocomplete="off" maxlength="25">
                        <!-- для алерта добавить alert-message-author-name__show -->
                        <h5 class="alert-message" id="alert-author-name">Check that field o_0</h5>
                        <h5 class="alert-message" id="alert-author-name-empty">Author name is required</h5>
                        <br>

                        <label class="form-title" for="author-photo">Author photo</label>
                        <div class="upload-author-container">
                            <input class="upload-small-button" type="file" name="author-photo" id="author-photo" onchange>
                            <!-- чтобы изменилась кнопка и добавилась remove, добавить upload-author-button__new и __show для remove-button -->
                            <input class="upload-author-button" type="file" name="author-photo" id="upload-author-button" onchange>
                            <div class="remove-button" type="button" id="remove-author-button" onclick></div>
                        </div>

                        <label class="form-title" for="publish-date">Publish date</label>
                        <input class="form-input" type="date" name="publish-date" id="publish-date" value="2020-06-01" autocomplete="off">

                        <label class="form-title" for="hero-image">Hero image</label>
                        <input class="upload-big-button" type="file" name="hero-image" id="hero-image" value="" onchange>
                        <!-- чтобы появились кнопки, добавить buttons-block и __show для кнопок -->
                        <div class="main-img-requierments" id="main-img-requierments-buttons">
                            <input class="upload-button" type="file" name="hero-image" id="upload-main-img-requierments-button" value="" onchange>
                            <div class="remove-button" type="button" id="remove-main-img-requierments-button" onclick></div>
                        </div>

                        <label class="form-title" for="hero-image-small">Hero image</label>
                        <input class="upload-middle-button" type="file" name="hero-image-small" id="hero-image-small" value="" onchange>
                        <!-- чтобы появились кнопки, добавить buttons-block и __show для кнопок -->
                        <div class="preview-img-requierments" id="preview-img-requierments-buttons">
                            <input class="upload-button" type="file" name="hero-image-small" id="upload-preview-img-requierments-button" value="" onchange>
                            <div class="remove-button" type="button" id="remove-preview-img-requierments-button"></div>
                        </div>

                        <label class="form-title" for="sticker">Sticker</label>
                        <!-- для алерта добавить form-input__sticker-alert -->
                        <input class="form-input" name="sticker" id="sticker" autocomplete="off" maxlength="15">
                        <!-- для алерта добавить alert-message-sticker__show -->
                        <h5 class="alert-message" id="alert-sticker">Check that field o_0</h5>
                        <br>

                    </fieldset>
                </div>
                <div class="preview-container">

                    <h8 class="article-preview-container-title">Article preview</h8>

                    <div class="article-preview-background">
                        <h9 class="article-preview-title" id="preview-article-title">New Post</h9>
                        <h10 class="article-preview-subtitle" id="preview-article-subtitle">Please, enter any description</h10>
                        <div class="article-preview-image" id="article-preview-image"> </div>
                    </div>

                    <h8 class="post-card-preview-container-title">Post card preview</h8>

                    <div class="post-card-preview-background">
                        <div class="post-card-preview-image" id="card-preview-image"></div>
                        <h9 class="post-card-preview-title" id="preview-card-title">New Post</h9>
                        <h10 class="post-card-preview-subtitle" id="preview-card-subtitle">Please, enter any description</h10>

                        <div class="preview-caption-block">
                            <div>
                                <div class="preview-author-avatar" id="preview-author-avatar"></div>
                                <h11 class="preview-caption-text" id="preview-author-name">Enter author name</h11>
                            </div>
                            <h11 class="preview-caption-text preview-caption-text__date" id="preview-card-date">4/19/2023</h11>
                        </div>

                    </div>
                </div>

            </div>


            <div class="container checkbox-container">
                <label class="featured-checkbox-title" for="featured-post">Featured Post</label>
                <input class="featured-checkbox" type="checkbox" name="featured-post" id="featured-post">

            </div>

            <div class="container main-info-container content-container">
                <h5 class="main-info-title">Content</h5>
                <div class="fill-text-block">

                    <label class="form-title" for="text-content">Post content (plain text)</label>
                    <textarea class="textarea-post" name="text-content" id="text-content" autocomplete="off"></textarea>
                    <br>

                </div>
            </div>

        </form>
    </main>

</body>

</html>