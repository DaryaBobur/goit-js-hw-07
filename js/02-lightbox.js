import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createGallery(galleryItems));

galleryEl.addEventListener('click', cardGallery)

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
    }).join('');
}

function cardGallery(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
}  

}
        
let gallery = new SimpleLightbox('.gallery > a');
gallery.on('show.simplelightbox');


console.log(galleryItems);
