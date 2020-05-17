const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('tel');
const message = document.getElementById('message');

function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}


function showSuccess(input) {
  const formControl = input.parentElement;
	formControl.className = 'form-control success';
}


function checkRequired(inputArr) {
	inputArr.forEach(input => {

		if(input.value.trim() === '') {
		  const  attr  = input.getAttribute('attr')
			showError(input, `Lütfen ${attr} Giriniz`);
		}else {
			showSuccess(input);
	}
	});
}

function checklength(input, min, max) {
	if(input.value.length < min) {
		showError(input,`Lütfen ${min} Karakterden fazla giriniz.`)
	}else if (input.value.length > max) {
		showError(input,`Lütfen ${max} Karakterden az giriniz`)
	}else {
		showSuccess(input)
	}
}

function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(re.test(input.value.trim())) {
		showSuccess(input)
	}else {
		showError(input,'E-Mail Geçerli Değil');
	}
}

form.addEventListener('submit', function(e) {


	if(form.value === '' || userName.value === '' || email.value === '' || phone.value === '' || message.value === '') {
		e.preventDefault();
	}else {
		form.setAttribute('method', 'POST')
	}

	checkRequired([userName,email,phone,message]);
	checklength(userName, 3, 15);
	checklength(message, 20, 100);
	checkEmail(email)

})


const  phoneMask = IMask(
  phone, {
    mask: '0(000)000-00-00'
});