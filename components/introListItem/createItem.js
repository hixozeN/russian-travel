import { listItemTemplate } from "./utils/selectors.js"

function createItem(item, lang) {
  const newItem = listItemTemplate.querySelector('.intro__list-item').cloneNode(true);
  newItem.innerHTML = item[lang];
  return newItem;
};

export default createItem;
