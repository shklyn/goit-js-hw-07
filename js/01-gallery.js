import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryEl = document.querySelector("div.gallery");

galleryEl.innerHTML = galleryItems.reduce(
  (html, current) =>
    html +
    `<div class="gallery__item">
  <a class="gallery__link" href="${current.original}">
    <img
      class="gallery__image"
      src="${current.preview}"
      data-source="${current.original}"
      alt="${current.description}"
    />
  </a>
</div> `,
  ""
);

// 2. Реалізація делегування на div.gallery і отримання url великого зображення.

galleryEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }

    // 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
    // 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

    const instance = basicLightbox.create(`<img width="1400" height="900" src="${e.target.dataset.source}">`);
    instance.show();
    
    // Escape closing
    galleryEl.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    });
});


