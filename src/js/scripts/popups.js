$(".liquidation__btn.contact").click(() => {
    $("#connect-popup .popup__title").html("Связаться с нами")
    openPopup("connect-popup")
    enableClosingPopupOnOverlayClick("connect-popup", "popup__body")
})
$(".des").click(() => {
    isCooperation = true
    $("#connect-popup .popup__title").html("Сотрудничество")
    openPopup("connect-popup")
    enableClosingPopupOnOverlayClick("connect-popup", "popup__body")
})
$(".building__btn").click((e) => {
    openPopup("build-popup")
    enableClosingPopupOnOverlayClick("build-popup", "popup__body")
    const id = $(e.currentTarget).attr("id")
    switch (id) {
        case "plintus-btn":
            buildingData.name = "Плинтус"
            break;
        case "rake-btn":
            buildingData.name = "Рейка"
            break;
        case "trim-btn":
            buildingData.name = "Наличник"
            break;
        default:
            break;
    }
})

const openPopup = (id) => {
    $popup = $("#" + id)
    $popup.removeClass("_hidden")
    disableScroll()
}
const closePopup = (id) => {
    $popup = $("#" + id)
    $popup.addClass("_hidden")
    enableScroll()
}
const enableClosingPopupOnOverlayClick = (popupId, popupBodyClass) => {
    $("#" + popupId).click((e) => {
        const $target = $(e.target)

        if ($target.closest("." + popupBodyClass).length === 0) {
            closePopup(popupId)
        }
    })
}

// scroll disabling
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
};

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () {
            supportsPassive = true;
        }
    }));
} catch (e) {}

var wheelOpt = supportsPassive ? {
    passive: false
} : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

