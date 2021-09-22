class Snow{
    constructor(x,y,w,h){
        var options = {
            restitution:0.4
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w
        this.h = h
        this.image = loadImage("snow4.webp")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        image(this.image,this.body.position.x,this.body.position.y)
        this.image.scale = 0.5
        pop()
    }
}