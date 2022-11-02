import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryFirst = document.querySelector(".gallery");

const instance = basicLightbox.create(`
   <img src="" width="800" height="600">
`);

instance.show();

console.log(galleryItems);
