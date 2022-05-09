import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector(".gallery");

const createGalleryElement = function () {
    return  galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${ description } "
            />
        </a>
        </div>
        `
    }). join ("");
};

galleryBox.insertAdjacentHTML("afterbegin", createGalleryElement());
galleryBox.addEventListener('click', onGalleryItemClick);

let instance;

function onGalleryItemClick(evt) {
  evt.preventDefault();
  
    if(!evt.target.classList.contains('gallery__image')) {
    return;
  };
  const currentItemEl = evt.target;
  const currentItemUrl = currentItemEl.dataset.source;
  
  instance = basicLightbox.create(`<img src="${currentItemUrl}" width="800" height="600">`,
    {
      onShow: (instance) => window.addEventListener('keydown', onEscKeyPress),
		onClose: (instance) => window.removeEventListener('keydown', onEscKeyPress)})

  instance.show(); 
 
};


function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    instance.close();
  };
};





