// Add imports above this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const gallary = document.querySelector('.gallery');

const cardsGallery = imgCards(galleryItems);

function imgCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(' ');
}
gallary.insertAdjacentHTML('beforeend', cardsGallery);

gallary.addEventListener('click', clickBtn);

function clickBtn(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
}
let lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: '250',
});
lightbox.show();
