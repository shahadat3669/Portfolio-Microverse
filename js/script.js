const formObject = {
  name: '',
  email: '',
  message: '',
};

const form = document.querySelector('#formC');
const EMAIL_INVALID = 'Email should be in lowercase';

function showMessage(input, message) {
  const msg = document.querySelector('.small');
  msg.innerText = message;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidMsg) {
  const emailRegex = /^[_a-zA-Z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

form.addEventListener('submit', (event) => {
  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
  event.preventDefault();
});

form.name.addEventListener('change', () => {
  formObject[form.name.name] = form.name.value;
  localStorage.setItem('formData', JSON.stringify(formObject));
});
form.email.addEventListener('change', () => {
  formObject[form.email.name] = form.email.value;
  localStorage.setItem('formData', JSON.stringify(formObject));
});

form.message.addEventListener('change', () => {
  formObject[form.message.name] = form.message.value;
  localStorage.setItem('formData', JSON.parse(formObject));
});

if (JSON.parse(localStorage.getItem('formData')) === null) {
  formObject.name = '';
  formObject.email = '';
  formObject.message = '';
} else {
  formObject = JSON.parse(localStorage.getItem('formData'));
}

form.name.value = formObject.name;
form.email.value = formObject.email;
form.message.value = formObject.message;
