class Dustbin {
constructor(x,y,width,height){

    var opt = {
isStatic:true


    }


this.Dustbin = Bodies.rectangle(x,y,width,height,opt);
this.dustI = loadImage("dust.png")
this.width = width
this.height = height


World.add(world,this.Dustbin);
}




display (){

var pos = this.Dustbin.position
push ()
translate (pos.x,pos.y)
fill("red")
imageMode (CENTER)
image(this.dustI,0,0,this.width,this.height)

pop ()





}

}