import { placeTemplate } from "./utils/selectors.js";

function createPlace(place, lang) {
  const placeItem = placeTemplate.querySelector('.place').cloneNode(true);

  const placeTitle = placeItem.querySelector('.place__title');
  const placeImage = placeItem.querySelector('.place__image');
  const placeLink = placeItem.querySelector('.place__link');
  const placeDescription = placeItem.querySelector('.place__paragraphes');

  placeTitle.textContent = place.title[lang];
  placeImage.src = place.imageLink;
  placeLink.textContent = place.siteName;
  placeLink.href = place.link;
  placeDescription.innerHTML = place.content[lang];

  return placeItem;
}

export default createPlace;
