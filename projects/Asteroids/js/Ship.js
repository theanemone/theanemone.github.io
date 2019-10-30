function Ship(){
this.r=0.04;
this.rear_a=50;
this.a=0;
this.x=VAR.w/2;
this.y=VAR.h/2;
this.modX=0;
this.modY=0;
this.acc=0.0004;
this.max=0.019;
this.points=[{},{},{}];
}
Ship.prototype.collisiontest = function()
{
    for (var i=0;i<this.points.length;i++)
    {
        for (var a in Asteroid.all)
        {
    if(Asteroid.all[a].collisiontest(this.points[i].x,this.points[i].y))
    {
        Asteroid.all[a].remove();
        return true;
    }
   
        }
    }
    return false;
}
Ship.prototype.draw=function(){
    if(!this.destroyed)
    {
    if(this.collisiontest())
    {
        this.destroyed=true;
        Game.stop();
    }
    else
    {
        if(Game.key_37 || Game.key_39)
        {
            this.a=this.a+7*(Game.key_37?-1:1);
        }
        if(Game.key_38)
        {
            this.modX=this.modX+Math.sin(Math.PI/180*this.a)*this.acc*VAR.d;
            this.modY=this.modY-Math.cos(Math.PI/180*this.a)*this.acc*VAR.d;
        }
        else
        {
            this.modX*=0.98;
            this.modX=Math.abs(this.modX)<0.0001?0:this.modX;
            this.modY*=0.98;
            this.modY=Math.abs(this.modY)<0.0001?0:this.modY;
        }
        this.x+=this.modX;
        this.y+=this.modY;
    Game.ctx.beginPath()
    for(var i=0;i<3;i++)
    {
      
        
        this.temp_a = i === 0 ? this.a : (this.a + 180 + (i === 1 ? this.rear_a : - this.rear_a));
        this.temp_r = i===0 ? this.r*1 : this.r*0.6
        this.points[i].x = Math.sin(Math.PI/180*this.temp_a)*this.temp_r*VAR.d+this.x;
        this.points[i].y = -Math.cos(Math.PI/180*this.temp_a)*this.temp_r*VAR.d+this.y;
       
    
        Game.ctx[i === 0 ? 'moveTo' : 'lineTo'](this.points[i].x , this.points[i].y);
    
    
    }
            Game.ctx.closePath();
            Game.ctx.stroke();
           
            if(Game.key_38 && this.engine){
                Game.ctx.beginPath();
                this.engine = false;
                for (i = 0; i < 3; i++) {
                    this.temp_a = i!=1 ? this.a+180+(i===0 ? -this.rear_a+14 : this.rear_a-14) : this.a+180;
                    this.temp_r = i==1 ? this.r : this.r*0.5;
                    Game.ctx[i===0?'moveTo':'lineTo'](
                        (Math.sin(Math.PI/180*this.temp_a)*this.temp_r*VAR.d)+this.x,
                        (-Math.cos(Math.PI/180*this.temp_a)*this.temp_r*VAR.d)+this.y
                    );
                }
                Game.ctx.stroke();
            }else if(Game.key_38 && !this.engine){
                this.engine=true;
            }
            if(this.points[0].x<0 && this.points[1].x<0 && this.points[2].x<0) 
            {
                this.x+=VAR.w - Math.min(this.points[0].x,this.points[1].x,this.points[2].x)*0.9;
            }
            else if(this.points[0].x>VAR.w && this.points[1].x>VAR.w && this.points[2].x>VAR.w)
            {
                this.x-=VAR.w - (VAR.w-Math.max(this.points[0].x,this.points[1].x,this.points[2].x))*0.9;
            }
            if(this.points[0].y<0 && this.points[1].y<0 && this.points[2].y<0) 
            {
                this.y+=VAR.h - Math.min(this.points[0].y,this.points[1].y,this.points[2].y)*0.9;
            }
            else if(this.points[0].y>VAR.h && this.points[1].y>VAR.h && this.points[2].y>VAR.h)
            {
                this.y-=VAR.h - (VAR.h-Math.max(this.points[0].y,this.points[1].y,this.points[2].y))*0.9;
            }
    }
}
};