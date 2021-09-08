import '../css/common.css';
import '../css/gallery.css';
import countries from './countries.json';
import itemsTemplate from '../templates/gallery-items.hbs';

const galleryRef = document.querySelector('.js-gallery');

const markup = itemsTemplate(countries);
galleryRef.insertAdjacentHTML('beforeend', markup);


//perfomance.now()
var now = require("performance-now")
var start = now()
var end = now()
console.log(start.toFixed(3)) // the number of milliseconds the current node process is running
console.log((start-end).toFixed(3)) // ~ 0.002 on my system