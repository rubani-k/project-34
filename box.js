class Box
{
  constructor(x, y, w,h) 
  {
    
    
    this.body = Bodies.rectangle(x, y, w, h);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    fill("blue")
    rect(pos.x,pos.y, this.w, this.h);
    pop();
  }
}
