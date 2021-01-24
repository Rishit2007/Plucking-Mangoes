class Mango 
{
    constructor(x,y,width,height)
 {
    var options={
        isStatic:true,
        restitution:0,
        friction:1,			
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.mangoImage = loadImage("sprites/mango.png");
        this.body.scale = 0.002;
        this.width = width;
        this.height = height;
        
        
        World.add(world, this.body);
}
     display(){
            var position=this.body.position;		
			push()
			translate(position.x, position.y);
            imageMode(CENTER);
            image(this.mangoImage,0,0,this.width,this.height);
            
			pop()
}
}
 