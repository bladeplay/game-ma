class Box  {
     constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("grass texture.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 2000, this.height);
      pop();
    }
  };
