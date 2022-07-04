import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createGallery(galleryItems));

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
   <li class="gallery__list"><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>`
    }).join('');
}
        
new SimpleLightbox('.gallery__item', {
    captionSelector: 'img',
    captionsData: 'alt',
    captionsPosition: 'bottom',
    captionDelay: 250
});

console.log(galleryItems);
