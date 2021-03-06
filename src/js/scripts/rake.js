class Rake {
    constructor() {
        this._category = "mdf"
        this._type = "dyed"
        this._thickness = 12
        this._height = 70
        this._metres = 1
    }
    _setPrice = (value) => {
        $("#building_rake .size__price").html(`<p>${value} ₽</p>`)
    }
    _setCorrectPrice = () => {
        let price;
        if (this._category === "tree") {
            price = getItemFromTree(rakeTree, [this._type, this._thickness, this._height])
        } else {
            price = getItemFromTree(rakeMDF, [this._type, this._thickness, this._height])
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

const rake = new Rake()

$("#building_rake .material__item").on("click", (e) => {
    const id = $(e.target).attr("id")
    console.log("hello");
    if (id === "mdf") {
        rake.setValue("type", "dyed")
        rake.setValue("category", "mdf")
        setRangeValues("#building_rake ._thickness", [20, 25, 30, 40, 50])
        setRangeStyle("#range-thickness-rake", 5)
        setRangeValues("#building_rake ._height", [20, 30, 40, 50, 60, 80, 90, 100])
        setRangeStyle("#range-height-rake", 8)
        buildingData.category = "МДФ"
        buildingData.type = "Выкрашенный"
    } else {
        rake.setValue("type", id)
        rake.setValue("category", "tree")
        setRangeValues("#building_rake ._thickness", [20, 25, 40, 45])
        setRangeStyle("#range-thickness-rake", 4)
        setRangeValues("#building_rake ._height", [30, 40, 50, 60])
        setRangeStyle("#range-height-rake", 4)
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
$("#building_rake .style__span").on("click", (e) => {
    const type = $(e.target).attr("id")
    rake.setValue("type", type)
})
$("#range-thickness-rake").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const thickness = rangeValueToThicknessRake(rake._category, rake._type, value)
    $("#building_rake .thickness-mm").html(thickness + " мм.")
    rake.setValue("thickness", thickness)
    buildingData.thickness = thickness
})

$("#range-height-rake").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const height = rangeValueToHeightRake(rake._category, rake._type, value)
    $("#building_rake .height-mm").html(height + " мм.")
    rake.setValue("height", height)
    buildingData.height = height
})
$("#building_rake .size__input").on("input", (e) => {
    const value = e.target.value
    rake.setValue("metres", value)
    buildingData.metres = value
})