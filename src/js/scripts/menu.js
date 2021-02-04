$(window).on("load", function () {
    if (window.matchMedia("(max-width: 768px)").matches) {
        enableMenuScroll("menu-row")
    }

    $(".menu__item").on("click", toggleActiveMenuItem)
})  

const enableMenuScroll = (id) => {
    const options = {
        horizontal: 1,
        speed: 300,
        mouseDragging: 1,
        touchDragging: 1,
        easing: "swing",
        releaseSwing: true,
        swingSpeed: 0.5,
    };
    slider = new Sly("#"+id, options).init();
}

function toggleActiveMenuItem(e) {
   $(".menu__item").removeClass("menu__item_active")
   $(e.target).addClass("menu__item_active")
}