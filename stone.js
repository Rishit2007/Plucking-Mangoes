class Stone 
{
  constructor(x,y,width,height)
  {
    var options = {
        isStatic: false,
        restittion:0,
        friction:1,
        density:1.2,
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.stoneImage = loadImage("sprites/stone.png");
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    push();
    translate(pos.x , pos.y);
    imageMode(CENTER);
    image(this.stoneImage, 0, 0, this.width, this.height);
    pop();
  }
};
