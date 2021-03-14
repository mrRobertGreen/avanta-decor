const trim = {
    name: "Наличник",
    category: "mdf",
    type: "dyed",
    form: "trim-streight",
    thickness: 16,
    height: 80,
    metres: 1,
}
$("#building_trim .material__item").on("click", (e) => {
    const id = $(e.target).attr("id")
    if (id === "mdf") {
        trim.type = "dyed"
        trim.category = "mdf"
        const heights = getHeights(trimMDFPrices, "dyed")
        const thicknesses = getThicknesses(trimMDFPrices, "dyed")
        setRangeValues("#building_trim ._thickness", thicknesses)
        setRangeStyle("#range-thickness-trim", thicknesses.length)
        setRangeValues("#building_trim ._height", heights)
        setRangeStyle("#range-height-trim", heights.length)
    } else {
        trim.type = id
        trim.category = "massif"
        const heights = getHeights(trimMassifPrices, id)
        const thicknesses = getThicknesses(trimMassifPrices, id)
        setRangeValues("#building_trim ._thickness", thicknesses)
        setRangeStyle("#range-thickness-trim", thicknesses.length)
        setRangeValues("#building_trim ._height", heights)
        setRangeStyle("#range-height-trim", heights.length)
    }
    initRangeFillLower()
    const price = calculatePrice(trim)
    setPrice("#building_trim .size__price", price)
})
$("#building_trim .style__span").on("click", (e) => {
    const type = $(e.target).attr("id")
    trim.type = type
})
$("#range-thickness-trim").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const thickness = rangeValueToThicknessTrim(trim.category, trim.type, value)
    $("#building_trim .thickness-mm").html(thickness + " мм.")
    trim.thickness = thickness
    const price = calculatePrice(trim)
    setPrice("#building_trim .size__price", price)
})
$("#range-height-trim").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const height = rangeValueToHeightTrim(trim.category, trim.type, value)
    $("#building_trim .height-mm").html(height + " мм.")
    trim.height = height
    const price = calculatePrice(trim)
    setPrice("#building_trim .size__price", price)
})
$("#building_trim .size__input").on("input", (e) => {
    const value = e.target.value
    trim.metres = value
    const price = calculatePrice(trim)
    setPrice("#building_trim .size__price", price)
})
$("#building_trim .types__item").on("click", (e) => {
    trim.form = $(e.currentTarget).attr("id")
})