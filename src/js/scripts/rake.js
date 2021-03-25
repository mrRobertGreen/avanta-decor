const rake = {
    name: "Рейка",
    category: "mdf",
    type: "dyed",
    form: "rake-with-groove",
    thickness: 30,
    height: 60,
    metres: 1,
}
$("#building_rake .material__item").on("click", (e) => {
    const id = $(e.target).attr("id")
    if (id === "mdf") {
        rake.type = "dyed"
        rake.category = "mdf"
        const heights = getHeights(rakeMDFPrices, "dyed")
        const thicknesses = getThicknesses(rakeMDFPrices, "dyed")
        setRangeValues("#building_rake ._thickness", thicknesses)
        setRangeStyle("#range-thickness-rake", thicknesses.length)
        setRangeValues("#building_rake ._height", heights)
        setRangeStyle("#range-height-rake", heights.length)
    } else {
        rake.type = id
        rake.category = "massif"
        const heights = getHeights(rakeMassifPrices, id)
        const thicknesses = getThicknesses(rakeMassifPrices, id)
        setRangeValues("#building_rake ._thickness", thicknesses)
        setRangeStyle("#range-thickness-rake", thicknesses.length)
        setRangeValues("#building_rake ._height", heights)
        setRangeStyle("#range-height-rake", heights.length)
    }
    // initRangeFillLower()
    const price = calculatePrice(rake)
    setPrice("#building_rake .size__price", price)
})
$("#building_rake .style__span").on("click", (e) => {
    const type = $(e.target).attr("id")
    rake.type = type
})
$("#range-thickness-rake").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const thickness = rangeValueToThicknessRake(rake.category, rake.type, value)
    $("#building_rake .thickness-mm").html(thickness + " мм.")
    rake.thickness = thickness
    const price = calculatePrice(rake)
    setPrice("#building_rake .size__price", price)
})
$("#range-height-rake").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const height = rangeValueToHeightRake(rake.category, rake.type, value)
    $("#building_rake .height-mm").html(height + " мм.")
    rake.height = height
    const price = calculatePrice(rake)
    setPrice("#building_rake .size__price", price)
})
$("#building_rake .size__input").on("input", (e) => {
    const value = e.target.value
    rake.metres = value
    const price = calculatePrice(rake)
    setPrice("#building_rake .size__price", price)
})
$("#building_rake .types__item").on("click", (e) => {
    rake.form = $(e.currentTarget).attr("id")
})