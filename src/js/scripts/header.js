$(window).scroll(function () {
    const menuOffset = document.querySelector(".menu").offsetTop + window.innerHeight
    const headerHeight = getHeaderHeight()
    const menuHeight = 70
    const scrollTop = $(window).scrollTop()
    if (scrollTop < window.innerHeight || scrollTop > (menuOffset - headerHeight)) {
        // if (scrollTop < menuOffset + headerHeight) {
            // const difference = scrollTop - menuOffset
            // console.log(difference);
            // $(".header").css("top", -difference)
        // } else {
            $('.header').removeClass('_fixed');
            $('.header_fake').css("display", "none");
            $(".header").css("top", 0)
        // }
    } else {
        $('.header_fake').css("display", "block");
        $('.header').addClass('_fixed');
    }
})

const animateHeaderMoving = () => {
    const currScrollTop = $(window).scrollTop()
        const difference = currScrollTop - startScrollTop
        if (difference > getHeaderHeight()) {
            $('.header').removeClass('_fixed');
            $('.header_fake').css("display", "none");
            $(".header").css("top", 0)
            $(window).off("scroll", animateHeaderMoving)
        } else {
            $(".header").css("top", -difference)
        }
}

const getHeaderHeight = () => {
    if (window.matchMedia("(min-width: 600px)").matches) {
        return 122
    } else {
        return 85
    }
}