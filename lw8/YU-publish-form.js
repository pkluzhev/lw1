// load document

const form = document.getElementById('form');

const title = document.getElementById('title');
const subtitle = document.getElementById('description');
const authorName = document.getElementById('authorName');
const authorPhoto = document.getElementById('author-photo');
const publishDate = document.getElementById('publishDate');
const mainImage = document.getElementById('post-preview-main-image');
const postCardImage = document.getElementById('post-preview-card-image');
const postContent = document.getElementById('postContent');
const publishPost = document.getElementById('publishPost');
const errorPublishMessage = document.getElementById('errorPublishMessage');
const completePublishMessage = document.getElementById('completePublishMessage');
const featuredPost = document.getElementById('featuredPost');
const sticker = document.getElementById('sticker-form');
// const form = document.getElementById('form');


let mainImageBase64;
let authorPhotoBase64;
let newString = postContent.value.replace(/\n\r?/g, "\\n");
// Errors

const errorTitle = document.getElementById('errorTitle');
const errorSubtitle = document.getElementById('errorSubtitle');
const errorAuthorName = document.getElementById('errorAuthorName');



function previewAuthorPhoto() {
  const preview = document.getElementById("author-photo");
  const newImage = document.getElementById("upload-buttons-author-photo");
  const box = document.getElementById("author-photo-box");
  const previewPostCardAuthorPhoto = document.getElementById('previewPostCardAuthorPhoto');
  const previewPostCardAuthorPhotoBox = document.getElementById('previewPostCardAuthorPhotoBox');
  const file = document.getElementById("authorPhoto").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      preview.src = reader.result;
      previewPostCardAuthorPhoto.src = reader.result;
      authorPhotoBase64 = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
    box.classList.add('hidden');
    previewPostCardAuthorPhotoBox.classList.add('hidden');
    preview.classList.remove('hidden');
    newImage.classList.remove('hidden');
    previewPostCardAuthorPhoto.classList.remove('hidden');
    return authorPhotoBase64;
  }
}

const removeAuthorPhotoButton = document.getElementById('remove-author-photo');

function removeAuthorPhoto() {

  const preview = document.getElementById("author-photo");
  const newImage = document.getElementById("upload-buttons-author-photo");
  const box = document.getElementById("author-photo-box");
  const previewPostCardAuthorPhoto = document.getElementById('previewPostCardAuthorPhoto');
  const previewPostCardAuthorPhotoBox = document.getElementById('previewPostCardAuthorPhotoBox');

  box.classList.remove('hidden');
  preview.classList.add('hidden');
  newImage.classList.add('hidden');
  previewPostCardAuthorPhotoBox.classList.remove('hidden');
  previewPostCardAuthorPhoto.classList.add('hidden');
}

removeAuthorPhotoButton.addEventListener("click", removeAuthorPhoto);

function previewMainImage() {
  const preview = document.getElementById("post-preview-main-image");
  const newImage = document.getElementById("upload-buttons-main-image");
  const previewArticleImage = document.getElementById('previewArticleImage');
  const box = document.getElementById("post-preview-main-box");
  const boxArticle = document.getElementById("previewArticleImage-box");
  const file = document.getElementById("postPreviewMain").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      preview.src = reader.result;
      previewArticleImage.src = reader.result;
      mainImageBase64 = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
    box.classList.add('hidden');
    boxArticle.classList.add('hidden');
    previewArticleImage.classList.remove('hidden');
    preview.classList.remove('hidden');
    newImage.classList.remove('hidden');
    return mainImageBase64;
  }
}

const removeMainImageButton = document.getElementById('remove-main-image');

function removePreview() {

  const preview = document.querySelector("img.post-preview-main-image");
  const previewArticleImage = document.getElementById('previewArticleImage');
  const newImage = document.getElementById("upload-buttons-main-image");
  const box = document.getElementById("post-preview-main-box");
  const boxArticle = document.getElementById("previewArticleImage-box");

  box.classList.remove('hidden');
  preview.classList.add('hidden');
  newImage.classList.add('hidden');
  boxArticle.classList.remove('hidden');
  previewArticleImage.classList.add('hidden');
}

removeMainImageButton.addEventListener("click", removePreview);

