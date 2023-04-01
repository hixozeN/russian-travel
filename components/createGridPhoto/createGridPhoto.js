import { photoGridTemplate } from "./utils/selectors.js";

function createGridPhoto(photo, lang) {
  const newItem = photoGridTemplate.querySelector('.photo-grid__item').cloneNode(true);

  const itemImage = newItem.querySelector('.photo-grid__image');
  const itemCaption = newItem.querySelector('.photo-grid__item-caption');

    itemImage.alt = photo.name[lang];
    itemCaption.textContent = photo.name[lang];

  itemImage.src = photo.link;

  return newItem;
}

export default createGridPhoto;
