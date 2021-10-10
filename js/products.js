import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";

const productsUrl = baseUrl + "products";

createMenu();

(async function () {
  const container = document.querySelector(".product-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";

    json.forEach(function (product) {
      container.innerHTML += `<a class="product" href="detail.html?id=${product.id}">
            <h3>${product.Name}</h3>
            <p>Price: ${product.Price} NOK</p>
            <button>Preview</button>
        </a>`;
    });
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-container");
  }
})();
