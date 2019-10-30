window.onload=function(){
    Game.init();

};

VAR =
{
    fps:60,
    w:0,
    h:0,
    lastTime:0,
    rand:function(min,max){
        return Math.floor(Math.random()*(max-min+1))+min
    }

};
Game =
{
    
    init:function(){
        Game.canvas = document.createElement("canvas");
        Game.hitcanvas = document.createElement("canvas");
        Game.ctx = Game.canvas.getContext("2d");
        Game.hitctx = Game.hitcanvas.getContext("2d");
        Game.layout();
        window.addEventListener("resize",Game.layout);
        document.body.appendChild(Game.canvas);
       
      
        for (var i=0;i<4;i++)
        {
            new Asteroid(2);
            
        }
           
        
        Game.ship =new Ship();
        window.addEventListener("keydown",Game.keyload);
        window.addEventListener("keyup",Game.keyload);
        Game.animationLoop();
    },
    stop:function()
    {
        window.removeEventListener("keydown",Game.keyload);
        window.removeEventListener("keyup",Game.keyload);
    },
    keyload:function(e){

		if(e.keyCode==37 || e.keyCode==39 || e.keyCode==38 || e.keyCode==32){
			
			if(e.type=='keydown' && !Game['key_'+e.keyCode]){
				Game['key_'+e.keyCode] = true;
			
				if(e.keyCode==37){
					Game.key_39 = false;
                }
                else if(e.keyCode==39){
					Game.key_37 = false;
                }
                else if(e.keyCode==32){
				new Bullet();
				}
			}else if(e.type=='keyup'){
				Game['key_'+e.keyCode] = false;
			}

		}
	},
    layout:function(){
        VAR.w = window.innerWidth;
        VAR.h = window.innerHeight;
        VAR.d = Math.min(VAR.w,VAR.h);

        Game.canvas.width = VAR.w;
        Game.canvas.height = VAR.h;

        Game.hitcanvas.width = VAR.w;
        Game.hitcanvas.height = VAR.h;

        Game.hitctx.fillStyle = "red";
        Game.ctx.fillStyle = "white";
        Game.ctx.strokeStyle = "white";
        Game.ctx.lineWidth = 3;
        Game.ctx.lineJoin = "round";

    },
    animationLoop:function(time){
        requestAnimationFrame(Game.animationLoop);
        if(time-VAR.lastTime>=1000/VAR.fps)
        {
            VAR.lastTime=time;
           
            Game.ctx.clearRect(0,0,VAR.w,VAR.h);
            
            Game.ship.draw();
            Asteroid.draw();
            Bullet.draw();
            ExploseInit.draw();
        }
    }
}
            