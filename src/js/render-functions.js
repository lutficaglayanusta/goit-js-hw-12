import SimpleLightbox from 'simplelightbox';
// Stil importu
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const button = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const renderImages = images => {
  loader.style.display = 'none';

  if (images.hits.length === 0) {
    iziToast.warning({
      title: 'Warning',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    button.style.display = 'none';
  } else {
    const markup = images.hits
      .map(
        image => `<li class="gallery-item">
                  <a href="${image.largeImageURL}">
                    <img src="${image.webformatURL}" width='360' height='200' alt="${image.tags}">
                  </a>
                  
                  <ul>
                      <li><b>Likes</b> ${image.likes}</li>
                      <li><b>Views</b> ${image.views}</li>
                      <li><b>Comments</b> ${image.comments}</li>
                      <li><b>Downloads</b> ${image.downloads}</li>
                  </ul>
                  
                  
              </li>`
      )
      .join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
    button.style.display = 'block';

    const galleryItem = document.querySelector('.gallery-item');

    const rect = galleryItem.getBoundingClientRect();

    window.scrollBy({ top: rect.height * 2, behavior: 'smooth' });
  }
};