function previewCardImage() {
  const preview = document.getElementById("post-preview-card-image");
  const newImage = document.getElementById("upload-buttons-card-image");
  const previewPostCardImageBox = document.getElementById('previewPostCardImageBox');
  const previewPostCardImage = document.getElementById('previewPostCardImage');
  const box = document.getElementById("post-preview-card-box");
  const file = document.getElementById("postPreviewCard").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      preview.src = reader.result;
      previewPostCardImage.src = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
    box.classList.add('hidden');
    preview.classList.remove('hidden');
    newImage.classList.remove('hidden');
    previewPostCardImageBox.classList.add('hidden');
    previewPostCardImage.classList.remove('hidden');
  }
}

const removeCardImageButton = document.getElementById('remove-card-image');

function removePreviewCard() {

  const preview = document.querySelector("img.post-preview-card-image");
  const newImage = document.getElementById("upload-buttons-card-image");
  const box = document.getElementById("post-preview-card-box");
  const previewPostCardImageBox = document.getElementById('previewPostCardImageBox');
  const previewPostCardImage = document.getElementById('previewPostCardImage');

  box.classList.remove('hidden');
  preview.classList.add('hidden');
  newImage.classList.add('hidden');
  previewPostCardImageBox.classList.remove('hidden');
  previewPostCardImage.classList.add('hidden');
}

removeCardImageButton.addEventListener("click", removePreviewCard);

// const previewMainImage = document.getElementById('post-preview-main-image');

title.addEventListener("input", (event) => {
  const previewArticleTitle = document.getElementById('previewArticleTitle');
  const previewPostCardTitle = document.getElementById('previewPostCardTitle');
  previewArticleTitle.innerText = title.value;
  previewPostCardTitle.innerText = title.value;

  if (!title.value) {
    previewArticleTitle.innerText = "New Post";
    previewPostCardTitle.innerText = "New Post";
  }

  validateTitle();
})

subtitle.addEventListener("input", event => {
  const previewArticleSubtitle = document.getElementById('previewArticleSubtitle');
  const previewPostCardSubtitle = document.getElementById('previewPostCardSubtitle');
  previewArticleSubtitle.innerText = subtitle.value;
  previewPostCardSubtitle.innerText = subtitle.value;

  if (!subtitle.value) {
    previewArticleSubtitle.innerText = "Please, enter any description";
    previewPostCardSubtitle.innerText = "Please, enter any description";
  }

  validateSubtitle();
})

// mainImage.addEventListener("change", event => {
//   const previewArticleImage = document.getElementById('previewArticleImage');
//   previewArticleImage.src = mainImage.src;
// } )

authorName.addEventListener("input", event => {
  const previewPostCardAuthorName = document.getElementById('previewPostCardAuthorName');
  authorName.value = authorName.value.replace(/[0-9]/g, "");
  previewPostCardAuthorName.innerText = authorName.value;

  if (authorName.value) {
    authorName.classList.add('form__input_not-empty');
  } else {
    authorName.classList.remove('form__input_not-empty');
    previewPostCardAuthorName.innerText = "Enter author name";
  }

  validateAuthorName();
})

