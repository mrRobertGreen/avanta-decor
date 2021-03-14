const plintus = {
    name: "Плинтус",
    category: "mdf",
    type: "dyed",
    form: "evro",
    thickness: 12,
    height: 70,
    metres: 1,
}
$("#building_plintus .material__item").on("click", (e) => {
    const id = $(e.target).attr("id")
    if (id === "mdf") {
        plintus.type = "dyed"
        plintus.category = "mdf"
        const heights = getHeights(plintusMDFPrices, "dyed")
        const thicknesses = getThicknesses(plintusMDFPrices, "dyed")
        setRangeValues("#building_plintus ._thickness", thicknesses)
        setRangeStyle("#range-thickness-plintus", thicknesses.length)
        setRangeValues("#building_plintus ._height", heights)
        setRangeStyle("#range-height-plintus", heights.length)
    } else {
        plintus.type = id
        plintus.category = "massif"
        const heights = getHeights(plintusMassifPrices, id)
        const thicknesses = getThicknesses(plintusMassifPrices, id)
        setRangeValues("#building_plintus ._thickness", thicknesses)
        setRangeStyle("#range-thickness-plintus", thicknesses.length)
        setRangeValues("#building_plintus ._height", heights)
        setRangeStyle("#range-height-plintus", heights.length)
    }
    initRangeFillLower()
    const price = calculatePrice(plintus)
    setPrice("#building_plintus .size__price", price)
})
$("#building_plintus .style__span").on("click", (e) => {
    const type = $(e.target).attr("id")
    plintus.type = type
})
$("#range-thickness-plintus").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const thickness = rangeValueToThicknessPlintus(plintus.category, plintus.type, value)
    $("#building_plintus .thickness-mm").html(thickness + " мм.")
    plintus.thickness = thickness
    const price = calculatePrice(plintus)
    setPrice("#building_plintus .size__price", price)
})
$("#range-height-plintus").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const height = rangeValueToHeightPlintus(plintus.category, plintus.type, value)
    $("#building_plintus .height-mm").html(height + " мм.")
    plintus.height = height
    const price = calculatePrice(plintus)
    setPrice("#building_plintus .size__price", price)
})
$("#building_plintus .size__input").on("input", (e) => {
    const value = e.target.value
    plintus.metres = value
    const price = calculatePrice(plintus)
    setPrice("#building_plintus .size__price", price)
})
$("#building_plintus .types__item").on("click", (e) => {
    plintus.form = $(e.currentTarget).attr("id")
    console.log(plintus);
})