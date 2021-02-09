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