function timestampToDate(ts) {
  let d = new Date();
  d.setTime(ts);
  return ('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + (d.getDate())).slice(-2) + '/' + d.getFullYear();
}

publishDate.addEventListener("change", event => {
  const previewPostCardPublishDate = document.getElementById('previewPostCardPublishDate');
  previewPostCardPublishDate.innerText = timestampToDate(publishDate.valueAsNumber);
})

postContent.addEventListener("change", event => {
  // newString.innerText = postContent.value.replace(/\n\r?/g, "\\n");
  console.log(postContent.value.replace(/\n\r?/g, "\\n"));
})

function validateForm(e) {
  e.preventDefault(); 
  validateTitle();
  validateSubtitle();
  validateAuthorName();
  validateMainImage();

  if (title.value && subtitle.value && postContent.value && authorName.value && authorPhotoBase64 && mainImageBase64 && publishDate.value) {
    console.log('"title": "'+title.value+'",');
    console.log('"subtitle": "'+subtitle.value+'",');
    console.log('"content": "'+postContent.value.replace(/\n\r?/g, "\\n")+'",');
    console.log('"author_name": "'+authorName.value+'",');
    console.log('"author_photo": "'+authorPhotoBase64+'",');
    console.log('"image": "'+mainImageBase64+'",');
    console.log('"publish_date": "'+publishDate.value+'",');
    completePublishMessage.classList.remove('hidden');
    errorPublishMessage.classList.add('hidden');
    // form.reset();
  } else {
    console.log('False');
    errorPublishMessage.classList.remove('hidden');
    completePublishMessage.classList.add('hidden');
  }
}

function validateTitle() {
  if (!title.value) {
    errorTitle.classList.remove('hidden');
    title.classList.add('form__input_error');
  } else {
    errorTitle.classList.add('hidden');
    title.classList.remove('form__input_error');
  }
}

function validateSubtitle() {
  if (!subtitle.value) {
    errorSubtitle.classList.remove('hidden');
    subtitle.classList.add('form__input_error');
  } else {
    errorSubtitle.classList.add('hidden');
    subtitle.classList.remove('form__input_error');
  }
}

function validateAuthorName() {
  if (!authorName.value) {
    errorAuthorName.classList.remove('hidden');
    authorName.classList.add('form__input_error');
  } else {
    errorAuthorName.classList.add('hidden');
    authorName.classList.remove('form__input_error');
  }
}

function validateMainImage() {
  if (!mainImageBase64) {
    console.log('False');
  } else {
    console.log('"'+'image'+'"'+': "'+mainImageBase64+'"');
  }
}

mainImage.addEventListener("click", validateMainImage);

function checkFeatured() {
  if (featuredPost.getAttribute(checked)) {
    console.log('true')
  } else {
    console.log('false');
  }
}

featuredPost.addEventListener("change", function() {
  if (this.checked) {
    sticker.classList.remove('hidden');
    console.log("Checkbox is checked..");
    console.log(sticker.value);
  } else {
    sticker.classList.add('hidden');
    console.log("Checkbox is not checked..");
  }
});

sticker.addEventListener("change", function () {
  if (sticker.value) {
    console.log(sticker.value);
  } else {
    console.log('False!');
  }
} )

// publishPost.addEventListener("submit",(e) =>{
//   e.preventDefault();
//   if (title.value && subtitle.value && mainImageBase64) {
//     console.log('title:' +title.value);
//     console.log('subtitle:' +subtitle.value);
//     console.log('image:' +mainImageBase64);
//   } else {
//     console.log('False')
//   }
// });


// const title = document.getElementById('title');
// const subtitle = document.getElementById('description');
// const authorName = document.getElementById('authorName');
// const authorPhoto = document.getElementById('author-photo');
// const publishDate = document.getElementById('publishDate');
// const mainImage = document.getElementById('post-preview-main-image');
// const postCardImage = document.getElementById('post-preview-card-image');
// const postContent = document.getElementById('postContent');
// const publishPost = document.getElementById('publishPost');

//  -----------------------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {

//   const ajaxSend = (formData) => {
//       fetch("api.php", { // файл-обработчик
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json", // отправляемые данные
//           },
//           body: JSON.stringify(formData)
//       })
//           .then(response => alert("Сообщение отправлено"))
//           .catch(error => console.error(error))
//   };

//   if (document.getElementsByTagName("form")) {
//       const forms = document.getElementsByTagName("form");

//       for (let i = 0; i < forms.length; i++) {
//           forms[i].addEventListener("submit", function (e) {
//               e.preventDefault();

//               let formData = new FormData(this);
//               formData = Object.fromEntries(formData);

//               ajaxSend(formData)
//                   .then((response) => {
//                       console.log(response);
//                   })
//                   .catch((err) => console.error(err))
//           });
//       };
//   }
// });


//  ------------------------   7lab
// const form = document.getElementById('form');

// form.addEventListener('submit', async event => {
//   event.preventDefault();

//   const formData = new FormData();
//   if (title.value && subtitle.value && postContent.value && authorName.value && authorPhotoBase64 && mainImageBase64 && publishDate.value) {
//   formData.append("title", title.value);
//   formData.append("subtitle", subtitle.value);
//   formData.append("content", postContent.value.replace(/\n\r?/g, "\\n"));
//   formData.append("author_name", authorName.value);
//   formData.append("author_photo", authorPhotoBase64);
//   formData.append("image", mainImageBase64);
//   formData.append("publish_date", publishDate.value);
//   formData.append("featured", 1);
//   formData.append("post_note", "great");

//   console.log(Array.from(formData));
//   }
//   try {
//     const res = await fetch(
//       '/api.php',
//       {
//         method: 'POST',
//         body: formData,
//       },
//     );

//     const resData = await res.json();

//     console.log(resData);
//   } catch (err) {
//     console.log(err.message);
//   }
// });
