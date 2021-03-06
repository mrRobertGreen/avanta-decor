class Plintus {
    constructor() {
        this._category = "mdf"
        this._type = "dyed"
        this._thickness = 12
        this._height = 70
        this._metres = 1
    }
    _setPrice = (value) => {
        $("#building_plintus .size__price").html(`<p>${value} ₽</p>`)
    }
    _setCorrectPrice = () => {
        let price;
        if (this._category === "tree") {
            price = getItemFromTree(plintusTree, [this._type, this._thickness, this._height])
        } else {
            price = getItemFromTree(plintusMDF, [this._type, this._thickness, this._height])
        }
        price *= this._metres
        this._setPrice(price)
    }
    setValue(field, value) {
        switch (field) {
            case "category":
                this._category = value
                break
            case "type":
                this._type = value
                break
            case "thickness":
                this._thickness = value
                break
            case "height":
                this._height = value
                break
            case "metres":
                this._metres = value
                break
            default:
                return
        }
        // console.log("category: ", this._category);
        // console.log("type: ", this._type);
        // console.log("thickness: ", this._thickness);
        // console.log("height: ", this._height);
        // console.log("metres: ", this._metres);
        this._setCorrectPrice()
    }
}

const plintus = new Plintus()

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

$("#building_plintus .material__item").on("click", (e) => {
    const id = $(e.target).attr("id")
    if (id === "mdf") {
        plintus.setValue("type", "dyed")
        plintus.setValue("category", "mdf")
        setRangeValues("#building_plintus ._thickness", [10, 12, 16, 18])
        setRangeStyle("#range-thickness-plintus", 4)
        setRangeValues("#building_plintus ._height", [70, 80, 100, 120, 150])
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