import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';
// Dokümantasyonda belirtilen import

import {
  renderImages,
  hideButton,
  hideLoader,
  showButton,
  showLoader,
  clearGallery,
} from './js/render-functions.js';
import { fetchImages } from './js/pixabay-api.js';

const form = document.querySelector('.form');

const button = document.querySelector('.load-more');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

let page=1;
let searchQuery = "";
const per_page = 40;
let totalHits = 0;

form.addEventListener('submit', async e => {
  e.preventDefault();
  page = 1;
  clearGallery();

  searchQuery = e.target.elements.search.value.trim();

  if (searchQuery === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term',
      position: 'topRight',
    });
    hideButton();
    return;
  }
  hideButton();
  showLoader();

  try {
    const images = await fetchImages(searchQuery, page, per_page);

    totalHits = images.totalHits;

    if (images.hits.length === 0) {
      iziToast.warning({
        title: 'Warning',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      hideButton();
      return;
    }
    renderImages(images.hits);

    if (totalHits > images.hits.length) {
      showButton();
    }
    if(totalHits <= images.hits.length){
      hideButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
    form.reset();
  }

  
});

button.addEventListener('click', async () => {
  page += 1;
  hideButton();

  showLoader();

  try {
    const images = await fetchImages(searchQuery, page, per_page);
    if (images.hits.length === 0) {
      iziToast.warning({
        title: 'Warning',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      hideButton();
      return;
    }
    
    renderImages(images.hits);

    const rect = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();

    window.scrollBy({
      top: rect.height * 2,
      behavior: 'smooth',
    });
    const totalLoaded = document.querySelectorAll('.gallery-item').length;

    if (totalLoaded >= totalHits){
      hideButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showButton();
    }
   
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
