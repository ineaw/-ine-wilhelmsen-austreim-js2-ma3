import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

createMenu();

if (!id) {
  document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id;

console.log(productUrl);

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    document.title = details.name;

    const container = document.querySelector(".detail-container");

    container.innerHTML = `<h1>${details.Name}</h1>
                            <p>${details.Price} NOK</p>
                            <p>${details.Description}</p>`;

    console.log(details);
  } catch (error) {}
})();
