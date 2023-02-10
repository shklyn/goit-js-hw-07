import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector("ul.gallery");

galleryEl.innerHTML = galleryItems.reduce(
  (html, current) =>
    html +
    `<a class="gallery__item" href="${current.original}">
  <img class="gallery__image" src="${current.preview}" alt="${current.description}" />
</a> `, "");


galleryEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }

    console.log(e.target.alt);
    

    new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});
});
