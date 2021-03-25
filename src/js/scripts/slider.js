new Swiper(".discounts", {
    pagination: {
        el: ".discounts__dots",
        clickable: true,
    },
    slideToClickedSlide: true,
    slidesPerView: "auto",
    spaceBetween: 39,
    centeredSlides: true,
    slidesPerGroup: 1,
    loop: true,
    initialSlide: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    }
})