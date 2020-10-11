
let t = 0; // time variable
var color = 0
let song;

function preload() {
  song = loadSound('asse/Best.mpeg');
  song.loop();
}

function setup() {
  createCanvas(600, 600);
    noStroke();

}
function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    
  } else {
    song.play();
    
  }
}

function draw() {
  background(10, 10); // translucent background (creates trails)
  color = map(mouseY,0,600,0, 255);
  if(mouseX < 100) {
      noStroke();

    fill(color,250,100);
    
  }
  
  if(mouseX >= 100 && mouseX <= 200) {
      noStroke();

    fill(color,250,100);
    
  }
  
  if(mouseX > 200) {
      noStroke();

    fill(color,250,100);
  }  
  // make a x and y grid of ellipses
  
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
      
    }
    
  }

  t = t + 0.01; // update time
}
