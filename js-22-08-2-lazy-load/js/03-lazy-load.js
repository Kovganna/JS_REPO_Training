/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 */


const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// console.log(lazyImages);

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, {once:true})
})

function onImageLoaded(evt) {
  console.log();
console.log('Picture loaded');
evt.target.classList.add('appear');
}

// const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// lazyImages.forEach(image => {
//   image.addEventListener('load', onImageLoaded, { once: true });
// });

// function onImageLoaded(evt) {
//   console.log('Картинка загрузилась');
//   evt.target.classList.add('appear');
// }
