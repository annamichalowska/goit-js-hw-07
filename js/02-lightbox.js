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
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

placeOfGallery.insertAdjacentHTML("beforeend", createGallery);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});

console.log(galleryItems);
