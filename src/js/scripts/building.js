$(".range__input").on("input", (e) => {
    console.log(e.target.value);
    setPrice(e.target.value)
})

const setPrice = (value) => {
    $(".size__price").html(`<p>${value} ₽</p>`) 
}

const chahgeSubmitButtonText = () => {
    if (window.matchMedia("(min-width: 820px)").matches) {
        $(".building__btn").html("Отправить")
    }
}

chahgeSubmitButtonText()

$(window).resize(chahgeSubmitButtonText)
