class Ball{
	
	constructor(x, y, xspeed, yspeed){
		this.x = x;
		this.y = y;
		this.xSpeed = xspeed;
		this.ySpeed = yspeed;	
	}
	
	display(){
		fill("limegreen");
		ellipse(this.x, this.y, 20, 20);
	}
	
	move(){
		this.x= this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}
	
	bounceY(){
		this.ySpeed = -this.ySpeed;
	}
	
	bounceX(){
			this.xSpeed = -this.xSpeed;	
	}
	
	

	
	
}