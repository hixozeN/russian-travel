import renderGridPhoto from "../createGridPhoto/renderGridPhoto.js";
import renderPlaces from "../createPlace/renderPlace.js";
import renderListItems from "../introListItem/renderItems.js";
import { langConfig } from "./utils/langConfig.js";
import {
  logo,
  leadTitle, leadSubtitle, leadImage, leadCaption,
  introTitle, introText,
  coverTitle, coverSubtitle,
  footerNavMap, footerNavWeather, footerNavSchedule,
  footerNavCalendar, footerNavTravel,
  footerCopyright
 } from "./utils/selectors.js"

function changeLang(lang) {
  document.title = langConfig.title[lang];

  logo.src = `./images/header-logo-${lang}.png`;

  leadTitle.textContent = langConfig.leadTitle[lang];
  leadSubtitle.textContent = langConfig.leadSubtitle[lang];
  leadImage.alt = langConfig.leadImageAlt[lang];
  leadCaption.textContent = langConfig.leadCaption[lang];

  introTitle.innerHTML = langConfig.introTitle[lang];
  introText.innerHTML = langConfig.introText[lang];

  coverTitle.innerHTML = langConfig.coverTitle[lang];
  coverSubtitle.textContent = langConfig.coverSubtitle[lang];

  footerNavMap.textContent = langConfig.footer.map[lang];
  footerNavWeather.textContent = langConfig.footer.weather[lang];
  footerNavSchedule.textContent = langConfig.footer.schedule[lang];
  footerNavCalendar.textContent = langConfig.footer.calendar[lang];
  footerNavTravel.textContent = langConfig.footer.travel[lang];

  footerCopyright.textContent = langConfig.footer.copyright[lang];

  renderListItems(lang);
  renderGridPhoto(lang);
  renderPlaces(lang);
};

export default changeLang;
