// function updateTime () {
// let today = new Date();
// console.log(today);

// let thisHour = today.getHours();
// console.log(thisHour);

// let thisMinute = today.getMinutes();
// console.log(thisMinute);

// let thisSecond = today.getSeconds();
// console.log(thisSecond);

// if(thisHour > 12) {
//     thisHour = thisHour - 12
// }

// if(thisMinute < 10) {
//     thisMinute = "0" + thisMinute 
// }

// if(thisSecond < 10) {
//     thisSecond = "0" + thisSecond;
// }

// let time = document.getElementById("time-box");

// time.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;

// let mappedSecond = map(thisSecond, 0, 59, 0, 100)
// secondElem.style.left= mappedSecond + "vw";

// }

// setInterval(updateTime, 1000);

// function map(value, low1, high1, low2, high2) {
//     return low2 + (high2 -low2) * (value - low1) / (high1 - low1);
//   }

// //From p5.js example, this will help me to build my time-based particle system!//



//  function setup() {
//    createCanvas(windowWidth, windowHeight);
//    background ('black');
//  }

//  let colors = ['darkturquoise','paleturquoise','powderblue','whitesmoke', 'khaki']
//  let starspeed = 1;
//  let stardirectionx = 1;
//  let stardirectiony = -1;

//  let mappedHour = map(thisHour, 0, 23, 10, 100);

//  function draw() {

//     function star(x, y, radius1, radius2, npoints) {
//         let angle = TWO_PI / npoints;
//         let halfAngle = angle / 2.0;
//         beginShape();
//         for (let a = 0; a < TWO_PI; a += angle) {
//           let sx = x + cos(a) * radius2;
//           let sy = y + sin(a) * radius2;
//           vertex(sx, sy);
//           sx = x + cos(a + halfAngle) * radius1;
//           sy = y + sin(a + halfAngle) * radius1;
//           vertex(sx, sy);
//         }

//         x = x + (stardirectionx * starspeed);
//         y = y + (stardirectiony * starspeed);

//         endShape(CLOSE);
//       }

//     fill (random(colors));

//     push();
//     translate(width * 0.2, height * 0.5);
//     rotate(frameCount / 200.0);
//     star(0, 0, 40, 70, 12);
//     pop();

//     push();
//     translate(width * 0.5, height * 0.5);
//     rotate(frameCount / 200.0);
//     star(0, 0, 40, 70, 12);
//     pop();

//     push();
//     translate(width * 0.8, height * 0.5);
//     rotate(frameCount / 200.0);
//     star(0, 0, 40, 70, 12);
//     pop();

//  }


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

  endShape(CLOSE);
}


// this class describes the properties of a single particle.
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r1 = random(5, 10);
    this.r2 = random(10, 20);
    this.npoints = floor(random(5, 12));
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
    this.color = [100, 100, 100];
  }

  // creation of a particle.
  drawParticle(mappedSize) {
    noStroke();
    push()
    drawingContext.shadowBlur = 40;
    drawingContext.shadowColor = color(207, 7, 99);
    fill(this.color);
    translate(this.x, this.y)
    rotate(frameCount / 200.0);
    star(0, 0, this.r1 + mappedSize, this.r2, this.npoints);
    pop()
    // star(this.x, this.y, this.r1, this.r2, this.npoints);

  }

  // setting the star in motion.
  moveParticle() {
    if (this.x < 0 || this.x > width)
      this.xSpeed *= -1;
    if (this.y < 0 || this.y > height)
      this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  updateColorHue(color) {
    this.color[0] = color
    this.color[0] = this.color[0] % 100
  }

  updateColorSat(color) {
    this.color[1] = color
    this.color[1] = this.color[1] % 100
  }

  updateColorBright(color) {
    this.color[2] = color
    this.color[2] = this.color[2] % 100
  }

}

// an array to add multiple particles
let particles = [];

let currentSecond;
let currentMinute;
let currentHour;


function setup() {
  frameRate(60)
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);

  //particles.mouseOver(changeDirection);

  // function changeDirection() {

  //}
}

function draw() {

  currentSecond = second();
  currentMinute = minute();
  currentHour = hour();


  let mappedSize = map(currentHour, 0, 23, 10, 100)
  let mappedColor = map(currentSecond, 0, 59, 0, 100)

  console.log(currentSecond)

  if (particles.length < currentMinute) {
    particles.push(new Particle());
  } else if (particles.length > currentMinute) {
    particles.pop();
  }


  background('#0f0f0f');
  for (let i = 0; i < particles.length; i++) {
    particles[i].drawParticle(mappedSize);
    particles[i].moveParticle();

    if (currentSecond % 10) {
      particles[i].updateColorHue(45);
      particles[i].updateColorSat(mappedColor);
      particles[i].updateColorBright(mappedColor);
    }

  }
}


