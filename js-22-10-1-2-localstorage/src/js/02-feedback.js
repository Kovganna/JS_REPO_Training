import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';
// var throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  // textarea: document.querySelector('.js-feedback-form  textarea'),
  input: document.querySelector('.js-feedback-form  input'),
};

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));
// refs.input.addEventListener('input', throttle(onNameInput, 200));

// populateTextarea();
// populateInput();

// // /*
// //  * - Останавливаем поведение по умолчанию
// //  * - Убираем сообщение из хранилища
// //  * - Очищаем форму
// //  */

// function onFormSubmit(e){
//   e.preventDefault();

//   console.log('Форма отправлена');

//   e.currentTarget.reset();//приводит форму в изначальное состояние

//   localStorage.removeItem('STORAGE_KEY');
//   localStorage.removeItem('feedback-name');
// }


// /*
//  * - Получаем значение поля
//  * - Сохраняем его в хранилище
//  * - Можно добавить throttle
//  */

// function onTextareaInput(e) {
//   const message = e.currentTarget.value;
 
//  localStorage.setItem('STORAGE_KEY', message);
// }

// function onNameInput(e) {
//   const name = e.currentTarget.value;

//  localStorage.setItem('feedback-name', name);
// }


// /*
//  * - Получаем значение из хранилища
//  * - Если там что-то было, обновляем DOM
//  */

function populateTextarea () {
 const savedMessage = localStorage.getItem('STORAGE_KEY');
 
 if(savedMessage) {
  console.log(savedMessage);
  refs.textarea.value = savedMessage;
 }
}

function populateInput () {
  const savedName = localStorage.getItem('feedback-name');

   if(savedName) {
   console.log(savedName);
   refs.input.value = savedName;
  }
 }

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя,
//  и все в одном обьекте


refs.form.addEventListener('input', e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  
  formData.forEach((value, name) => {
   
    console.log("onFormSubmit -> name", name)    
    console.log("onFormSubmit -> value", value)

    

  })
//     //  console.log(e.target.name);
//     //  console.log(e.target.value);

//      formData[e.target.name] = e.target.value;

  console.log(formData);
});



