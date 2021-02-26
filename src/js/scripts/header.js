$(window).scroll(function () {
    // make header fixed on top
    if (window.matchMedia('(min-width: 1250px)').matches) {
        if ($(this).scrollTop() >= window.innerHeight) {
            $('.header_fake').css("display", "block");
            $('.header').addClass('_fixed');
            console.log("hello");
        } else {
            $('.header').removeClass('_fixed');
            $('.header_fake').css("display", "none");
        }
    }
});