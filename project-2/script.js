let body = document.getElementById("body");

//width and height for body//
let changeBodyWidth = document.getElementById("width-range");
let widthValueText = document.getElementById("width-value");

function bodyWidthChange() {
    body.style.width = changeBodyWidth.value + "vw";
    widthValueText.innerHTML = changeBodyWidth.value;
}

let changeBodyHeight = document.getElementById("height-range");
let heightValueText = document.getElementById("height-value");

function bodyHeightChange() {
    body.style.height = changeBodyHeight.value + "vw";
    heightValueText.innerHTML = changeBodyHeight.value;
}

//length of arms//
let armSlider = document.getElementById("arm-length");
let armLengthValue = document.getElementById("arm-length-value");

function armLengthChange() {
    arm1.style.width = armSlider.value + "vw";
    arm2.style.width = armSlider.value + "vw";
    armLengthValue.innerHTML = armSlider.value;
}

//length of legs//
let legSlider = document.getElementById("leg-length");
let legLengthValue = document.getElementById("leg-length-value");

function legLengthChange() {
    leg1.style.height = legSlider.value + "vw";
    leg2.style.height = legSlider.value + "vw"; 
    legLengthValue.innerHTML = legSlider.value;
}

//color picker for body//
let colorPicker = document.getElementById("color-picker");

function bodyColorChange() {
    console.log(colorPicker.value);
    body.style.backgroundColor = colorPicker.value;
}

//color picker for arms//
let arm1 = document.getElementById("arm1");
let arm2 = document.getElementById("arm2");
let colorPickerArms = document.getElementById("color-picker-arms");

function armsColorChange() {
    arm1.style.backgroundColor = colorPickerArms.value;
    arm2.style.backgroundColor = colorPickerArms.value;
}
