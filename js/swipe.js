import { nextSlide } from "./slider.js";
let swipeStartX = null;
let swipeEndX = null;

function swipeStart(e) {
  swipeStartX = e.changedTouches[0].pageX;
}
function swipeEnd(e) {
  swipeEndX = e.changedTouches[0].pageX;
  if (swipeStartX < swipeEndX) {
    nextSlide();
  }
  if (swipeStartX > swipeEndX) {
    nextSlide();
  }
}
const banner = document.querySelector(".banner");

export { banner, swipeEnd, swipeStart, swipeStartX, swipeEndX };
