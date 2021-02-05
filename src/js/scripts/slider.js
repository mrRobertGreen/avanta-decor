$(document).ready(function () {
    $('.discounts__slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
        focusOnSelect: true,
        swipe: true,
        touchMove: true,
        variableWidth: true
    })
})