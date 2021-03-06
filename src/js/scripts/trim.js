class Trim {
    constructor() {
        this._category = "mdf"
        this._type = "dyed"
        this._thickness = 26
        this._height = 80
        this._metres = 1
    }
    _setPrice = (value) => {
        $("#building_trim .size__price").html(`<p>${value} ₽</p>`)
    }
    _setCorrectPrice = () => {
        let price;
        if (this._category === "tree") {
            price = getItemFromTree(trimTree, [this._type, this._thickness, this._height])
        } else {
            price = getItemFromTree(trimMDF, [this._type, this._thickness, this._height])
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

const trim = new Trim()

$("#building_trim .material__item").on("click", (e) => {
    const id = $(e.target).attr("id")
    console.log("hello");
    if (id === "mdf") {
        trim.setValue("type", "dyed")
        trim.setValue("category", "mdf")
        setRangeValues("#building_trim ._thickness", [10, 12, 16, 18])
        setRangeStyle("#range-thickness-trim", 4)
        setRangeValues("#building_trim ._height", [60, 70, 80, 90, 100])
        setRangeStyle("#range-height-trim", 5)
        buildingData.category = "МДФ"
        buildingData.type = "Выкрашенный"
    } else {
        trim.setValue("type", id)
        trim.setValue("category", "tree")
        setRangeValues("#building_trim ._thickness", [10, 12, 16, 18])
        setRangeStyle("#range-thickness-trim", 4)
        setRangeValues("#building_trim ._height", [60, 70, 80, 90, 100])
        setRangeStyle("#range-height-trim", 5)
        if (id === "oak") {
            setRangeValues("#building_trim ._thickness", [12, 14, 16, 20])
        }
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
$("#building_trim .style__span").on("click", (e) => {
    const type = $(e.target).attr("id")
    trim.setValue("type", type)
})
$("#range-thickness-trim").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const thickness = rangeValueToThicknessTrim(trim._category, trim._type, value)
    $("#building_trim .thickness-mm").html(thickness + " мм.")
    trim.setValue("thickness", thickness)
    buildingData.thickness = thickness
})
$("#range-height-trim").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const height = rangeValueToHeightTrim(trim._category, trim._type, value)
    $("#building_trim .height-mm").html(height + " мм.")
    trim.setValue("height", height)
    buildingData.height = height
})
$("#building_trim .size__input").on("input", (e) => {
    const value = e.target.value
    trim.setValue("metres", value)
    buildingData.metres = value
})