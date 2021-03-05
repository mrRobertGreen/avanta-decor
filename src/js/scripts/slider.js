$('.discounts__slider').slick({
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
    dots: true,
    centerMode: true,
    // slidesToShow: 1,
    focusOnSelect: true,
    // swipe: true,
    // touchMove: true,
    variableWidth: true,
    speed: 400,
})


const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
const isExplorer = /*@cc_on!@*/false || !!document.documentMode;
if (isSafari || isExplorer) {
    console.log("EXPLORER || SAFARI");
    $(".discounts__slider").addClass(".safari")
}