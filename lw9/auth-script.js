document.addEventListener("DOMContentLoaded", () => {
    const login_form = document.getElementById('login_form')               //для навигации
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    const email_message = document.getElementById('email_message')
    const password_message = document.getElementById('password_message')

    const show_pswd_button = document.getElementById('show_pswd_button')

    const alertBannerCheck = document.getElementById('alert-banner__check')
    const alertBannerIncorrect = document.getElementById('alert-banner__incorrect')
    const alertIconCheck = document.getElementById('alert-icon-check')
    const alertIconIncorrect = document.getElementById('alert-icon-incorrect')

    let loginData = {
        email: "",
        password: ""
    }

    function isEmailCorrect(value) {
        const emailFormat = /\w+[@]{1}\w+[.]{1}[a-zA-Z]+/;
        let correct = false

        if (value != '') {
            if (emailFormat.test(value)) {         //проверить формат email, в случае ошибки выдать incorrect format
                loginData.email = value
                correct = emailFormat.test(value)
            } else {                                            //выдать ошибку incorrect format 
                alertBannerCheck.classList.add('alert-banner__check_show')
                alertIconCheck.classList.add('alert-icon_show')
                email_message.textContent = 'Incorrect email format. Correct format is ****@**.***'
                email_message.classList.add('alert-message_show')
                email.classList.add('login-form__input_alert-email')
            }
        } else {                                       //выдать ошибку о незаполненном поле email 
            alertBannerCheck.classList.add('alert-banner__check_show')
            alertIconCheck.classList.add('alert-icon_show')
            email_message.textContent = 'Email is required'
            email_message.classList.add('alert-message_show')
            email.classList.add('login-form__input_alert-email')
        }
        return correct
    }

    function isPasswordFilled(value) {
        let correct = true

        if (value == '') {
            alertBannerCheck.classList.add('alert-banner__check_show')
            alertIconCheck.classList.add('alert-icon_show')
            password_message.textContent = 'Password is required'
            password_message.classList.add('alert-message_show')
            password.classList.add('login-form__input_alert-password')

            correct = false
        }
        if (value != '') {
            loginData.password = value
        }
        return correct
    }

    function checkForm() {       //проверка полей формы на корректное заполнение
        let correct = false
        let temp = false

        if (isEmailCorrect(email.value)) {
            temp = true
        }
        if (isPasswordFilled(password.value)) {
            correct = true
        }
        correct = correct && temp
        return correct
    }

    async function postJSON(data) {
        try {
            const response = await fetch(" /api/login.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.text();


            // console.log(result);
        } catch (error) {
            console.error("Error:", error);
        }
    }


    function authorizationRequest() {                     //авторизация
        // console.log(loginData.email)
        // console.log(loginData.password)
        postJSON(loginData)

    }

    function initializeForm() {
        alertBannerCheck.classList.remove('alert-banner__check_show')
        alertBannerIncorrect.classList.remove('alert-banner__incorrect_show')
        alertIconCheck.classList.remove('alert-icon_show')
        alertIconIncorrect.classList.remove('alert-icon_show')

        email_message.textContent = ''
        email_message.classList.remove('alert-message_show')
        password_message.textContent = ''
        password_message.classList.remove('alert-message_show')
        email.classList.remove('login-form__input_alert-email')
        password.classList.remove('login-form__input_alert-password')
    }

    function handleForm(event) {
        event.preventDefault()              // просим форму не отправлять данные самостоятельно
        initializeForm()                  //инициализация вёрстки страницы (сброс баннеров и сообщений об ошибках)
        if (checkForm()) {
            authorizationRequest()         //запрос на авторизацию по email и паролю
        }
    }

    function passwordVisibility() {
        if (password.getAttribute('type') == 'password') {
            password.setAttribute('type', 'text')
            show_pswd_button.style.background = 'url(/images/eye-off.png) 0 0 no-repeat'
        } else {
            password.setAttribute('type', 'password')
            show_pswd_button.style.background = 'url(/images/eye.png) 0 0 no-repeat'
        }
    }

    login_form.addEventListener('submit', handleForm)   // обработчик события нажатия на кнопку, сам передает аргумент функции handleForm
    show_pswd_button.addEventListener('click', passwordVisibility)  //обработчик события "показать пароль"
});
