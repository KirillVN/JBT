// menu button
import {showNav, menuBtn, menu} from "./nav.js"
menuBtn.addEventListener('click', showNav)

// slider
import {nextSlide, showSlide, currentSlide, images} from "./slider.js"
const intervalID = setInterval(nextSlide, 5000);

// indicators slider 
import {activeDot, dots, getDot} from "./indicators.js"
  dots.addEventListener('click', activeDot)
  dots.addEventListener('click', getDot)

