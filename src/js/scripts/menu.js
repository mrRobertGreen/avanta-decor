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

const toggleActiveClass = (e, selector, activeClassName) => {
    $(selector).removeClass(activeClassName)
    const curItem = $(e.currentTarget)
    curItem.addClass(activeClassName)
}

if (window.matchMedia("(max-width: 425px)").matches) {
    enableMenuScroll("menu-row", "menu__item", [0, 55, 150])
}
if (window.matchMedia("(max-width: 830px)").matches) {
    enableMenuScroll("types-row-plintus", "types__item", [0, 80, 170, 210])
    enableMenuScroll("types-row-trim", "types__item_trim", [0, 80, 170, 210])
}

$(".menu__item").on("click", (e) => toggleActiveClass(e, ".menu__item", "menu__item_active"))
$("#building_plintus .types__item").on("click", (e) => {
    const id = $(e.currentTarget).attr("id")
    switch (id) {
        case "plintus-evro":
            buildingData.form = "Евро"
            break
        case "plintus-evro-streight":
            buildingData.form = "Евро (прямой)"
            break
        case "plintus-boot":
            buildingData.form = "Сапожок"
            break
        case "plintus-figure":
            buildingData.form = "Фигурный"
            break
        default:
            break
    }
    toggleActiveClass(e, "#building_plintus .types__item", "types__item_active")
})
$("#building_trim .types__item").on("click", (e) => {
    const id = $(e.currentTarget).attr("id")
    switch (id) {
        case "trim-evro":
            buildingData.form = "Евро"
            break
        case "trim-evro-streight":
            buildingData.form = "Евро (прямой)"
            break
        case "trim-semicircular":
            buildingData.form = "Полукруглый"
            break
        case "plintus-figure":
            buildingData.form = "Фигурный"
            break
        default:
            break
    }
    toggleActiveClass(e, "#building_trim .types__item", "types__item_active")
})
$("#building_rake .types__item").on("click", (e) => {
    const id = $(e.currentTarget).attr("id")
    switch (id) {
        case "rake-with-groove":
            buildingData.form = "С пазом"
            break
        case "rake-without-groove":
            buildingData.form = "Без паза"
            break
        default:
            break
    }
    toggleActiveClass(e, "#building_rake .types__item", "types__item_active")
})
$("#building_rake .material__item").on("click", (e) => toggleActiveClass(e, "#building_rake .material__item", "material__item_active"))
$("#building_plintus .material__item").on("click", (e) => toggleActiveClass(e, "#building_plintus .material__item", "material__item_active"))
$("#building_trim .material__item").on("click", (e) => toggleActiveClass(e, "#building_trim .material__item", "material__item_active"))
$(".style__span").on("click", (e) => toggleActiveClass(e, ".style__span", "style__span_active"))

$(window).scroll(function () {
    // make menu fixed on top
    const menuOffset = document.querySelector(".menu").offsetTop + window.innerHeight
    const finalBlockOffset = document.querySelector("#hide-menu").offsetTop + window.innerHeight
    const fakeMenuOffset = document.querySelector(".menu_fake").offsetTop + window.innerHeight
    if ($(window).scrollTop() >= menuOffset && $(window).scrollTop() <= finalBlockOffset) {
        $('.menu_fake').css("display", "block");
        $('.menu').addClass('_fixed');
    }
    if ($(window).scrollTop() <= fakeMenuOffset || $(window).scrollTop() > finalBlockOffset) {
        $('.menu').removeClass('_fixed');
        $('.menu_fake').css("display", "none");
    }
})

const linkClasses = ".menu__track, .liquidation__buttons"

$(linkClasses).on('click', '[href^="#"]', async function (e) {
    // плавная прокрутка до якоря
    e.preventDefault()
    isAllowedAutoSwitching = false

    await $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 100
    }, 500, "swing", () => isAllowedAutoSwitching = true);

});

let lastScrollTop = 0;
const ids = ["plintus", "rake", "trim"] // массив id блоков
let isAllowedAutoSwitching = true; // разрешено ли автопролистывание меню
let currentIndex = 0 // индекс текущего блока
let lastCurrentIndex = 0

$(window).on("scroll", function () {
    // автопереключение пунктов меню
    let scrollTop = $(this).scrollTop();

    if (!isAllowedAutoSwitching) return

    if (scrollTop > lastScrollTop) {
        // скролл вниз
        let i = currentIndex
        while (isVisibleForScrollDown("#" + ids[i] + "-start")) {
            // идем вниз до по стартовым чекпоинтам, пока не дойдем до первого не видимого
            ++i
        }
        if (i === -1 || i === 0) currentIndex = 0
        else currentIndex = i - 1

    } else {
        // скролл вверх
        let i = currentIndex
        while (isVisibleForScrollUp("#" + ids[i] + "-end")) {
            --i
        }
        if (i === 3) currentIndex = 2
        else currentIndex = i + 1
    }

    if (lastCurrentIndex !== currentIndex) {
        lastCurrentIndex = currentIndex
        isAllowedAutoSwitching = false
        $(".menu__item").removeClass("menu__item_active")
        $("#menu-" + ids[currentIndex]).addClass("menu__item_active")

        setTimeout(() => {
            isAllowedAutoSwitching = true
        }, 300)

    }
    lastScrollTop = scrollTop;
})


function isVisibleForScrollDown(id) {
    // console.log("id: ", id)

    const element = $(id)

    if (!element.offset()) return

    const elementTop = $(element).offset().top; // позиция элемента от верхнего края документа
    const viewportTop = $(window).scrollTop(); // значение отступа прокрутки сверху 
    const viewportBottom = viewportTop + $(window).height();

    // $('#scanner').remove()
    // $('#body').append('<div id="scanner"></div>');

    // const props = {
    //     background: "#000",
    //     opacity: 0.5,
    //     position: "fixed",
    //     width: "100%",
    //     height: "10px",
    //     top: $(window).height() / 2 + "px",
    // }
    // $("#scanner").css(props)


    return elementTop < viewportTop + $(window).height() / 2
}

function isVisibleForScrollUp(id) {

    const element = $(id)

    if (!element.offset()) return

    const elementTop = $(element).offset().top; // позиция элемента от верхнего края документа
    const viewportTop = $(window).scrollTop(); // значение отступа прокрутки сверху 
    const viewportBottom = viewportTop + $(window).height();


    return elementTop > viewportTop + $(window).height() / 2
}