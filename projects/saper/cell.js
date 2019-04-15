
function Cell(i,j,w)
{
    this.i=i;
    this.j=j;
    this.x=i*w;
    this.y=j*w;
    this.w=w;
    this.blocked=false;
    this.ncount=0;
    (random(1)<0.20)?this.bomb=true:this.bomb=false;

    this.revealed=0; 
    
}
Cell.prototype.show=function()
{
   stroke(0);
   noFill();
rect(this.x,this.y,this.w,this.w);

if(this.revealed==0)
{
    fill(255)
    rect(this.x,this.y,this.w,this.w);
}
else if(this.revealed==1)
{
    if(this.bomb)
    {
        fill(170,193,132);
        rect(this.x,this.y,this.w,this.w);
        fill(0);
     ellipse(this.x+this.w*0.5,this.y+this.w*0.5,this.w*0.5);
    }
    else{
        stroke(0);
        fill(170,193,132);
        rect(this.x,this.y,this.w,this.w);
        textAlign(CENTER);
        textSize(30);
        fill(0);
        if(this.ncount>0)
        text(this.ncount,this.x+this.w*0.5,this.y+this.w-9);
      
    }
}
else if(this.revealed==2)
{
    fill(255);
    textSize(30);
    textAlign(CENTER);
    rect(this.x,this.y,this.w,this.w);
    fill(0);
    text("?",this.x+this.w*0.5,this.y+this.w-9);

}
}

Cell.prototype.contain=function(x,y)
{
    return(x>this.x && x<this.x+this.w && y>this.y && y<this.y +this.w);
}
Cell.prototype.reveal = function()
{
    this.revealed=1;

    if(this.ncount==0)
    {
        this.autoMode();
    }
}
Cell.prototype.neighbourhood = function(x,y)
{
    if(this.bomb)
    {
        this.ncount= -1;
    }
    var sum=0;
    for (var i = -1; i <= 1; i++) {
        
        if (this.i+i < 0 || this.i+i >= cols) continue;
    
        for (var j = -1; j <= 1; j++) {
         
          if (this.j+j< 0 || this.j+j>= rows) continue;
            var neighbour=table[this.i+i][this.j+j];
        
            
neighbour.bomb?sum++:null;


    }
}

this.ncount=sum;
}
Cell.prototype.capture = function()
{
    if(this.revealed==0)
    {
        this.revealed=2;
        
        
    }
       
        else if(this.revealed==2)
        {
            this.revealed=0;
       
        }
      
}
Cell.prototype.autoMode = function()
{
    for (var i = -1; i <= 1; i++) {
        
        if (this.i+i < 0 || this.i+i >= cols) continue;
    
        for (var j = -1; j <= 1; j++) {
         
          if (this.j+j< 0 || this.j+j>= rows) continue;
            var neighbour=table[this.i+i][this.j+j];
            if(!neighbour.bomb && neighbour.revealed==0)
            {
                neighbour.reveal();
            }
           
        }
    }
}