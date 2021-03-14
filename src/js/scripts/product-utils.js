const setPrice = (selector, value) => {
    $(selector).html(`<p>${value} ₽</p>`)
}
const calculatePrice = (product) => {
    const {type, thickness, height, metres} = product
    const priceData = getPriceDataByProductName(product.name)
    let price = getItemFromTree(priceData, [type, thickness, height])
    return price * metres
}
const getPriceDataByProductName = (name) => {
    switch (name) {
        case "Плинтус":
            if (plintus.category === "mdf") {
                return plintusMDFPrices
            } else {
                return plintusMassifPrices
            }
        case "Рейка":
            if (rake.category === "mdf") {
                return rakeMDFPrices
            } else {
                return rakeMassifPrices
            }
        case "Наличник":
            if (trim.category === "mdf") {
                return trimMDFPrices
            } else {
                return trimMassifPrices
            }
        default:
            break;
    }
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
    return Object.keys(priceData[type][someThickness])
}
const getThicknesses = (priceData, type) => {
    return Object.keys(priceData[type])
}
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
const getItemFromTree = (tree, keys, idx = 0) => {
    if (idx === keys.length - 1 || tree[keys[idx]] === undefined) {
        return tree[keys[idx]]
    } else {
        return getItemFromTree(tree[keys[idx]], keys, ++idx)
    }
}