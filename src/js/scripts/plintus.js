class Plintus {
    constructor() {
        this._category = "mdf"
        this._type = "dyed"
        this._thickness = 12
        this._height = 70
        this._metres = 1
    }
    _setPrice = (value) => {
        $(".size__price").html(`<p>${value} ₽</p>`)
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

$(".material__item").on("click", (e) => {
    const id = $(e.target).attr("id")
    if (id === "mdf") {
        plintus.setValue("type", "finish")
        plintus.setValue("category", "mdf")
    } else {
        plintus.setValue("type", id)
        plintus.setValue("category", "tree")
    }
})
$(".style__span").on("click", (e) => {
    const type = $(e.target).attr("id")
    plintus.setValue("type", type)
})

const rangeValueToThickness = (value) => {
    switch (+value) {
        case 1:
            return 12
        case 3:
            return 14
        case 5:
            return 16
        case 7:
            return 18
        case 9:
            return 20
        default:
            return 12
    }
}

let thicknessPrevValue;
$("#range-thickness-plintus").on("input", (e) => {
    let value = +e.target.value
    if (value % 2 === 0) {
        if (value === 10) {
            $(e.target).val(value = 9)
        } else if (value === 0) {
            $(e.target).val(value = 1)
            // setAnimateRangeValue($(e.target), thicknessPrevValue, value = 1)
        } else if (thicknessPrevValue > value) {
            $(e.target).val(--value)
            // setAnimateRangeValue($(e.target), thicknessPrevValue, --value)
        } else {
            $(e.target).val(++value)
            // setAnimateRangeValue($(e.target), thicknessPrevValue, ++value)
        }
    } else {
        thicknessPrevValue = value
    }

    const thickness = rangeValueToThickness(value)
    $("#thickness-mm").html(thickness + " мм.")
    plintus.setValue("thickness", thickness)
})

const rangeValueToHeight = (value) => {
    switch (+value) {
        case 1:
            return 70
        case 3:
            return 80
        case 5:
            return 90
        case 7:
            return 100
        case 9:
            return 120
        default:
            return 70
    }
}

let heightPrevValue;
$("#range-height-plintus").on("input", (e) => {
    let value = +e.target.value
    if (value % 2 === 0) {
        if (value === 10) {
            setAnimateRangeValue()
            $(e.target).val(value = 9)
        } else if (value === 0) {
            $(e.target).val(value = 1)
        } else if (heightPrevValue > value) {
            $(e.target).val(--value)
        } else {
            $(e.target).val(++value)
        }
    } else {
        heightPrevValue = value
    }
    const height = rangeValueToHeight(value)
    $("#height-mm").html(height + " мм.")
    plintus.setValue("height", height)
})
$(".size__input").on("input", (e) => {
    const value = e.target.value
    plintus.setValue("metres", value)
})

const setAnimateRangeValue = (range, prevValue, nextValue) => {
    
}