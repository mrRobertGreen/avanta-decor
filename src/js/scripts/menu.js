$(window).on("load", function () {
    if (window.matchMedia("(max-width: 425px)").matches) {
        enableMenuScroll("menu-row", "menu__item", [0, 55, 150])
    }

    $(".menu__item").on("click", toggleActiveMenuItem)
})

const enableMenuScroll = (sliderId, itemsClass, stepLengths) => {
    const options = {
        horizontal: 1,
        speed: 300,
        mouseDragging: 1,
        touchDragging: 1,
        easing: "swing",
        releaseSwing: true,
        swingSpeed: 0.5,
    };
    slider = new Sly("#" + sliderId, options).init();

    $("." + itemsClass).each((idx, item) => {
        $(item).click(() => {
            slider.slideTo(stepLengths[idx])
        })
    })

}

function toggleActiveMenuItem(e) {
    $(".menu__item").removeClass("menu__item_active")
    const curItem = $(e.target)
    curItem.addClass("menu__item_active")
}