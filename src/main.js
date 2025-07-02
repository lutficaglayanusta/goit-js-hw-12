import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';
// Dokümantasyonda belirtilen import

import { renderImages } from './js/render-functions.js';
import { fetchImages } from './js/pixabay-api.js';

const form = document.querySelector('.form');

const button = document.querySelector('.load-more');
const loader1 = document.querySelector('.loader1');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

let page = 1;
let input;
const per_page = 40;

form.addEventListener('submit', async e => {
  e.preventDefault();
  gallery.innerHTML = '';
  page = 1;

  input = e.target.elements.search.value.trim();

  if (input === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term',
      position: 'topRight',
    });
    button.style.display = 'none';
  } else {
    loader.style.display = 'block';

    const images = await fetchImages(input, page,per_page);

    renderImages(images);
  }

  form.reset();
});

button.addEventListener('click', async () => {
  page += 1;

  loader1.style.display = 'block';

  const images = await fetchImages(input, page,per_page);


  loader1.style.display = 'none';

  renderImages(images);
 

  const totalPages = Math.ceil(images.totalHits / per_page);

  if (page >= totalPages) {
    iziToast.warning({
      title: 'Warning',
      message: "We're sorry, but you've reached the end of search results",
      position: 'topRight',
    });
    button.style.display = 'none';
  }
});
