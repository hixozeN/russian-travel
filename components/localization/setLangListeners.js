import changeLang from "./changeLang.js";
import { btnEn, btnRu } from "./utils/selectors.js";

function setLangButtonState(evt) {
  if (evt.target == btnRu) {
    btnRu.classList.add('header__lang-link_active');
    btnEn.classList.remove('header__lang-link_active');
  } else if (evt.target == btnEn) {
    btnRu.classList.remove('header__lang-link_active');
    btnEn.classList.add('header__lang-link_active');
  }
}
function setLangEventListeners() {
  btnRu.addEventListener('click', (evt) => {
    changeLang('ru');
    setLangButtonState(evt);
    localStorage.setItem('lang', 'ru');
  });
  btnEn.addEventListener('click', (evt) => {
    changeLang('en');
    setLangButtonState(evt);
    localStorage.setItem('lang', 'en');
  });
};

export default setLangEventListeners;
