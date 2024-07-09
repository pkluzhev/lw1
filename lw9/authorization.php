<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="auth-script.js" defer></script>
    <title>Log In - Escape.</title>
    <style>
        body {
            background: url(/images/admin_login_background.png);
            background-size: cover;
            background-repeat: no-repeat;
        }
    </style>
    <link rel="stylesheet" href="styles/style_login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Lora&amp;family=Oxygen&amp;display=swap" rel="stylesheet">
</head>

<body>
    <div class="shadow-block">
        <div class="main-container">
            <div class="logo-container">
                <div class="title-container">
                    <h1 class="title-container__title">Escape.</h1>
                    <h2 class="title-container__title title-container__title_author">author</h2>
                </div>
                <h3 class="subtitle">Log in to start creating</h3>
            </div>
            <div class="form-container" id="form_container">

                <h4 class="login-title">Log In</h4>
                <div class="alert-banner" id="alert-banner__check">
                    <p class="alert-text">A-Ah! Check all fields,</p>
                    <img class="alert-icon" src="/images/alert.png" id="alert-icon-check">
                </div>
                <div class="alert-banner" id="alert-banner__incorrect">
                    <p class="alert-text">Email or password is incorrect.</p>
                    <img class="alert-icon" src="/images/alert.png" id="alert-icon-incorrect">
                </div>

                <form id="login_form" action="#" method="POST">
                    <label class="login-form__title" for="email" id="email_label">Email</label>
                    <input class="login-form__input" type="text" name="email" id="email" autocomplete="off">
                    <br>
                    <h6 class="alert-message" id="email_message"></h6>
                    <label class="login-form__title" for="password" id="password_label">Password</label>
                    <div class="password-field">
                        <input class="login-form__input" type="password" name="password" id="password" autocomplete="off">
                        <div class="password-control" id="show_pswd_button"></div>
                    </div>
                    <h6 class="alert-message" id="password_message"></h6>

                    <br>
                    <input class="login-form__submit-button" type="submit" id="submit_button" value="Log In">
                </form>

            </div>
        </div>
    </div>
</body>

</html>