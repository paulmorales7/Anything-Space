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

function cancerFunc() {

     let image = document.querySelector('#starImg');
     image.src = "./images/cancer-star.png"

     var styles = {
         "margin-bottom": "1.2rem",
         "width": "195px"
     }

    Object.assign(image.style, styles)
    
    document.querySelector('#mainPara').innerHTML = 'Cancers have a reputation for being hyper emotional, temperamental, and spiteful. Cancers, in additional to being devoted, are extremely fond of their loved ones, often to an unhealthy degree. They place a high value on family and close friends, and will go to great lengths to defend them, no matter the price. Very reliant on their instincts, usually acting upon them.'

    document.querySelector('#descSign').innerHTML = 'Element: WATER'

    document.querySelector('#descDate').innerHTML = 'Dates: JUNE 21 - JULY 22'

    document.querySelector('#descComp').innerHTML = 'Compatibility: CAPRICORN, TAURUS'

    document.querySelector('#descColor').innerHTML = 'Color: WHITE'

    document.querySelector('#descNum').innerHTML = 'Lucky Numbers: 2, 3, 15, 20'

    document.querySelector('#signTitle').innerHTML = 'Cancer'
}

function cancerFunc() {

     let image = document.querySelector('#starImg');
     image.src = "./images/cancer-star.png"

     var styles = {
         "margin-bottom": "1.2rem",
         "width": "195px"
     }

    Object.assign(image.style, styles)
    
    document.querySelector('#mainPara').innerHTML = 'Cancers have a reputation for being hyper emotional, temperamental, and spiteful. Cancers, in additional to being devoted, are extremely fond of their loved ones, often to an unhealthy degree. They place a high value on family and close friends, and will go to great lengths to defend them, no matter the price. Very reliant on their instincts, usually acting upon them.'

    document.querySelector('#descSign').innerHTML = 'Element: WATER'

    document.querySelector('#descDate').innerHTML = 'Dates: JUNE 21 - JULY 22'

    document.querySelector('#descComp').innerHTML = 'Compatibility: CAPRICORN, TAURUS'

    document.querySelector('#descColor').innerHTML = 'Color: WHITE'

    document.querySelector('#descNum').innerHTML = 'Lucky Numbers: 2, 3, 15, 20'

    document.querySelector('#signTitle').innerHTML = 'Cancer'
}

function leoFunc() {

     let image = document.querySelector('#starImg');
     image.src = "./images/leo-star.png"

     var styles = {
         "margin-bottom": "1.2rem",
         "width": "195px"
     }

    Object.assign(image.style, styles)
    
    document.querySelector('#mainPara').innerHTML = 'Leos are the natural leaders of the zodiac, as magnificent and striking as the Lion that embodies their sign. Leos are radiantly joyful, liberal with their appeal and endowments. They are fiercely proud and confident. They love and live life to the fullest rather than being in charge at home, work, and play.Leos are very loving and creative, this is why there are many famous Leo performers in the world.'

    document.querySelector('#descSign').innerHTML = 'Element: FIRE'

    document.querySelector('#descDate').innerHTML = 'Dates: JULY 23 - AUGUST 22'

    document.querySelector('#descComp').innerHTML = 'Compatibility: AQUARIUS, GEMINI'

    document.querySelector('#descColor').innerHTML = 'Color: GOLD, YELLOW, ORANGE'

    document.querySelector('#descNum').innerHTML = 'Lucky Numbers: 1, 3, 10, 19'

    document.querySelector('#signTitle').innerHTML = 'Leo'
}

function virgoFunc() {

     let image = document.querySelector('#starImg');
     image.src = "./images/virgo-star.png"

     var styles = {
         "margin-bottom": "1.2rem",
         "width": "195px"
     }

    Object.assign(image.style, styles)
    
    document.querySelector('#mainPara').innerHTML = 'Virgos are known for being perfectionists, and can be meticulous and single-minded in their pursuit of improvement. However, this also makes them extremely dedicated to the people in their lives, and helps them find success professionally. Virgos are very hard workers and are not afraid to throw themselves into work, no matter the difficulty of the task. This also means they have high standards and can be overly judgemental and critical towards others and their work.'

    document.querySelector('#descSign').innerHTML = 'Element: EARTH'

    document.querySelector('#descDate').innerHTML = 'Dates: AUGUST 23 - SEPTEMBER 22'

    document.querySelector('#descComp').innerHTML = 'Compatibility: PISCES, CANCER'

    document.querySelector('#descColor').innerHTML = 'Color: GREY, BEIGE, PALE-YELLOW'

    document.querySelector('#descNum').innerHTML = 'Lucky Numbers: 5, 14, 15, 23, 32'

    document.querySelector('#signTitle').innerHTML = 'Virgo'
}