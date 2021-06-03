/* Effet Js */



TweenMax.to(".logo", 2, {
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.to(".entrep", 4, {
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.to("#navigation", 1, {
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.from("#navigation", 1.5, {
    delay: .2,
    y: -40,
    ease: Expo.easeIn
})

TweenMax.to(".presen", 2, {
    delay: 2.7,
    opacity: 1,
    ease: Expo.easeInOut
})
/* navbar qui apparait 1 par 1 */

TweenMax.from("#navigation a:nth-child(1)", 2.5, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})
TweenMax.from("#navigation a:nth-child(2)", 3, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})
TweenMax.from("#navigation a:nth-child(3)", 3.5, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})
TweenMax.from("#navigation a:nth-child(4)", 4, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

