import { getUserName } from "../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
  const { pathname } = document.location;

  const conatiner = document.querySelector(".menu-container");

  const username = getUserName();

  let authlink = `<a href="index.html" class="${pathname === "/index.html" ? "active" : ""}">Home</a>`;

  if (username) {
    authlink = `<a href="index.html" class="${pathname === "/index.html" ? "active" : ""}">Home</a>
                <a href="products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a>
                <button id="logout">Sign out ${username}</button>`;
  }

  console.log(username);

  conatiner.innerHTML = `<div class="menu">
      ${authlink}
      </div>
     `;
  logoutButton();
}
