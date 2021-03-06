const rangeValueToThicknessPlintus = (category, type, value) => {
    if (category === "mdf") {
        switch (type) {
            case "dyed":
                switch (+value) {
                    case 1:
                        return 10
                    case 3:
                        return 12
                    case 5:
                        return 16
                    case 7:
                        return 18
                    default:
                        return 10
                }
        }
    } else {
        switch (type) {
            case "oak":
            case "ash":
            case "beech":
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
                    case 11:
                        return 22
                    default:
                        return 12
                }
        }
    }
}
const rangeValueToHeightPlintus = (category, type, value) => {
    if (category === "mdf") {
        switch (type) {
            case "dyed":
                switch (+value) {
                    case 1:
                        return 70
                    case 3:
                        return 80
                    case 5:
                        return 100
                    case 7:
                        return 120
                    case 9:
                        return 150
                    default:
                        return 70
                }
        }
    } else {
        switch (type) {
            case "oak":
            case "ash":
            case "beech":
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
    }
}
const rangeValueToHeightRake = (category, type, value) => {
    if (category === "mdf") {
        switch (type) {
            case "dyed":
                switch (+value) {
                    case 1:
                        return 20
                    case 3:
                        return 30
                    case 5:
                        return 40
                    case 7:
                        return 50
                    case 9:
                        return 60
                    case 11:
                        return 80
                    case 13:
                        return 90
                    case 15:
                        return 100
                    default:
                        return 20
                }
        }
    } else {
        switch (type) {
            case "oak":
            case "ash":
            case "beech":
                switch (+value) {
                    case 1:
                        return 30
                    case 3:
                        return 40
                    case 5:
                        return 50
                    case 7:
                        return 60
                    default:
                        return 30
                }
        }
    }
}
const rangeValueToThicknessRake = (category, type, value) => {
    if (category === "mdf") {
        switch (type) {
            case "dyed":
                switch (+value) {
                    case 1:
                        return 20
                    case 3:
                        return 25
                    case 5:
                        return 30
                    case 7:
                        return 40
                    case 9:
                        return 50
                    default:
                        return 20
                }
        }
    } else {
        switch (type) {
            case "oak":
            case "ash":
            case "beech":
                switch (+value) {
                    case 1:
                        return 20
                    case 3:
                        return 25
                    case 5:
                        return 40
                    case 7:
                        return 45
                    default:
                        return 12
                }
        }
    }
}
const rangeValueToHeightTrim = (category, type, value) => {
    if (category === "mdf") {
        switch (type) {
            case "dyed":
                switch (+value) {
                    case 1:
                        return 60
                    case 3:
                        return 70
                    case 5:
                        return 80
                    case 7:
                        return 90
                    case 9:
                        return 100
                    default:
                        return 60
                }
        }
    } else {
        switch (type) {
            case "oak":
            case "ash":
            case "beech":
                switch (+value) {
                    case 1:
                        return 60
                    case 3:
                        return 70
                    case 5:
                        return 80
                    case 7:
                        return 90
                    case 9:
                        return 100
                    default:
                        return 30
                }
        }
    }
}
const rangeValueToThicknessTrim = (category, type, value) => {
    if (category === "mdf") {
        switch (type) {
            case "dyed":
                switch (+value) {
                    case 1:
                        return 10
                    case 3:
                        return 12
                    case 5:
                        return 16
                    case 7:
                        return 18
                    default:
                        return 20
                }
        }
    } else {
        switch (type) {
            case "oak":
                switch (+value) {
                    case 1:
                        return 12
                    case 3:
                        return 14
                    case 5:
                        return 16
                    case 7:
                        return 20
                    default:
                        return 12
                }
            case "ash":
            case "beech":
                switch (+value) {
                    case 1:
                        return 10
                    case 3:
                        return 12
                    case 5:
                        return 16
                    case 7:
                        return 18
                    default:
                        return 10
                }
        }
    }
}