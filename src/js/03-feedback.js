const trottle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
  submitBtn: document.querySelector('.feedback-form button'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', trottle(onFormInput, 500));

const formValue = {
  email: refs.emailInput.value,
  message: refs.textarea.value,
};

function formAutocomplete() {
  const dataShow = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (dataShow) {
    formValue.email = dataShow.email;
    formValue.message = dataShow.message;
  }
}
formAutocomplete();

function onFormSubmit(evt) {
  evt.preventDefault();

  localStorage.removeItem('feedback-form-state');
  // formValue.email = '';
  // formValue.message = '';
  refs.form.reset();
}

function onFormInput(event) {
  const mail = formValue.email;
  const message = formValue.message;

  const dataSave = {
    mail,
    message,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(dataSave));
}
