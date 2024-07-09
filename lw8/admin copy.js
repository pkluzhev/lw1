
document.addEventListener('DOMContentLoaded', () => {
    const dataInput = {
        'title': '',
        'subtitle': '',
        'author_name': '',
        'author_photo': '',
        'publish_date': '',
        'image_large': '',
        'image_small': '',
    };

    const maxSizeFileSmall = 5242880;
    const maxSizeFileLarge = 10485760;

    const userSession = sessionStorage.getItem('auth');
    const userIconName = document.getElementById('user_letter');
    const logoutButton = document.getElementById('logout');

    const submitButton = document.getElementById('submit');

    const authorInputPhoto = document.getElementById('author_photo');
    const authorViewPhoto = document.getElementById('js-author_photo');
    const authorButtonImageUpload = document.getElementById('author-button-upload');
    const authorDropArea = document.getElementById('drop-area-author');
    const authorImageButtonRemove = document.getElementById('author_photo-remove');
    const authorPostViewPhoto = document.getElementById('js-view-author-image');

    const largeImageInputPhoto = document.getElementById('image-large');
    const largeImageViewPhoto = document.getElementById('js-image-large');
    const largeImageButtonImageUpload = document.getElementById('image-large_button_upload');
    const largeImageDropArea = document.getElementById('drop-image-large');
    const largeImageButtonRemove = document.getElementById('image-large-button-remove');
    const largePostImageViewPhoto = document.getElementById('js-view-image-post');

    const smallImageInputPhoto = document.getElementById('image-small');
    const smallImageViewPhoto = document.getElementById('js-image-small');
    const smallImageButtonImageUpload = document.getElementById('image-small_button_upload');
    const smallImageDropArea = document.getElementById('drop-image-small');
    const smallImageButtonRemove = document.getElementById('image-small-button-remove');
    const smallPostImageViewPhoto = document.getElementById('js-view-image-card');

    const titleInput = document.getElementById('js-title');
    const descriptionInput = document.getElementById('js-description');
    const authorNameInput = document.getElementById('js-author_name');
    const publishDate = document.getElementById('js-publish_date');
    const publishDateView = document.getElementById('js-publish_date-view');
    const textareaInput = document.getElementById('js-textarea');

    // var file = authorInputPhoto.files[0];
    // var formData = new FormData();
    // formData.append('photo', file);
    //for (var pair of formData.entries()) {console.log(pair[0]+','+pair[1]);}
    
    // submitButton.addEventListener('click', event => {
    //     event.preventDefault();
    //     const isValidEmail = validateEmailField(emailInput, emailErrorFiled);
    //     const isValidPassword = validatePasswordFiled(passwordInput, passwordErrorField);
    //     if (isValidEmail && isValidPassword) {
    //         if (!sessionStorage.getItem('auth')) {
    //             sessionStorage.setItem('auth', emailInput.value);
    //         }
    //         window.location.replace("/admin")
    //     } else {
    //         form.classList.add('anim_error');
    //         errorMassageField.classList.remove('hidden');
    //         errorMassageField.innerHTML = 'A-Ah! Check all fields';
    //         setTimeout(() => form.classList.remove('anim_error'), 1000)
    //     }
    // })


    [titleInput, descriptionInput, authorNameInput].map(elem => {
        elem.addEventListener('input', ev => {
            isFillInput(elem);
            document.querySelectorAll(`.${elem.getAttribute('id')}-view`).forEach(e => {
                elem.value ? e.innerHTML = elem.value : e.innerHTML = elem.getAttribute('placeholder');//
            })
        })
    });

    publishDate.addEventListener('change', ev => {
        isFillInput(publishDate); 
        publishDateView.innerHTML = String(new Date(publishDate.value).toLocaleDateString()).replaceAll('.', '/')
    });

    [titleInput, descriptionInput, authorNameInput, publishDate, textareaInput].map(elem => {
        elem.addEventListener('blur', ev => {
            validateInput(elem)
        })
    });

    
    
    //
    if (sessionStorage.getItem('auth')) {
        userIconName.innerHTML = userSession[0];
    } else {
       // window.location.replace("/home")
    };

    logoutButton.addEventListener('click', event => {
        sessionStorage.removeItem('auth');
        window.location.replace("/login");
    });

    [authorDropArea, largeImageDropArea, smallImageDropArea].map(element => {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            element.addEventListener(eventName, preventDefaults);
        });
    });

    authorDropArea.addEventListener('drop', ev => handleDrop(ev, authorViewPhoto, authorPostViewPhoto, 'author_photo'));
    largeImageDropArea.addEventListener('drop', ev => handleDrop(ev, largeImageViewPhoto, largePostImageViewPhoto, 'image_large'));
    smallImageDropArea.addEventListener('drop', ev => handleDrop(ev, smallImageViewPhoto, smallPostImageViewPhoto, 'image_small'));

    authorInputPhoto.addEventListener('change', ev => {
        const file = authorInputPhoto.files[0];
        if (validateTypeFile(file, authorViewPhoto)) {
            uploadFile(file, authorViewPhoto, authorPostViewPhoto, 'author_photo');//
            activeButton(authorViewPhoto);
        }
    });

    largeImageInputPhoto.addEventListener('change', ev => {
        const file = largeImageInputPhoto.files[0];
        if (validateTypeFile(file, largeImageViewPhoto)) {
            uploadFile(file, largeImageViewPhoto, largePostImageViewPhoto, largePostImageViewPhoto, 'image_large');
            activeButton(largeImageViewPhoto);
        }
    });

    smallImageInputPhoto.addEventListener('change', ev => {
        const file = smallImageInputPhoto.files[0];
        if (validateTypeFile(file, smallImageViewPhoto)) {
            uploadFile(file, smallImageViewPhoto, smallPostImageViewPhoto, 'image_small');
            activeButton(smallImageViewPhoto);
        }
    });

    [authorViewPhoto, authorButtonImageUpload].map(event => {
        event.addEventListener('click', ev => authorInputPhoto.click())
    });

    [largeImageViewPhoto, largeImageButtonImageUpload].map(event => {
        event.addEventListener('click', ev => largeImageInputPhoto.click())
    });
    
    [smallImageViewPhoto, smallImageButtonImageUpload].map(event => {
        event.addEventListener('click', ev => smallImageInputPhoto.click())
    });

    authorImageButtonRemove.addEventListener('click', ev => {
        authorViewPhoto.removeAttribute('style');
        authorPostViewPhoto.removeAttribute('style');
        authorViewPhoto.querySelector('.admin-form__photo_icon').classList.remove('hidden');
        disableButton(authorViewPhoto);
        dataInput['author_photo'] = '';
    });

    largeImageButtonRemove.addEventListener('click', ev => {
        largeImageViewPhoto.removeAttribute('style');
        largePostImageViewPhoto.removeAttribute('style');
        largeImageViewPhoto.querySelector('.admin-form__photo_icon').classList.remove('hidden');
        disableButton(largeImageViewPhoto);
        dataInput['image_large'] = '';
    });

    smallImageButtonRemove.addEventListener('click', ev => {
        smallImageViewPhoto.removeAttribute('style');
        smallPostImageViewPhoto.removeAttribute('style');
        smallImageViewPhoto.querySelector('.admin-form__photo_icon').classList.remove('hidden');
        disableButton(smallImageViewPhoto);
        dataInput['image_small'] = '';
    });


    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation(); //
    }

    function handleDrop(e, viewField, viewFieldPost, dataItem) {
        let dt = e.dataTransfer;
        let file = dt.files[0];

        if (validateTypeFile(file, viewField)) {
            uploadFile(file, viewField, viewFieldPost, dataItem);
            activeButton(viewField);
        }
    }

    function uploadFile(file, viewField, viewFieldPost, dataItem) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            //
            viewField.style.border = 0;
            dataInput[dataItem] = reader.result;
            viewField.style.backgroundImage = `url('${reader.result}')`;
            viewFieldPost.style.backgroundImage = `url('${reader.result}')`;
            viewField.querySelector('.admin-form__photo').classList.add('hidden');
        }
    }

    function validateTypeFile(file, viewField) {
        const validExtension = ['png', 'jpeg', 'gif'];//
        const extension = file.type.replace('image/', '');
        const fieldWrapper = viewField.parentElement; //
        const isLargeImage = viewField === largeImageInputPhoto;
        const errorFiled = fieldWrapper.querySelector('.admin-form__hidden-error');

        if (validExtension.includes(extension) && (file.size <= (isLargeImage ? maxSizeFileLarge : maxSizeFileSmall))) {
            viewField.parentElement.classList.remove('error');//
            errorFiled.innerHTML = '';
            return true;
        }

        if (!validExtension.includes(extension)) {
            errorFiled.innerHTML = 'Incorrect file extension';
        }

        if (isLargeImage) {
            file.size > maxSizeFileLarge ? errorFiled.innerHTML = 'Maximum file size exceeded' : errorFiled.innerHTML = '';
        } else {
            file.size > maxSizeFileSmall ? errorFiled.innerHTML = 'Maximum file size exceeded' : errorFiled.innerHTML = '';
        }

        viewField.parentElement.classList.add('error');
        return false;
    }

    function activeButton(viewField) {
        const fieldWrapper = viewField.parentElement;
        if (viewField === authorViewPhoto) {
            authorButtonImageUpload.innerHTML = 'Upload New';
        }
        fieldWrapper.classList.add('upload');
    }

    function disableButton(viewField) {
        const fieldWrapper = viewField.parentElement;
        if (viewField === authorViewPhoto) {
            authorButtonImageUpload.innerHTML = 'Upload';
        }
        fieldWrapper.classList.remove('upload');
    }

    function isFillInput(input) {
        input.value ? input.classList.add('fill') : input.classList.remove('fill')
    }

    function validateInput(elem) {
        const parent = elem.parentElement;
        const labelText = parent.querySelector('.admin-form__label').innerText;

        if (elem.value) {
            parent.classList.remove('error');
            parent.querySelector('.admin-form__hidden-error').innerHTML = '';
        } else {
            parent.classList.add('error');
            parent.querySelector('.admin-form__hidden-error').innerHTML = `${labelText} is required.`; 
        }
    }
})
