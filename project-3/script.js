function updateTime () {
let today = new Date();
console.log(today);

let thisHour = today.getHours();
console.log(thisHour);

let thisMinute = today.getMinutes();
console.log(thisMinute);

let thisSecond = today.getSeconds();
console.log(thisSecond);

if(thisHour > 12) {
    thisHour = thisHour - 12
}

if(thisMinute < 10) {
    thisMinute = "0" + thisMinute 
}

if(thisSecond < 10) {
    thisSecond = "0" + thisSecond;
}

let time = document.getElementById("time-box");

time.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;

let mappedSecond = map(thisSecond, 0, 59, 0, 100)
secondElem.style.left= mappedSecond + "vw";

}

setInterval(updateTime, 1000);

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 -low2) * (value - low1) / (high1 - low1);
  }

//From p5.js example, this will help me to build my time-based particle system!//


    
 function setup() {
   createCanvas(windowWidth, windowHeight);
   background ('black');
 }

 let colors = ['darkturquoise','paleturquoise','powderblue','whitesmoke', 'khaki']
 let starspeed = 1;
 let stardirectionx = 1;
 let stardirectiony = -1;

 function draw() {
  
    function star(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius2;
          let sy = y + sin(a) * radius2;
          vertex(sx, sy);
          sx = x + cos(a + halfAngle) * radius1;
          sy = y + sin(a + halfAngle) * radius1;
          vertex(sx, sy);
        }
    
        x = x + (stardirectionx * starspeed);
        y = y + (stardirectiony * starspeed);
    
        endShape(CLOSE);
      }

    fill (random(colors));
  
    push();
    translate(width * 0.2, height * 0.5);
    rotate(frameCount / 200.0);
    star(0, 0, 40, 70, 12);
    pop();

    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 200.0);
    star(0, 0, 40, 70, 12);
    pop();

    push();
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / 200.0);
    star(0, 0, 40, 70, 12);
    pop();

 }




