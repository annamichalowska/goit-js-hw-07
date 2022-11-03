import { galleryItems } from "./gallery-items.js";
// Change code below this line

const placeOfGallery = document.querySelector(".gallery");
const mainGallery = galleryItems;

const createGallery = mainGallery
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
  .join("");

placeOfGallery.insertAdjacentHTML("beforeend", createGallery);

placeOfGallery.addEventListener("click", (event) => {
  event.preventDefault();
  const bigImg = event.target.dataset.source;
  if (!bigImg) return;

  const instance = basicLightbox.create(`
<img src="${bigImg}" width="800" height="600"></img>
 `);
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && instance.visible()) instance.close();
  });
});

console.log(galleryItems);
