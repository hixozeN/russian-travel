import { placeContainer } from "./utils/selectors.js";
import places from "./utils/places.js";
import createPlace from "./createPlace.js";

function renderPlaces(lang) {
  placeContainer.innerHTML = '';
  places.forEach(place => placeContainer.append(createPlace(place, lang)))
}

export default renderPlaces;
