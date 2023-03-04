import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const createGallery = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML("beforeend", createGallery);

// Створення розмітки
function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
      </div>
    `;
    })
    .join("");
}

gallery.addEventListener("click", checkCurrentImage);

function checkCurrentImage(event) {
// Заборона завантаження картинки
  event.preventDefault();

// Перевірка місця кліку
  checkClickPlase(event);

// Створення модального вікна з більшим зображенням
  createModal(event);
}

function checkClickPlase(event) {
  const isImage = event.target.classList.contains("gallery__image");

  if (!isImage) {
    return;
  }
}

function createModal(event) {
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" height="600">`);

instance.show();

gallery.addEventListener('keydown', (e) => {
  if(e.code === "Escape"){
    instance.close();
  }
});
}