import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const createGalleryElement = function () {
    return  galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /></a>`
    }). join ("");
};

galleryBox.insertAdjacentHTML("afterbegin", createGalleryElement());


var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay:250});


