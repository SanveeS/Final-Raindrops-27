class BaseClass{
  constructor(radius) {
    var options = {
      restitution: 0.98,
      frictionAir: 0.04
    }
    this.x= random(0,600);
    this.y = random(-420,0);
    this.raindrop = Bodies.circle(this.x, this.y, radius, options);
    this.radius = radius;
    World.add(world, this.raindrop);
  }
  display() {
    var pos = this.raindrop.position;

    push();
    fill(155, 192, 195);
    stroke(255);
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, this.radius);

    if (this.raindrop.position.y > height + 20) {
      Matter.Body.setPosition(this.raindrop, { x: pos.x, y: Math.random(-100, 0) });

    }

  }
}
 