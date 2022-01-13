const trotlle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
  submitBtn: document.querySelector('.feedback-form button'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', trotlle(onFormInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);

  formData.forEach((value, name) => {
    // console.log(name);
    // console.log(value);
  });
}

function onFormInput(event) {
  const formElements = event.currentTarget.elements;
  console.log(formElements);
  const mail = formElements.email.value;

  const message = formElements.message.value;

  const dataSave = {
    mail,
    message,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(dataSave));
  const dataShow = JSON.parse(localStorage.getItem('feedback-form-state'));
}
