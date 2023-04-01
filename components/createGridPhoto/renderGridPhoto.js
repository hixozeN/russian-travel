import { photoArray } from "./utils/photoArray.js";
import { photoContainer } from "./utils/selectors.js";
import createGridPhoto from "./createGridPhoto.js";

function renderGridPhoto(lang) {
  photoContainer.innerHTML = '';
  photoArray.reverse().forEach(photo => photoContainer.prepend(createGridPhoto(photo, lang)));
}

export default renderGridPhoto;
