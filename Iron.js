class Iron{
	constructor(x,y,r)
	{
		
 var options={
		restitution:0.8,
		friction:3,
		density:12
	}
		
		this.body=Bodies.circle(x,y,r,options)
		this.r=r
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			strokeWeight(4);
			stroke("black");
			fill("silver");
			ellipseMode(RADIUS)
			ellipse(0,0,this.r,this.r)
			

			pop()
	}

}