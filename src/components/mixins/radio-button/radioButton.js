const inputsRado = document.querySelectorAll(".radio-button input");

inputsRado.forEach(input => {
    if(input.checked){
        input.closest(".radio-button").classList.add("radio-button_active")
    }
        input.addEventListener("click", addActiveClass)
    }
)

function addActiveClass(e) {
    removeActiveClass(e.target.name);

    e.target.closest(".radio-button").classList.add("radio-button_active")
}

function removeActiveClass(name) {
    inputsRado.forEach(input => {
        if(input.name === name){
            input.closest(".radio-button").classList.remove("radio-button_active")
        }
    })
}

