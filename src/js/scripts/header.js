$(window).scroll(function () {
    const menuOffset = document.querySelector(".menu").offsetTop + window.innerHeight
    if ($(window).scrollTop() < window.innerHeight || $(window).scrollTop() > menuOffset) {
        $('.header').removeClass('_fixed');
        $('.header_fake').css("display", "none");
    } else {
        $('.header_fake').css("display", "block");
        $('.header').addClass('_fixed');
    }
})