const rangeInputs = document.querySelectorAll(".rangeSlider input")
const process = document.querySelector(".progress")
const minDifference = 1000
let minValDefoult= parseInt(rangeInputs[0].value)
let maxValDefoult = parseInt(rangeInputs[1].value)
process.style.left = (minValDefoult / rangeInputs[0].max) * 100 + "%"
process.style.right = 100 - (maxValDefoult / rangeInputs[1].max) * 100 + "%"
rangeInputs.forEach(input => {
    input.addEventListener("input", event => {
        let minVal = parseInt(rangeInputs[0].value)
        let maxVal = parseInt(rangeInputs[1].value)

        if (maxVal - minVal < minDifference) {
            if (event.target.className === "range-min") {
                rangeInputs[0].value = maxVal - minDifference
            } else {
                rangeInputs[1].value = minVal + minDifference
            }
        } else {
            process.style.left = (minVal / rangeInputs[0].max) * 100 + "%"
            process.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%"
        }
    })
})
