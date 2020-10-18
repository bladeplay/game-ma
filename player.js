class Player {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("player.jpg");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    moveLeft(){
        this.body.x=20
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      camera.x=this.body.position.x
      camera.y=this.body.position.y
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
