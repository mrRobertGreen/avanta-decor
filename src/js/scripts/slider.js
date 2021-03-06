let isSafari = false,
    isExplorer = false

// CHROME
if (navigator.userAgent.indexOf("Chrome") != -1) {
    console.log("Google Chrome");
}
// FIREFOX
else if (navigator.userAgent.indexOf("Firefox") != -1) {
    console.log("Mozilla Firefox");
}
// INTERNET EXPLORER
else if (navigator.userAgent.indexOf("MSIE") != -1) {
    isExplorer = true
}
// EDGE
else if (navigator.userAgent.indexOf("Edge") != -1) {
    console.log("Internet Exploder");
}
// SAFARI
else if (navigator.userAgent.indexOf("Safari") != -1) {
    isSafari = true
}
// OPERA
else if (navigator.userAgent.indexOf("Opera") != -1) {
    console.log("Opera");
}
// YANDEX BROWSER
else if (navigator.userAgent.indexOf("YaBrowser") != -1) {
    console.log("YaBrowser");
}
// OTHERS
else {
    console.log("Others");
}

if (isSafari || isExplorer) {
    $(".discounts__slider").addClass("safari")
    $(".safari").removeClass("discounts__slider")
    $('.discounts__slider').slick("unslick")
} else {
    $('.discounts__slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        arrows: false,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        speed: 400,
    })
}