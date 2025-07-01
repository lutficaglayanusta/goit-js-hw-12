import axios from 'axios';
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';
// Dokümantasyonda belirtilen import
import SimpleLightbox from 'simplelightbox';
// Stil importu
import 'simplelightbox/dist/simple-lightbox.min.css';

const api_key = '51088577-7b521529318281431558696f8';

const form = document.getElementById('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  gallery.innerHTML = '';

  const input = e.target.elements.search.value;

  if (input === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
    }
    loader.style.display = 'block';

  try {
    const { data } = await axios.get('https://pixabay.com/api', {
      params: {
        key: api_key,
        q: input,
        image_type: 'photo',
      },
    });
      loader.style.display = 'none';
      
    if (data.hits.length === 0) {
      iziToast.info({
        title: 'Warning',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    const images = data.hits
      .map(
        hit => `<li class="gallery-item">
                <a href="${hit.largeImageURL}">
                  <img src="${hit.webformatURL}" width='360' height='200' alt="${hit.tags}">
                </a>
                
                <ul>
                    <li><b>Likes</b> ${hit.likes}</li>
                    <li><b>Views</b> ${hit.views}</li>
                    <li><b>Comments</b> ${hit.comments}</li>
                    <li><b>Downloads</b> ${hit.downloads}</li>
                </ul>
                
                
            </li>`
      )
      .join('');

    gallery.insertAdjacentHTML('beforeend', images);

    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
    }
    form.reset();
});
