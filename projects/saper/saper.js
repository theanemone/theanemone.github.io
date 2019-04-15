
var table;
var w=40;
var cols;
var rows;
function createArray(cols,rows)
{
   
        var arr=new Array(cols);
        for(let i=0;i<arr.length;i++)
        {
            arr[i]=new Array(rows);
        }
        return arr;
    
}

function setup()
{
    document.querySelector(".result").innerHTML="";
    createCanvas(401,401);
   
    cols=floor(width/w);
    rows=floor(height/w);
    table=createArray(cols,rows);
    for(let i=0;i<cols;i++)
    {
        for(let j=0;j<rows;j++)
        {
            table[i][j]=new Cell(i,j,w);
        }
    }
    for(var i=0;i<cols;i++)
    {
        for(var j=0;j<rows;j++)
        {
            table[i][j].neighbourhood();
        }
    }
    
}
function draw()
{
    background(255);
    for(var i=0;i<cols;i++)
    {
        for(var j=0;j<rows;j++)
        {
           table[i][j].show();
        }
    }
    
}

function mousePressed(e)
{
   

   
    for(var i=0;i<cols;i++)
    {
        for(var j=0;j<rows;j++)
        {
            if(table[i][j].contain(mouseX,mouseY))
            {
                if(e.button==0)
                {
                    
                    if(!table[i][j].blocked)
                    {
                    table[i][j].reveal();
                    if(table[i][j].bomb)
                    {
                   
                       gameOver();
                    }
                    checkWin();
                }
                }
                if(e.button==2)
                {
                    if(!table[i][j].blocked)
                    {
                    table[i][j].capture();
               
                 return false;
                    }
                }
            }
        }
    }
}

function gameOver()
{
    for(var i=0;i<cols;i++)
    {
        for(var j=0;j<rows;j++)
        {

           table[i][j].blocked=true;

           
        }
    }
    
    document.querySelector(".result").innerHTML='Przegrałeś.<div class="score">Zagraj Ponownie</div>';
    document.querySelector('.score').addEventListener("click",function(){setup()});
    setTimeout(function(){
        for(var i=0;i<cols;i++)
        {
            for(var j=0;j<rows;j++)
            {
    
               table[i][j].revealed=true;
    
               
            }
        }

    },1000);
}
function checkWin()
{
    var total=0;
    var bombs=0;
    for(var i=0;i<cols;i++)
    {
        for(var j=0;j<rows;j++)
        {
            if(table[i][j].revealed!=1)  total++;
        
          if(table[i][j].bomb)bombs++;
          
        }
    }
    if(bombs==total)
    {
        document.querySelector('.result').innerHTML='Wygrałeś.<div class="score">Zagraj Ponownie</div>';
        document.querySelector('.score').addEventListener("click",function(){setup()});
    }
    console.log(`total: ${total}`);
    console.log(`bombs: ${bombs}`);
}