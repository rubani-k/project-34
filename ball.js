class Ball
{
  constructor(x, y, r) 
  {
    
    this.body = Bodies.circle(x, y,r);
    this.r = r;

    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    fill("purple");
    ellipse(pos.x,pos.y, this.r);
    pop();
  }

  throwf()
  {
      Matter.Body.setVelocity(this.body, {x:5, y:-5});
  }

  throwb()
  {
    Matter.Body.setVelocity(this.body, {x:-5, y:-5})
  }
}
