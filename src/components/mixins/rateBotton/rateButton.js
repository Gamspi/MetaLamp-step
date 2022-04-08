const rateButton = document.querySelectorAll(".rate-button")


rateButton.forEach(btn => {
    btn.addEventListener("mouseover", mouseOver)
    btn.addEventListener("click", click)
    btn.addEventListener("mouseout", mouseleave)
})

function mouseOver(event) {
    if (event.target.classList.contains("rate-button__star")) {
        let num = event.target.getAttribute("data-rate")
        for (let i = 0; i < num; i++) {
            event.target.closest(".rate-button").children[i].classList.add('rate-button__star_prev-active')
        }
    }
}

function mouseleave(event) {
    if (event.target.classList.contains("rate-button__star")) {
        let num = event.target.getAttribute("data-rate")
        for (let i = 0; i < num; i++) {
            event.target.closest(".rate-button").children[i].classList.remove('rate-button__star_prev-active')
        }
    }

}

function click(event) {
    if (event.target.classList.contains("rate-button__star")) {
        let num = event.target.getAttribute("data-rate")
        for (let i = 0; i < 5; i++) {
            if (i < num) {
                event.target.closest(".rate-button").children[i].classList.add('rate-button__star_active')
            } else {
                event.target.closest(".rate-button").children[i].classList.remove('rate-button__star_active')
            }
        }
    }
}
