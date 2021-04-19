class Paper {
    constructor(x, y, radius) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }

        this.x=x;
        this.y=y;
        this.radius=radius;

        this.body = Bodies.circle(this.x, this.y, (this.radius-20)/2, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var position = this.body.position;
        push();
        translate(position.x, position.y);
        
        rectMode(CENTER);
        imageMode(CENTER);
        //strokeWeight(3);
        //fill("red");
        //ellipse(0, 0, this.radius, this.radius);
        image(this.image,0,0,this.radius,this.radius);
        pop();
      }
}