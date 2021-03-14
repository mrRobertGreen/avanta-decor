let buildingData = {
    name: "Плинтус",
    category: "МДФ",
    form: "Евро",
    type: "Выкрашенный",
    thickness: 12,
    height: 70,
    metres: 1,
    price: "213 ₽",
}
const getCategoryNameById = (id) => {
    switch (id) {
        case "mdf":
            return "МДФ"
        case "massif":
            return "Массив"
        default:
            break;
    }
}
const getTypeNameById = (id) => {
    switch (id) {
        case "dyed":
            return "Выкрашенный"
        case "beech":
            return "Бук"
        case "ash":
            return "Ясень"
        case "oak":
            return "Дуб"
        default:
            break;
    }
}
const getFormNameById = (id) => {
    switch (id) {
        case "plintus-evro":
            return "Евро"
        case "plintus-evro-streight":
            return "Евро (прямой)"
        case "plintus-boot":
            return "Сапожок"
        case "plintus-figure": case "trim-figure":
            return "Фигурный"
        case "rake-with-groove":
            return "С пазом"
        case "rake-without-groove":
            return "Без паза"
        case "trim-streight":
            return "Прямой"
        case "trim-streight-chamfered":
            return "Прямой с фасками"
        case "trim-semicircular":
            return "Полукруглый"
        default:
            break;
    }
}
const getSendBuildingData = (product) => {
    const {name, category, form, type, height, thickness, metres} = product
    return {
        name,
        category: getCategoryNameById(category),
        form: getFormNameById(form),
        type: getTypeNameById(type),
        thickness,
        height,
        metres,
    }
}
$(".building__btn").click((e) => {
    openPopup("build-popup")
    enableClosingPopupOnOverlayClick("build-popup", "popup__body")
    const id = $(e.currentTarget).attr("id")
    switch (id) {
        case "plintus-btn":
            buildingData = getSendBuildingData(plintus)
            break;
        case "rake-btn":
            buildingData = getSendBuildingData(rake)
            break;
        case "trim-btn":
            buildingData = getSendBuildingData(trim)
            break;
        default:
            break;
    }
})