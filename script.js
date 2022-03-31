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

// image change functions

function ariesFunc() {

     let image = document.querySelector('#starImg');
     
     image.src = "./images/aries-star.png"

     var styles = {
         "margin-bottom": "-6rem",
         "width": "165px"
     }

    Object.assign(image.style, styles)
    
    document.querySelector('#mainPara').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nostrum expedita suscipit veniam, voluptatem ullam natus voluptatum hic delectus architecto?';

    document.querySelector('#signTitle').innerHTML = 'Aries'
}

function taurusFunc() {

     let image = document.querySelector('#starImg');
     image.src = "./images/taurus-star.png"

     var styles = {
         "margin-bottom": "-2rem",
         "width": "175px"
     }

    Object.assign(image.style, styles)
    
    document.querySelector('#mainPara').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nostrum expedita suscipit veniam, voluptatem ullam natus voluptatum hic delectus architecto?';

}

function geminiFunc() {

     let image = document.querySelector('#starImg');
     image.src = "./images/gemini-star.png"

     var styles = {
         "margin-bottom": "1.5rem",
         "width": "175px"
     }

    Object.assign(image.style, styles)
    
    document.querySelector('#mainPara').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nostrum expedita suscipit veniam, voluptatem ullam natus voluptatum hic delectus architecto?';

}