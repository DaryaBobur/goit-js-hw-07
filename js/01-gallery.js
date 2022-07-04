import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createGallery(galleryItems));

galleryEl.addEventListener('click', cardGallery);

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
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
</div> `
    }).join('');
}

function cardGallery(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
 
  document.addEventListener('keydown', closeModalEsc);


  const instance = basicLightbox.create(`
	<img width="1280" height="auto" src= "${e.target.dataset.source}">`);
  instance.show();

  function closeModalEsc(e) {
    if (e.code === "Escape") {
    instance.close()
    document.removeEventListener('keydown', closeModalEsc);
    }
    
  }
    
}

console.log(galleryItems);