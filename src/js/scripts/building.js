$(".range__input").on("input", (e) => {
    console.log(e.target.value);
    setPrice(e.target.value)
})

const setPrice = (value) => {
    $(".size__price").html(value+"₽") 
}