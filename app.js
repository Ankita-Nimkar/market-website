const menu = document.querySelector(".menu");
const header = document.querySelector(".header");
const layer = document.querySelector(".layer");
const up = document.querySelector(".up");
const middle = document.querySelector(".middle");
const down = document.querySelector(".down");
const hero = document.querySelector(".hero");
const button = document.querySelector(".hero--button");
const nav = document.querySelector(".menu--links");
const menulink = document.querySelectorAll(".menu--link");
let showMenu = false;
menu.addEventListener("click", () => {
  if (!showMenu) {
    console.log("hi");
    header.classList.add("layer");
    hero.style.visibility = "hidden";
    button.style.visibility = "hidden";
    up.classList.add("rotate");
    middle.style.visibility = "hidden";
    down.classList.add("reverseRotate");
    nav.style.display = "block";
    nav.classList.add("menuLinks");
    menulink.forEach((link) => {
      link.classList.add("menuLink");
    });
    showMenu = true;
  } else {
    console.log("bye");
    header.classList.remove("layer");
    hero.style.visibility = "visible";
    button.style.visibility = "visible";
    up.classList.remove("rotate");
    middle.style.visibility = "visible";
    down.classList.remove("reverseRotate");
    nav.style.display = "none";
    nav.classList.remove("menuLinks");
    showMenu = false;
  }
});
