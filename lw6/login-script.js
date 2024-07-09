document.addEventListener("DOMContentLoaded", () => {
 
    const login_form = document.getElementById('login_form')               //для навигации
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const form_container = document.getElementById('form_container')
    
    const email_label = document.getElementById('email_label')
    const password_label = document.getElementById('password_label')
    const email_message = document.getElementById('email_message')
    const password_message = document.getElementById('password_message')
    
    const show_pswd_button = document.getElementById('show_pswd_button')
    const submit_button = document.getElementById('submit_button')
    
    let errorBanner = document.createElement("h5")   // для вставки элементов
    let errorIcon = document.createElement("img")
    
    const dbLogin = 'admin@admin.com'
    const dbPassword = '1234'

//JS должен знать только о стилях и id. Не стоит менять свойства класса через JS, лучше поменять класс
//обернуть в один блок все блоки с ошибками в каждом месте в верстке, чтобы упростить поиск элементов через id
//сделать блок со всеми ошибками, чтобы JS открывал их через display: none / display: block
//текст в блоки ошибок через JS не добавлять!
//JSON JSON.stringyfy !
//fileReader JS
//Node.isConnected Проверка наличия элемента в видимом DOM 


    // const postData = {
    //     title: 'new post',
    //     description: '',
    //     postImage: '',
    // }

    // postImagePreview.style.background = `url(${postData.postImage})`;

    // titleInput.addEventListener('change', (event) => {
    //     const value = event.target.value //titleInput.value
    //     // провалидировать значение
    //     postData.title = value;




    // })

    // fileInput.addEventListener('change', (event) => {
    //     const value = event.target.value //titleInput.value
    //     // провалидировать значение
    //     postData.title = value;
        
    //     function onPostImageLoad(image) {
    //         postData.postImage = image
    //     }
    //     readFile(fileInput, onPostImageLoad)



    // })

    // function readFile(input, onLoad) {
    //     let file = input.files[0];
    //     // размер файла и расширение можно достать отсюда
      
    //     let reader = new FileReader();
      
    //     reader.readAsDataURL(file);
      
    //     reader.onload = function() {
    //         onLoad(reader.result);
    //     };
      
    //     reader.onerror = function() {
    //       console.log(reader.error);
    //     };
    
    //   }
    
    
    // function serializeForm(formNode) {
    //     const { elements } = formNode
    //     const data = Array.from(elements)
    //         .filter((item) => !!item.name)
    //         .map((element) => {
    //             const { name, value } = element
    
    //             return { name, value }
    //         })
    
    //     console.log(data)
    // }
    
    
    function isEmailCorrect(value) {
        const emailFormat = /\w+[@]{1}\w+[.]{1}[a-zA-Z]+/;
        let correct = false
    
        if (value != '') {
            if (emailFormat.test(value)) {         //проверить формат email, в случае ошибки выдать incorrect format
                correct = emailFormat.test(value)
            } else {                                            //выдать ошибку incorrect format 
                errorBanner.className = 'alert-banner'
                errorBanner.innerHTML = 'A-Ah! Check all fields,'
                form_container.insertBefore(errorBanner, login_form)
    
                errorIcon.className = 'alert-icon'
                errorIcon.src = '/images/alert.png'
                form_container.insertBefore(errorIcon, login_form)
    
                email_label.style.marginTop = "16px"
                password_label.style.marginTop = "39px"
    
                email_message.innerHTML = 'Incorrect email format. Correct format is ****@**.***'
    
                email.classList.add('login-form__input_alert-email')
            }
        } else {                                       //выдать ошибку о незаполненном поле email 
            errorBanner.className = 'alert-banner'//
            errorBanner.innerHTML = 'A-Ah! Check all fields,' //
            form_container.insertBefore(errorBanner, login_form)
    
            errorIcon.className = 'alert-icon'
            errorIcon.src = '/images/alert.png'
            form_container.insertBefore(errorIcon, login_form)
    
            email_label.style.marginTop = "16px"
            password_label.style.marginTop = "39px"
            // 
    
            email_message.innerHTML = 'Email is required'
    
            email.classList.add('login-form__input_alert-email')
        }
        return correct
    }
    
    function isPasswordCorrect(value) {
        let correct = true
    
        if (value == '') {
            errorBanner.className = 'alert-banner'
            errorBanner.innerHTML = 'A-Ah! Check all fields,'
            form_container.insertBefore(errorBanner, login_form)//
    
            errorIcon.className = 'alert-icon'
            errorIcon.src = '/images/alert.png'
            form_container.insertBefore(errorIcon, login_form)//
    
            email_label.style.marginTop = "16px"//
            password_label.style.marginTop = "39px"//
            submit_button.style.margin = "15px auto auto 40px"//
    
            password_message.innerHTML = 'Password is required'
    
            password.classList.add('login-form__input_alert-password')
    
            correct = false
        }
        return correct
    }
    
    function checkForm() {       //проверка полей формы на корректное заполнение
        let correct = false
        let temp = false
    
        if (isEmailCorrect(email.value)) {
            temp = true
        }
        if (isPasswordCorrect(password.value)) {
            correct = true
        }
        correct = correct && temp
        return correct
    }
    
    // function checkForm() {   //второй вариант не работает - проверяет поля последовательно, а не одновременно
    //     let correct = false
    
    //     if (isEmailCorrect(email.value) && isPasswordCorrect(password.value)) {
    //         correct = true
    //     }
    //     return correct
    // }
    
    function authorizationResponse() {                     //авторизация
        if ((email.value == dbLogin) && (password.value == dbPassword)) {
            document.location.href = "admin.php"
        } else {
            errorBanner.className = 'alert-banner'
            errorBanner.innerHTML = 'Email or password is incorrect.'
            form_container.insertBefore(errorBanner, login_form)
    
            errorIcon.className = 'alert-icon'
            errorIcon.src = '/images/alert.png'
            form_container.insertBefore(errorIcon, login_form)
    
            email_label.style.marginTop = "16px"
            
            email.classList.add('login-form__input_alert-email')
            password.classList.add('login-form__input_alert-password')
        }
    }
    
    function initializeForm() {
        if (errorBanner.isConnected) {
            form_container.removeChild(errorBanner)
        }
        if (errorIcon.isConnected) {
            form_container.removeChild(errorIcon)
        }
        email_message.innerHTML = ''//
        password_message.innerHTML = ''//
        email_label.style.marginTop = "40px"//
        password_label.style.marginTop = "23px"//
        submit_button.style.margin = "0 auto auto 40px;"//
        email.classList.remove('login-form__input_alert-email')
        password.classList.remove('login-form__input_alert-password')
    }
    
    function handleForm(event) {
        event.preventDefault()              // просим форму не отправлять данные самостоятельно
        initializeForm()                  //инициализация вёрстки страницы (сброс баннеров и сообщений об ошибках)
        if (checkForm()) {
            authorizationResponse()         //авторизация по email и паролю
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
