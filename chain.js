
 class Chain{
     constructor(body1,body2,offSetX,offSetY){
     this.offSetX=offSetX
     this.offSetY=offSetY
     var option={
         bodyA:body1,
         bodyB:body2,
         pointB:{x:this.offSetX,y:this.offSetY},
         length:75,
         stiffness:0.07
     }
    
     this.Chain=Constraint.create(option)
     World.add(world,this.Chain)
     }
     display(){
     line(this.Chain.bodyA.position.x,this.Chain.bodyA.position.y,this.Chain.bodyB.position.x+this.offSetX,this.Chain.bodyB.position.y+this.offSetY)
     }
 }

 