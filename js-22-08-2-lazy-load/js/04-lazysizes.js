/*
 * Библиотека lazysizes
 * - feature detection
 */

if ('loading' in HTMLImageElement.prototype) {
  console.log('Браузер поддерживает lazyload');
  addSrcAttrToLazyImages();
} else {
  console.log('Браузер НЕ поддерживает lazyload');
  addLazySizesScript();
}

const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear');
}

function addLazySizesScript() {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';

  document.body.appendChild(script);
}//для сафари

function addSrcAttrToLazyImages() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
}

// <script
// src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
// integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
// crossorigin="anonymous"
// referrerpolicy="no-referrer"
// ></script>
