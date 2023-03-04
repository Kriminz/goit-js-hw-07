import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const createGallery = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML("beforeend", createGallery);

// Створення розмітки
function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    `;
    })
    .join("");
}

// Cтворення Lightbox
var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});

