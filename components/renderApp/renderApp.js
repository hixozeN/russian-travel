import renderGridPhoto from "../createGridPhoto/renderGridPhoto.js";
import renderPlaces from "../createPlace/renderPlace.js";
import renderListItems from "../introListItem/renderItems.js";
import changeLang from "../localization/changeLang.js";
import setLangEventListeners from "../localization/setLangListeners.js";
import { btnEn, btnRu } from "../localization/utils/selectors.js";

function renderApp(lang) {
  if (lang === 'en') {
    btnRu.classList.remove('header__lang-link_active');
    btnEn.classList.add('header__lang-link_active');
    renderListItems(lang);
    renderPlaces(lang);
    renderGridPhoto(lang);
    changeLang(lang);
  } else {
    btnRu.classList.add('header__lang-link_active');
    btnEn.classList.remove('header__lang-link_active');
    renderListItems('ru');
    renderPlaces('ru');
    renderGridPhoto('ru');
    changeLang('ru');
  }
  setLangEventListeners();
}

export default renderApp;
