class Ball {
    constructor(x, y, width) {
      var options = {
          'isStatic': false,
          'restitution':0.3,
          'friction':0.5,
          'density':0.5,
      }

      this.body = Bodies.circle(x, y, width, options);
      this.width = width;
      
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS); 
        ellipse(0,0,this.width,this.width);
      pop();
    }
  };