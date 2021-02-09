// $(".range__input").on("input", (e) => {
//     console.log(e.target.value);
//     setPrice(e.target.value)
// })

const setPrice = (value) => {
    $(".size__price").html(`<p>${value} ₽</p>`)
}

const chahgeSubmitButtonText = () => {
    if (window.matchMedia("(min-width: 820px)").matches) {
        $(".building__btn").html("Отправить")
    }
}
$(".material__item").on("click", (e) => {
    const target = $(e.target)
    if (target.attr("id") === "mdf") {
        $(".building__style").removeClass("_hidden")
    } else {
        $(".building__style").addClass("_hidden")
    }
})

chahgeSubmitButtonText()

$(window).resize(chahgeSubmitButtonText)

// prices controllers
// const plintus = {
//     category: "mdf", // "mdf" | "tree"
//     type: "oak",
//     thickness: 12,
//     height: 70
// }

class Plintus {
    constructor() {
        this._category = "mdf"
        this._type = "oak"
        this._thickness = 12
        this._height - 70
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
        this._setPrice(price)
    }
    setValue(field, value) {
        this["_"+field] = +value
        this._setCorrectPrice()
    }
}

const plintus = new Plintus()

$(".material__item").on("click", (e) => {
    const id = $(e.target).attr("id")
    if (id === "mdf") {
        plintus.setValue("category", id)
    } else {
        plintus.setValue("type", id)
    }
})
$(".style__item").on("click", (e) => {
    const type = $(e.target).attr("id")
    plintus.setValue("type", type)
})

let prevValue;
$("#range-thickness-1").on("input", (e) => {
    const value = +e.target.value
    prevValue = value
    let thickness;
    switch (value) {
        case 1:
            thickness = 12
            break
        case 3:
            thickness = 14
            break
        case 5:
            thickness = 16
            break
        case 7:
            thickness = 18
            break
        case 9:
            thickness = 20
            break
        default: {
            if (prevValue > value) {
                $(e.target).val(value - 1)
            } else if (value === 10) {
                $(e.target).val(9)
            } else {
                $(e.target).val(value + 1)
            }
        }
    }
})