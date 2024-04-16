//start button --> will activate customization options//
let startButton = document.getElementById("start-button");
let mainContent = document.getElementById("main-content");
let titleBox = document.getElementById("title");
let wrapperBox = document.getElementById("wrapper");

function optionsAppear() {
    startButton.style.display = "none";
    mainContent.style.transform = "translate(-260px)";
    titleBox.innerHTML = "* :˚₊‧ stylize your pixsona! ‧₊˚: *"
    mainContent.style.transition = "0.7s";
    wrapperBox.style.opacity = "1.0";
    wrapperBox.style.transition = "1.2s";
}


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



//length of arms + thickness of arms//
let armSlider = document.getElementById("arm-length");
let armLengthValue = document.getElementById("arm-length-value");

function armLengthChange() {
    arm1.style.width = armSlider.value + "vw";
    arm2.style.width = armSlider.value + "vw";
    armLengthValue.innerHTML = armSlider.value;
}

let armThickSlider = document.getElementById("arm-thickness");
let armThickValue = document.getElementById("armthick-value");

function armHeightChange() {
    arm1.style.height = armThickSlider.value + "vw";
    arm2.style.height = armThickSlider.value + "vw";
    armThickValue.innerHTML = armThickSlider.value;
 }



//length of legs + thickness of legs//
let legSlider = document.getElementById("leg-length");
let legLengthValue = document.getElementById("leg-length-value");

function legLengthChange() {
    leg1.style.height = legSlider.value + "vw";
    leg2.style.height = legSlider.value + "vw"; 
    legLengthValue.innerHTML = legSlider.value;
}

let legThickness = document.getElementById("leg-thickness");
let legThickValue = document.getElementById("legthick-value");

function legWidthChange() {
    leg1.style.width = legThickness.value + "vw";
    leg2.style.width = legThickness.value + "vw";
    legThickValue.innerHTML = legThickness.value;
}



//color picker for body//
let colorPicker = document.getElementById("color-picker");

function bodyColorChange() {
    console.log(colorPicker.value);
    body.style.backgroundColor = colorPicker.value;
    // document.body.style.backgroundColor = colorPicker.value;
}



//color picker for arms//
let arm1 = document.getElementById("arm1");
let arm2 = document.getElementById("arm2");
let colorPickerArms = document.getElementById("color-picker-arms");

function armsColorChange() {
    arm1.style.backgroundColor = colorPickerArms.value;
    arm2.style.backgroundColor = colorPickerArms.value;
}



//color picker for legs//
let leg1 = document.getElementById("leg1");
let leg2 = document.getElementById("leg2");
let colorPickerLegs = document.getElementById("color-picker-legs");

let foot1 = document.getElementById("foot1");
let foot2 = document.getElementById("foot2");

function legsColorChange() {
    leg1.style.backgroundColor = colorPickerLegs.value;
    leg2.style.backgroundColor = colorPickerLegs.value;
    foot1.style.backgroundColor = colorPickerLegs.value;
    foot2.style.backgroundColor = colorPickerLegs.value;
}



//color picker for face//
let colorPickerFace = document.getElementById("color-picker-face");

function faceColorChange() {
    lefteye.style.color = colorPickerFace.value;
    righteye.style.color = colorPickerFace.value;
    mouth.style.color = colorPickerFace.value;
}



//eye selector//
let lefteye = document.getElementById("eye1");
let righteye = document.getElementById("eye2");

let eyebtnforward = document.getElementById("shuffle-eye-forward");
let eyeArray = ["^", "-", ">","<", "o", "T", "v", "=", ",", "~", "!", "*", "x", "+", "4", "8", "•"]

let index = 0

eyebtnforward.onclick = function() {
    lefteye.innerHTML = eyeArray[index];
    righteye.innerHTML = eyeArray[index];
    index = index + 1

    if (index > 16) {
        index = 0
    }
}



//mouth selector//
let mouth = document.getElementById("mouth");
let mouthShuffler = document.getElementById("mouth-shuffler");

let mouthArray = [".", "w", "u", "o", "0", "x", "3", "n", "#","m", "v","~", "p", "T", "_"]


mouthShuffler.onclick = function() {
    mouth.innerHTML = mouthArray[index];
    index = index + 1

    if (index > 14) {
        index = 0
    }
}


//random output generator//
let random = document.getElementById("random-btn");

let randomEyes = Math.random() * eyeArray.length;
let randomMouth = Math.random() * mouthArray.length; 

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

let randomColor = "rgb(" + r + "," + g + "," + b + ")";

function randomEverything() {
   changeBodyWidth.value = Math.floor(Math.random() * (30 - 9)) + 9;
   body.style.width = changeBodyWidth.value + "vw";
   widthValueText.innerHTML = changeBodyWidth.value;
   body.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";

   changeBodyHeight.value = Math.floor(Math.random() * (20 - 9)) + 9;
   body.style.height = changeBodyHeight.value + "vw";
   heightValueText.innerHTML = changeBodyHeight.value;

   armSlider.value = Math.floor(Math.random() * (20 - 1)) + 1;
   armLengthValue.innerHTML = armSlider.value;
   arm1.style.width = armSlider.value + "vw";
   arm2.style.width = armSlider.value + "vw";
   arm1.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
   arm2.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";


   legSlider.value = Math.floor(Math.random() * (13 - 3)) + 3;
   legLengthValue.innerHTML = legSlider.value;
   leg1.style.height = legSlider.value + "vw";
   leg2.style.height = legSlider.value + "vw";
   leg1.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
   leg2.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
   foot1.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
   foot2.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";


   armThickSlider.value = Math.floor(Math.random() * (5 - 1)) + 1;
   armThickValue.innerHTML = armThickSlider.value;
   arm1.style.height = armThickSlider.value + "vw";
   arm2.style.height = armThickSlider.value + "vw";


   legThickness.value = Math.floor(Math.random() * (5 - 1)) + 1;
   legThickValue.innerHTML = legThickness.value;
   leg1.style.width = legThickness.value + "vw";
   leg2.style.width = legThickness.value + "vw";


   lefteye.innerHTML = eyeArray[Math.floor(Math.random() * eyeArray.length)];
   righteye.innerHTML = eyeArray[Math.floor(Math.random() * eyeArray.length)];
   lefteye.style.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
   righteye.style.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";

   mouth.innerHTML = mouthArray[Math.floor(Math.random() * mouthArray.length)];
   mouth.style.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";

}

//name for character//
let characterName = document.getElementById("enter-name");
let characterDiv = document.getElementById("character-name");

function doChangeText() {

    characterDiv.innerHTML = characterName.value;
}









