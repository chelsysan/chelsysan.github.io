let box = document.getElementById("square");

let changeBodyWidth = document.getElementById("width-range");

let widthValueText = document.getElementById("width-value");

function bodyWidthChange() {
    box.style.width = changeBodyWidth.value + "vw";
    widthValueText.innerHTML = changeBodyWidth.value;
}

//color picker for body
let colorPicker = document.getElementById("color-picker");

function doBodyColorChange() {
    console.log(colorPicker.value);
}
