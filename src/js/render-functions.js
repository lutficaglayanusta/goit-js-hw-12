import SimpleLightbox from 'simplelightbox';
// Stil importu
import 'simplelightbox/dist/simple-lightbox.min.css';


const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const button = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const renderImages = images => {
  const markup = images
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
};

export const clearGallery = () => {
  gallery.innerHTML = '';
}
export const showLoader = () => {
  loader.style.display = 'block';
};
export const hideLoader = () => {
  loader.style.display = 'none';
};
export const showButton = () => {
  button.style.display = 'block';
}
export const hideButton = () => {
  button.style.display = 'none';
};
