const plintus = {
    category: "mdf",
    type: "dyed",
    form: "evro",
    thickness: 12,
    height: 70,
    metres: 1,
    price: 213,
}
const getCategoryNameById = (id) => {
    switch (id) {
        case "mdf":
            return "МДФ"
        case "tree":
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
        case "evro":
            return "Евро"
        case "evro-streight":
            return "Евро (прямой)"
        case "boot":
            return "Сапожок"
        case "figure":
            return "Фигурный"
        case "with-groove":
            return "С пазом"
        case "without-groove":
            return "Без паза"
        case "streight":
            return "Прямой"
        case "streight-chamfered":
            return "Прямой с фасками"
        case "semicircular":
            return "Полукруглый"
        default:
            break;
    }
}
const setPrice = (selector, value) => {
    $(selector).html(`<p>${value} ₽</p>`)
}
const calculatePrice = ({type, thickness, height, metres}) => {
    let price
    if (category === "tree") {
        price = getItemFromTree(plintusTree, [type, thickness, height])
    } else {
        price = getItemFromTree(plintusMDF, [type, thickness, height])
    }
    price *= metres
    return price
}
const setRangeValues = (selector, values) => {
    const $elem = $(selector)
    let html = ""
    values.forEach(value => {
        html += `<div>${value}</div>`
    })
    $elem.html(html)
}
const setRangeStyle = (selector, count) => {
    const $elem = $(selector)
    switch (count) {
        case 4:
            $elem.attr("max", "8")
            return
        case 5:
            $elem.attr("max", "10")
            return
        case 6:
            $elem.attr("max", "12")
            return
        case 8:
            $elem.attr("max", "16")
            return
        default:
            return
    }
}
const getHeights = (priceData, type) => {
    const someThickness = Object.keys(priceData[type])[0]
    return priceData[type][someThickness]
}
const getThicknesses = (priceData, type) => {
    return priceData[type]
}
$("#building_plintus .material__item").on("click", (e) => {
    const id = $(e.target).attr("id")
    if (id === "mdf") {
        plintus.type = "dyed"
        plintus.category = "mdf"
        setRangeValues("#building_plintus ._thickness", [10, 12, 16, 18])
        setRangeStyle("#range-thickness-plintus", 4)
        setRangeValues("#building_plintus ._height", getHeights(plintusMDF, "dyed"))
        setRangeStyle("#range-height-plintus", 5)
        buildingData.category = "МДФ"
        buildingData.type = "Выкрашенный"
    } else {
        plintus.setValue("type", id)
        plintus.setValue("category", "tree")
        setRangeValues("#building_plintus ._thickness", [12, 14, 16, 18, 20, 22])
        setRangeStyle("#range-thickness-plintus", 6)
        setRangeValues("#building_plintus ._height", [70, 80, 90, 100, 120])
        setRangeStyle("#range-height-plintus", 5)
        buildingData.category = "Массив"
        switch (id) {
            case "oak":
                buildingData.type = "Дуб"
                break
            case "ash":
                buildingData.type = "Ясень"
                break
            case "beech":
                buildingData.type = "Бук"
                break
            default:
                break
        }
    }
    initRangeFillLower()
})
$("#building_plintus .style__span").on("click", (e) => {
    const type = $(e.target).attr("id")
    plintus.setValue("type", type)
})
const createSetCorrectInputValue = (selector) => {
    let prevValue;
    return () => {
        const $input = $(selector)
        let value = +$input.val()
        const maxValue = +$input.attr("max")
        const minValue = +$input.attr("min")
        if (value % 2 === 0) {
            if (value === maxValue) {
                $input.val(value = maxValue - 1)
            } else if (value === minValue) {
                $input.val(value = minValue + 1)
            } else if (prevValue > value) {
                $input.val(--value)
            } else {
                $input.val(++value)
            }
        } else {
            prevValue = value
        }
        return value
    }
}
$("#range-thickness-plintus").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const thickness = rangeValueToThicknessPlintus(plintus._category, plintus._type, value)
    $("#building_plintus .thickness-mm").html(thickness + " мм.")
    plintus.setValue("thickness", thickness)
    buildingData.thickness = thickness
})
$("#range-height-plintus").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const height = rangeValueToHeightPlintus(plintus._category, plintus._type, value)
    $("#building_plintus .height-mm").html(height + " мм.")
    plintus.setValue("height", height)
    buildingData.height = height
})
$("#building_plintus .size__input").on("input", (e) => {
    const value = e.target.value
    plintus.setValue("metres", value)
    buildingData.metres = value
})