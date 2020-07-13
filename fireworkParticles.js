function particles(x,y,hu,firework){
    this.pos = createVector(x,y);
    this.lifespan = 255;
    this.hu = hu;

     this.firework = firework;
    if(this.firework){
        this.vel = createVector(0,random(-12,-8));
    }else{
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(2,10));
    }
    this.acc = createVector(0,0);
    
    this.applyForce = function(force){
        this.acc.add(force);
    }

    this.update = function(){

        if(!this.firework){
            this.vel.mult(0.9);
            this.lifespan -= 4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.done = function(){
        if(this.lifespan < 0){
          return true;
        }else{
          return false;
        }
      }

    this.display = function(){
        colorMode(HSB);
 
        if(!this.firework){
            strokeWeight(1);
            stroke(hu,255,255,this.lifespan);
        }else{
            strokeWeight(2);
            stroke(hu,255,255);
        }

        noFill();
        ellipse(this.pos.x,this.pos.y,random(1,5),random(1,5));
    
    }
}