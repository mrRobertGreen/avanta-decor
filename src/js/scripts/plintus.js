class Plintus {
    constructor() {
        this._category = "mdf"
        this._type = "oak"
        this._thickness = 12
        this._height = 70
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
            default:
                return
        }
        console.log("category: ", this._category);
        console.log("type: ", this._type);
        console.log("thickness: ", this._thickness);
        console.log("height: ", this._height);
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
$(".style__item").on("click", (e) => {
    const type = $(e.target).attr("id")
    plintus.setValue("type", type)
})

const rangeValueToThickness = (value) => {
    switch (+value) {
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
        default:
            thickness = 12
    }
}

let prevValue;
$("#range-thickness-1").on("input", (e) => {
    let value = +e.target.value
    prevValue = value
    console.log(value);
    if (value % 2 === 0) {
        if (prevValue > value) {
            $(e.target).val(--value)
        } else if (value === 10) {
            $(e.target).val(value = 9)
        } else {
            $(e.target).val(+value)
        }
        return
    } 

    const thickness = rangeValueToThickness(value)
    plintus.setValue("thickness", thickness)
})