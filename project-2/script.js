let testpixel = document.getElementById("pixel")

let sliderInput = document.getElementById("pixelslider")

function doPixelChange() {
    testpixel.style.opacity = sliderInput.value
}