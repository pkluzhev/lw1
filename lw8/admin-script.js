document.addEventListener("DOMContentLoaded", () => {

    const adminForm = document.getElementById('admin-form')    //сама форма

    const title = document.getElementById('title')                      //элементы формы
    const subtitle = document.getElementById('subtitle')
    const authorName = document.getElementById('author-name')

    const authorPhoto = document.getElementById('author-photo')          //загрузка фото автора
    const uploadAuthorButton = document.getElementById('upload-author-button')
    const removeAuthorButton = document.getElementById('remove-author-button')

    const publishDate = document.getElementById('publish-date')

    const mainPostImage = document.getElementById('hero-image')                   //загрузка mainImage
    const mainImageButtons = document.getElementById('main-img-requierments-buttons')
    const uploadMainImgBut = document.getElementById('upload-main-img-requierments-button')
    const removeMainImgBut = document.getElementById('remove-main-img-requierments-button')

    const previewPostImage = document.getElementById('hero-image-small')                 //загрузка previewImage
    const previewImageButtons = document.getElementById('preview-img-requierments-buttons')
    const uploadPreviewImgBut = document.getElementById('upload-preview-img-requierments-button')
    const removePreviewImgBut = document.getElementById('remove-preview-img-requierments-button')

    const sticker = document.getElementById('sticker')
    const featuredPost = document.getElementById('featured-post')
    const textContent = document.getElementById('text-content')

    const previewMainImage = document.getElementById('article-preview-image')  //превьюшки страницы и карточки
    const previewCardImage = document.getElementById('card-preview-image')
    const previewAuthorPhoto = document.getElementById('preview-author-avatar')

    const previewArticleTitle = document.getElementById('preview-article-title')
    const previewArticleSubtitle = document.getElementById('preview-article-subtitle')

    const previewCardTitle = document.getElementById('preview-card-title')
    const previewCardSubtitle = document.getElementById('preview-card-subtitle')

    const previewAuthorName = document.getElementById('preview-author-name')

    const previewCardDate = document.getElementById('preview-card-date')



    const successBanner = document.getElementById('success-banner')     //Publish complete!

    const alertBanner = document.getElementById('alert-banner')           //alert banner

    const alertTitle = document.getElementById('alert-title')             //для визуализации ошибок           
    const alertTitleEmpty = document.getElementById('alert-title-empty')
    const alertSubtitle = document.getElementById('alert-subtitle')
    const alertSubtitleEmpty = document.getElementById('alert-subtitle-empty')
    const alertAuthorName = document.getElementById('alert-author-name')
    const alertAuthorNameEmpty = document.getElementById('alert-author-name-empty')
    const alertSticker = document.getElementById('alert-sticker')

    const maxSizeFileSmall = 5242880;
    const maxSizeFileLarge = 10485760;

    let postData = {
        is_feautured: 0,
        image_url: "",
        image_name: "",
        image_preview_url: "",
        image_preview_name: "",
        image_alt: "image",
        title: "",
        subtitle: "",
        text: "",
        avatar_url: "",
        author: "",
        time_stamp: 1590969600,
        sticker: ""
    }


    function isTitleCorrect(value) {                   //функция превью пост, которая подставляет данные в превьюшки ИЗ ПостДаты
        let correct = false                            //обработчики событий меняют ПостДату

        if (value != '') {
            if ((value.length <= 255) && (/^[a-zA-Z0-9]+$/.test(value))) {
                postData.title = value
                correct = true
            } else {
                title.classList.add('form-input__title-alert')
                alertTitle.classList.add('alert-message-title__show')
            }
        } else {
            title.classList.add('form-input__title-alert')
            alertTitleEmpty.classList.add('alert-message-title-empty__show')
        }
        return correct
    }

    function isSubtitleCorrect(value) {
        let correct = false

        if (value != '') {
            if ((value.length <= 255) && (/^[a-zA-Z0-9]+$/.test(value))) {
                postData.subtitle = value
                correct = true
            } else {
                subtitle.classList.add('form-input__subtitle-alert')
                alertSubtitle.classList.add('alert-message-subtitle__show')
            }
        } else {
            subtitle.classList.add('form-input__subtitle-alert')
            alertSubtitleEmpty.classList.add('alert-message-subtitle-empty__show')
        }
        return correct
    }

    function isAuthorNameCorrect(value) {
        let correct = false

        if (value != '') {
            if ((value.length <= 255) && (/^[a-zA-Z0-9]+$/.test(value))) {
                postData.author = value
                correct = true
            } else {
                authorName.classList.add('form-input__author-name-alert')
                alertAuthorName.classList.add('alert-message-author-name__show')
            }
        } else {
            authorName.classList.add('form-input__author-name-alert')
            alertAuthorNameEmpty.classList.add('alert-message-author-name-empty__show')
        }
        return correct
    }

    function isStickerCorrect(value) {
        let correct = false

        if (value != '') {
            if ((value.length <= 255) && (/^[a-zA-Z0-9]+$/.test(value))) {
                correct = true
            } else {
                sticker.classList.add('form-input__sticker-alert')
                alertSticker.classList.add('alert-message-sticker__show')
            }
        } else {
            correct = true
        }
        return correct
    }

    function isTextCorrect(value) {
        let correct = false

        if (value != '') {
            postData.text = value
            correct = true
        } else {
            correct = false
        }
        return correct
    }

    function checkFeatured() {
        if (featuredPost.checked) {
            postData.is_feautured = 1
            console.log(postData.is_feautured)
        } else {
            postData.is_feautured = 0
            console.log(postData.is_feautured)
        }
    }

    function validateImageFile(file) {

        if (!((file.includes('png')) || (file.includes('jpeg')) || (file.includes('gif')))) {
            console.log("Incorrect file extension");
        }

        if ((file.includes('png')) || (file.includes('jpeg')) || (file.includes('gif'))) {
            return true;
        } else {
            return false;
        }
    }


    function checkForm() {       //проверка полей формы на корректное заполнение
        let correct = false

        let correctTitle = false
        let correctSubtitle = false
        let correctAuthorName = false
        let correctSticker = false
        let correctText = false
        let correctImages = false

        if (isTitleCorrect(title.value)) {
            correctTitle = true
        }
        if (isSubtitleCorrect(subtitle.value)) {
            correctSubtitle = true
        }
        if (isAuthorNameCorrect(authorName.value)) {
            correctAuthorName = true
        }
        if (isStickerCorrect(sticker.value)) {
            correctSticker = true
        }
        if (isTextCorrect(textContent.value)) {
            correctText = true
        }

        checkFeatured()

        postData.image_name = postData.title

        postData.image_preview_name = 'preview' + postData.subtitle

        if ((postData.image_url != '') && (postData.image_preview_url != '') && (postData.avatar_url != '')) {
            correctImages = true
        }

        correct = correctTitle && correctSubtitle && correctAuthorName && correctSticker && correctText && correctImages
        if (!correct) {
            alertBanner.classList.add('alert-banner__show')
        }
        return correct
    }


    function initializeForm() {                   //инициализация вёрстки страницы (сброс баннеров и сообщений об ошибках)
        alertBanner.classList.remove('alert-banner__show')

        title.classList.remove('form-input__title-alert')
        alertTitle.classList.remove('alert-message-title__show')
        alertTitleEmpty.classList.remove('alert-message-title-empty__show')

        subtitle.classList.remove('form-input__subtitle-alert')
        alertSubtitle.classList.remove('alert-message-subtitle__show')
        alertSubtitleEmpty.classList.remove('alert-message-subtitle-empty__show')

        authorName.classList.remove('form-input__author-name-alert')
        alertAuthorName.classList.remove('alert-message-author-name__show')
        alertAuthorNameEmpty.classList.remove('alert-message-author-name-empty__show')

        sticker.classList.remove('form-input__sticker-alert')
        alertSticker.classList.remove('alert-message-sticker__show')
    }


    function publishRequest() {
        successBanner.classList.add('success-banner__show')
        postJSON(postData);

    }

    async function postJSON(data) {
        try {
            const response = await fetch("api.php", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.text();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    }


    function handleForm(event) {
        event.preventDefault()           // просим форму не отправлять данные самостоятельно
        initializeForm()                  //инициализация вёрстки страницы (сброс баннеров и сообщений об ошибках)
        if (checkForm()) {
            publishRequest()         //отправка данных и сообщение об успехе
        }
    }


    function onPostMainImageLoad(image) {             //обработка загрузки основной картинки поста
        if (validateImageFile(image)) {
            postData.image_url = image
            mainPostImage.style.backgroundImage = `url(${image})`    //установка фонов
            previewMainImage.style.backgroundImage = `url(${image})`   // !правильно

            mainImageButtons.classList.add('buttons-block')
            uploadMainImgBut.classList.add('upload-button__show')
            removeMainImgBut.classList.add('remove-button__show')
        } else {
            alertBanner.classList.add('alert-banner__show')
        }
    }

    function onPostCardImageLoad(image) {             //обработка загрузки картинки карточки поста
        if (validateImageFile(image)) {
            postData.image_preview_url = image
            previewPostImage.style.backgroundImage = `url(${image})`    //установка фонов
            previewCardImage.style.backgroundImage = `url(${image})`

            previewImageButtons.classList.add('buttons-block')
            uploadPreviewImgBut.classList.add('upload-button__show')
            removePreviewImgBut.classList.add('remove-button__show')
        } else {
            alertBanner.classList.add('alert-banner__show')
        }
    }

    function onPostAuthorPhotoLoad(image) {             //обработка загрузки фото автора
        if (validateImageFile(image)) {
            postData.avatar_url = image
            authorPhoto.style.backgroundImage = `url(${image})`
            previewAuthorPhoto.style.backgroundImage = `url(${image})`

            uploadAuthorButton.classList.add('upload-author-button__new')
            removeAuthorButton.classList.add('remove-button__show')
        } else {
            alertBanner.classList.add('alert-banner__show')
        }
    }


    function readImageFile(input, imageProcessing, validSize) {
        const file = input.files[0]
        let reader = new FileReader();
        let imageSize = 0

        imageSize = file.size

        if (imageSize < validSize) {
            reader.readAsDataURL(file);
            reader.onload = function () {
                imageProcessing(reader.result)
            }
            reader.onerror = function () {
                console.log(reader.error);
            }
        } else {
            file.value = ""
        }
    }


    function uploadMainImage(event) {
        event.preventDefault()
        if (!readImageFile(mainPostImage, onPostMainImageLoad, maxSizeFileLarge)) {
            alertBanner.classList.add('alert-banner__show')
        }
    }
    function uploadMainImageAgain(event) {
        event.preventDefault()
        if (!readImageFile(uploadMainImgBut, onPostMainImageLoad, maxSizeFileLarge)) {
            alertBanner.classList.add('alert-banner__show')
        }
    }
    function removeMainImage() {
        postData.image_url = ''
        mainPostImage.value = ''
        mainPostImage.style.backgroundImage = `url(/images/upload-big-field.png)`
        previewMainImage.style.backgroundImage = `none`

        mainImageButtons.classList.remove('buttons-block')
        uploadMainImgBut.classList.remove('upload-button__show')
        removeMainImgBut.classList.remove('remove-button__show')
    }



    function uploadCardImage(event) {
        event.preventDefault()
        if (!readImageFile(previewPostImage, onPostCardImageLoad, maxSizeFileSmall)) {
            alertBanner.classList.add('alert-banner__show')
        }
    }
    function uploadCardImageAgain(event) {
        event.preventDefault()
        if (!readImageFile(uploadPreviewImgBut, onPostCardImageLoad, maxSizeFileSmall)) {
            alertBanner.classList.add('alert-banner__show')
        }
    }
    function removeCardImage() {
        postData.image_preview_url = ''
        previewPostImage.value = ''
        previewPostImage.style.backgroundImage = `url(/images/upload-middle-field.png)`
        previewCardImage.style.backgroundImage = 'none'

        previewImageButtons.classList.remove('buttons-block')
        uploadPreviewImgBut.classList.remove('upload-button__show')
        removePreviewImgBut.classList.remove('remove-button__show')
    }


    function uploadAuthorPhoto(event) {
        event.preventDefault()
        if (!readImageFile(authorPhoto, onPostAuthorPhotoLoad, maxSizeFileSmall)) {
            alertBanner.classList.add('alert-banner__show')
        }
    }
    function uploadAuthorPhotoAgain(event) {
        event.preventDefault()
        if (!readImageFile(uploadAuthorButton, onPostAuthorPhotoLoad, maxSizeFileSmall)) {
            alertBanner.classList.add('alert-banner__show')
        }
    }
    function removeAuthorPhoto() {
        postData.avatar_url = ''
        authorPhoto.value = ''
        authorPhoto.style.backgroundImage = `url(/images/upload-small-icon.png)`
        previewAuthorPhoto.style.backgroundImage = `none`

        uploadAuthorButton.classList.remove('upload-author-button__new')
        removeAuthorButton.classList.remove('remove-button__show')
    }

    function timestampToDate(ts) {
        let d = new Date();
        d.setTime(ts);
        return ('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + (d.getDate())).slice(-2) + '/' + d.getFullYear();
    }


    adminForm.addEventListener('submit', handleForm)   // обработчик события нажатия на кнопку, сам передает аргумент функции handleForm

    mainPostImage.addEventListener('change', uploadMainImage)  // обработчик события загрузки mainImage
    uploadMainImgBut.addEventListener('change', uploadMainImageAgain)
    removeMainImgBut.addEventListener('click', removeMainImage)    //обработчик события нажатия на кнопку удаления Main Image

    previewPostImage.addEventListener('change', uploadCardImage)  // обработчик события загрузки previewImage
    uploadPreviewImgBut.addEventListener('change', uploadCardImageAgain)
    removePreviewImgBut.addEventListener('click', removeCardImage)    //обработчик события нажатия на кнопку удаления preview Image

    authorPhoto.addEventListener('change', uploadAuthorPhoto)   //обработчик события загрузки фото автора
    uploadAuthorButton.addEventListener('change', uploadAuthorPhotoAgain)
    removeAuthorButton.addEventListener('click', removeAuthorPhoto)

    title.addEventListener("input", (event) => {
        previewArticleTitle.innerText = title.value;
        previewCardTitle.innerText = title.value;

        if (!title.value) {
            previewArticleTitle.innerText = "New Post";
            previewCardTitle.innerText = "New Post";
        }
    })

    subtitle.addEventListener("input", (event) => {
        previewArticleSubtitle.innerText = subtitle.value;
        previewCardSubtitle.innerText = subtitle.value;

        if (!subtitle.value) {
            previewArticleSubtitle.innerText = "Please, enter any description";
            previewCardSubtitle.innerText = "Please, enter any description";
        }
    })

    authorName.addEventListener("input", (event) => {
        previewAuthorName.innerText = authorName.value;

        if (!authorName.value) {
            previewAuthorName.innerText = "Enter author name";
        }
    })

    publishDate.addEventListener("change", event => {
        previewCardDate.innerText = timestampToDate(publishDate.valueAsNumber);
        postData.time_stamp = (publishDate.valueAsNumber) / 1000
        console.log(postData.time_stamp)
    })

    sticker.addEventListener("change", function () {
        if (sticker.value) {
            postData.sticker = sticker.value;
        }
    })

})

//добавить проверку на недопустимые символы в строковых инпутах
