class Drop {

constructor(x,y){
 
    var options = {
      'friction':0.1,
     'restitution':0.8,
     'density':1.0

    }

    this.body = Bodies.circle(x,y,20,options);
   this.x=x;
    this.y=y;
    this.radius=20;

    World.add(world,this.body);

}


display(){
    //var pos =this.body.position;

    if(this.body.position.y>390){
  Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
    }
    var Maxdrops=100;
    
    

    //for(var i=0;i<100;i=i+2){
   //drop.push(this.body(random(0,400),random(0,400))); 
   // }
   stroke("blue");
    fill("blue");

    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

}
}