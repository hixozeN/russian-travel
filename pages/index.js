import photoArray from "../utils/photoArray.js";

const photoContainer = document.querySelector('.photo-grid__list');
const photoGridTemplate = document.querySelector('#grid-item').content;

function createGridPhoto(photo) {
  const newItem = photoGridTemplate.querySelector('.photo-grid__item').cloneNode(true);

  const itemImage = newItem.querySelector('.photo-grid__image');
  const itemCaption = newItem.querySelector('.photo-grid__item-caption');

  itemImage.src = photo.link;
  itemImage.alt = photo.name;
  itemCaption.textContent = photo.name;

  return newItem;
}

photoArray.reverse().forEach(photo => photoContainer.prepend(createGridPhoto(photo)));
