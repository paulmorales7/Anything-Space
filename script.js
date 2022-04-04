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
    
    document.querySelector('#mainPara').innerHTML = 'Aries is the first sign of the Zodiac. They are associated with fresh vigor and new beginnings. Individuals born under this sign are said to have an enthusiastic, adventurous, and passionate character. They are usually ambitious, humorous, and pioneering.';

    document.querySelector('#descSign').innerHTML = 'Element: FIRE'

    document.querySelector('#descDate').innerHTML = 'Dates: MARCH 21 - APRIL 19'

    document.querySelector('#descComp').innerHTML = 'Compatibility: LIBRA, LEO'

    document.querySelector('#descColor').innerHTML = 'Color: RED'

    document.querySelector('#descNum').innerHTML = 'Lucky Numbers: 1, 8, 17'
    
    document.querySelector('#signTitle').innerHTML = 'Aries'
}

function taurusFunc() {

     let image = document.querySelector('#starImg');
     image.src = "./images/taurus-star.png"

     var styles = {
         "margin-bottom": "-.77rem",
         "width": "195px"
     }

    Object.assign(image.style, styles)
    
    document.querySelector('#mainPara').innerHTML = 'Taurus signs are known for theur passion, dependability, and elegance, and they are sometimes regarded as the most attractive of all the signs. They generate satisfaction and respect in people because they are pleasant, loving, and honest. They also have a strong desire for social stability.';

    document.querySelector('#descSign').innerHTML = 'Element: EARTH'

    document.querySelector('#descDate').innerHTML = 'Dates: APRIL 20 - MAY 20'

    document.querySelector('#descComp').innerHTML = 'Compatibility: SCORPIO, CANCER'

    document.querySelector('#descColor').innerHTML = 'Color: GREEN, PINK'

    document.querySelector('#descNum').innerHTML = 'Lucky Numbers: 2, 6, 9, 12, 24'

    document.querySelector('#signTitle').innerHTML = 'Taurus'
}

function geminiFunc() {

     let image = document.querySelector('#starImg');
     image.src = "./images/gemini-star.png"

     var styles = {
         "margin-bottom": "3.2rem",
         "width": "195px"
     }

    Object.assign(image.style, styles)
    
    document.querySelector('#mainPara').innerHTML = 'Geminis are very intelligent and pick up knowledge quickly. They are perceptive, analytical, and often very funny. They have an unreserved and childlike curiosity, always asking new questions. They have an uncanny ability to size up a person’s character very quickly.'

    document.querySelector('#descSign').innerHTML = 'Element: AIR'

    document.querySelector('#descDate').innerHTML = 'Dates: MAY 21 - JUNE 20'

    document.querySelector('#descComp').innerHTML = 'Compatibility: SAGITTARIUS, AQUARIUS'

    document.querySelector('#descColor').innerHTML = 'Color: LIGHT-GREEN, YELLOW'

    document.querySelector('#descNum').innerHTML = 'Lucky Numbers: 5, 7, 14, 23'

    document.querySelector('#signTitle').innerHTML = 'Gemini'
}