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
    const slider = new Sly("#" + sliderId, options).init();

    $("." + itemsClass).each((idx, item) => {
        $(item).click(() => {
            slider.slideTo(stepLengths[idx])
        })
    })
}

const toggleActiveClass = (e, className, activeClassName) => {
    $("."+className).removeClass(activeClassName)
    const curItem = $(e.currentTarget)
    curItem.addClass(activeClassName)
}

if (window.matchMedia("(max-width: 425px)").matches) {
    enableMenuScroll("menu-row", "menu__item", [0, 55, 150])
}
if (window.matchMedia("(max-width: 730px)").matches) {
    enableMenuScroll("types-row", "types__item", [0, 70, 130, 210])
}

$(".menu__item").on("click", (e) => toggleActiveClass(e, "menu__item", "menu__item_active"))
$(".types__item").on("click", (e) => toggleActiveClass(e, "types__item", "types__item_active"))
$(".material__item").on("click", (e) => toggleActiveClass(e, "material__item", "material__item_active"))
$(".style__span").on("click", (e) => toggleActiveClass(e, "style__span", "style__span_active"))

$(window).scroll(function () {
    // make menu fixed on top
    if (window.matchMedia('(min-width: 600px)').matches) {
        stickyMenuDesktop(this)
    } else {
        stickyMenuMobile(this)
    }
})

const stickyMenuMobile = (window) => {
    const marginTop = 80
    const menuOffset = document.querySelector(".menu").offsetTop
    const fakeMenuOffset = document.querySelector(".menu_fake").offsetTop
    if ($(window).scrollTop() >= menuOffset - marginTop) {
        $('.menu_fake').css("display", "block");
        $('.menu').addClass('_fixed');
    } 
    if ($(window).scrollTop() <= fakeMenuOffset - marginTop) {
        $('.menu').removeClass('_fixed');
        $('.menu_fake').css("display", "none");
    }
}
const stickyMenuDesktop = () => {
    const marginTop = 102
    const menuOffset = document.querySelector(".menu").offsetTop + window.innerHeight
    const fakeMenuOffset = document.querySelector(".menu_fake").offsetTop + window.innerHeight
    if ($(window).scrollTop() >= menuOffset - marginTop) {
        $('.menu_fake').css("display", "block");
        $('.menu').addClass('_fixed');
    } 
    if ($(window).scrollTop() <= fakeMenuOffset - marginTop) {
        $('.menu').removeClass('_fixed');
        $('.menu_fake').css("display", "none");
    }
}