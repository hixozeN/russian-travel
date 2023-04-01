import { listItemContainer } from "./utils/selectors.js";
import { items } from "./utils/items.js";
import createItem from "./createItem.js";

function renderListItems(lang) {
  listItemContainer.innerHTML = '';
  items.forEach(item => listItemContainer.append(createItem(item, lang)));
};

export default renderListItems;
