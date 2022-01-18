const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
  submitBtn: document.querySelector('.feedback-form button'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function formAutocomplete() {
  const dataShow = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (dataShow) {
    refs.emailInput.value = dataShow.email;
    refs.textarea.value = dataShow.message;
  }
}
formAutocomplete();

function onFormSubmit(evt) {
  evt.preventDefault();
  // localStorage.removeItem('feedback-form-state');

  const formValue = {
    email: refs.emailInput.value,
    message: refs.textarea.value,
  };
  // console.log(formValue);
  refs.emailInput.value = '';
  refs.textarea.value = '';
  // refs.form.reset();
}

function onFormInput(event) {
  console.log(event.currentTarget);
  const email = refs.emailInput.value;
  const message = refs.textarea.value;

  const dataSave = {
    email,
    message,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(dataSave));
}
