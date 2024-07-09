const email = document.getElementById('email');
const password = document.getElementById('password');
const submitForm = document.getElementById('loginSubmit');
const errorDiv = document.getElementById('errorMessageDiv');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');
const errorText = document.getElementById('error-message-text');

function show_hide_password(target) {
	let input = document.getElementById('password');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

const emailValidFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
let emailVal = false;

function validateEmail(value) {
	return emailValidFormat.test(value);
}

function checkEmail() {
	if (validateEmail(email.value)) {
		console.log('valid email!');
		emailVal = true;
		errorEmail.classList.add('hidden')
	} else {
		console.log('invalid email!');
		emailVal = false;
		errorEmail.classList.remove('hidden')
	}
	if ((email.value) /* && !emailVal */) {
		email.classList.add('form__input_not-empty');
		errorEmail.innerHTML = 'Incorrect email format. Correct format is ****@**.***'
	} else {
		email.classList.remove('form__input_not-empty');
		errorEmail.innerHTML = 'Email is required.'
	}
	if (emailVal){
		email.classList.remove('form__input_error');
	} else {
		email.classList.add('form__input_error');
	}
}

email.addEventListener('blur', checkEmail);

const passwordValidFormat = /^[a-zA-Z0-9]{6,}$/;
let passwordVal = false;

function validatePassword(value) {
	return passwordValidFormat.test(value);
}

function checkPassword() {
	if ((validatePassword(password.value)) && (password.value.length >= 6)) {  // вопрос )
		console.log('valid password!');
		passwordVal = true;
		errorPassword.classList.add('hidden')
	} else {
		console.log('invalid password!');
		passwordVal = false;
		errorPassword.classList.remove('hidden')
	}
	if ((password.value) /*&& !passwordVal*/) {
		password.classList.add('form__input_not-empty');
		errorPassword.innerHTML = 'The password must be between 6 and 20 characters (a-z, 0-9 only)'
	} else {
		password.classList.remove('form__input_not-empty');
		errorPassword.innerHTML = 'Password is required.'
	}
	if (passwordVal){
		password.classList.remove('form__input_error');
	} else {
		password.classList.add('form__input_error');
	}
}

password.addEventListener('blur', checkPassword);

function checkForm() {
	// submitForm.preventDefault();

	if (emailVal && passwordVal) {
		document.location.href = "admin.php";
	} else {
		if (emailVal == '' && passwordVal == '') {
			errorDiv.classList.remove('hidden');
			errorText.innerHTML = 'A-Ah! Check all fields,'
		} else {
			errorDiv.classList.remove('hidden');
			errorText.innerHTML = 'Email or password is incorrect.'
		}
	}
}
// function consoleLog() {
// 	console.log("email: " + email.value);
// 	console.log("password: " + password);
// }

submitForm.addEventListener("click", checkForm);



//error-description (text):
//Email is required.
//Incorrect email format. Correct format is ****@**.***

