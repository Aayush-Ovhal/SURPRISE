var canvas;
var fireworks = [];
var gravity;
var camera;
var angle;

var alpha;

function setup(){
    canvas = createCanvas(750,360);

    colorMode(HSB);

    gravity = createVector(0,0.1);

    angle = 0;

    background(0);

    alpha = 0;
}

function draw(){
    colorMode(RGB);
    background(0,0,0,25);

     stroke(255,255,255,alpha);
     textSize(50);
    text("THANK YOU YASHASHWANI MA'AM",200,100,200);

    alpha += 0.1;

    if(random(1) < 0.15){
        fireworks.push(new firework());
      }
  
      for(var i = fireworks.length-1; i >= 0 ; i--){
          fireworks[i].update();
          fireworks[i].display();
          if(fireworks[i].done()){
              fireworks.splice(i, 1);
          }
      }
  
      angle += 0.1;
}