let scrollPosition = 0;
let scrollAmount = 320;

const signsCont = document.querySelector(".signs-container");
const horizScroll = document.querySelector(".horiz-scroll")
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");

btnScrollLeft.style.opacity = "0";

let maxScroll = -signsCont.offsetWidth + horizScroll.offsetWidth;

function scrollHorizontally(val) {
    scrollPosition += (val * scrollAmount);

    if(scrollPosition >= 0){
        scrollPosition = 0
        btnScrollLeft.style.opacity = "0";
    } else {
        btnScrollLeft.style.opacity = "1";
    }

    if (scrollPosition <= maxScroll) {
        scrollPosition = maxScroll;
        btnScrollRight.style.opacity = "0";
    } else {
        btnScrollRight.style.opacity = "1";
    }

    signsCont.style.left = scrollPosition + "px";
}