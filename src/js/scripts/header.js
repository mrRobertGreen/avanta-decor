// $(window).scroll(function () {
//     // make header fixed on top
//     const menuOffset = document.querySelector(".menu").offsetTop
//     if ($(this).scrollTop() < window.innerHeight || $(this).scrollTop() > menuOffset) {
//         $('.header').removeClass('_fixed');
//         $('.header_fake').css("display", "none");
//     } else {
//         $('.header_fake').css("display", "block");
//         $('.header').addClass('_fixed');
//     }
//     // if ($(this).scrollTop() >= window.innerHeight) {
//     //     $('.header_fake').css("display", "block");
//     //     $('.header').addClass('_fixed');
//     // } else {
//     //     $('.header').removeClass('_fixed');
//     //     $('.header_fake').css("display", "none");
//     // }
// });

$(window).scroll(function () {
    // make header fixed on top
    if (window.matchMedia('(min-width: 600px)').matches) {
        stickyHeaderDesktop()
    } else {
        stickyHeaderMobile()
    }
})

const stickyHeaderMobile = () => {
    const menuOffset = document.querySelector(".menu").offsetTop
    if ($(window).scrollTop() < window.innerHeight || $(window).scrollTop() > menuOffset) {
        $('.header').removeClass('_fixed');
        $('.header_fake').css("display", "none");
    } else {
        $('.header_fake').css("display", "block");
        $('.header').addClass('_fixed');
    }
}
const stickyHeaderDesktop = () => {
    const menuOffset = document.querySelector(".menu").offsetTop + window.innerHeight
    if ($(window).scrollTop() < window.innerHeight || $(window).scrollTop() > menuOffset) {
        $('.header').removeClass('_fixed');
        $('.header_fake').css("display", "none");
    } else {
        $('.header_fake').css("display", "block");
        $('.header').addClass('_fixed');
    }
}