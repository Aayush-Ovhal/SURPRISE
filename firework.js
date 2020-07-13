function firework(){

    this.hu = random(255);
    this.firework = new particles(random(width),height,this.hu,true);
    this.exploded = false;
    this.particles = [];

    this.update = function(){

        if(!this.exploded){
      this.firework.applyForce(gravity);
      this.firework.update();
      if(this.firework.vel.y >= 0){
        this.exploded = true;
        this.explode();
      }
    }

    for(var i = this.particles.length-1; i >= 0; i--){
         this.particles[i].applyForce(gravity);
         this.particles[i].update();
         if(this.particles[i].done()){
            this.particles.splice(i, 1);
         }
    }
  }

   this.done = function(){
     if(this.exploded && this.particles.length === 0){
       return true;
     }else{
       return false;
     }
   }

    this.explode = function(){
        for(var i = 0; i < 100; i++){
            var p = new particles(this.firework.pos.x,this.firework.pos.y,this.hu,false);
             this.particles.push(p);
        }
    }

    this.display = function(){
      if(!this.exploded){
       this.firework.display();
     }

     for(var i = 0; i < this.particles.length; i++){
         this.particles[i].display();
     }
    }
}