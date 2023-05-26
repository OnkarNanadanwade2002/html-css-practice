let grid=document.querySelector(".grid");
let popup=document.querySelector(".popup");
let playagian=document.querySelector(".playagian");
let scoredisplay=document.querySelector(".scoredisplay");
let left=document.querySelector(".left");
let bottom=document.querySelector(".bottom");
let right=document.querySelector(".right");
let up=document.querySelector(".top");
let width=10;
let currentindex=0;
let appleindex=0;
let currentsnake=[2,1,0];
let direction=1;
let score=0;
let speed=0.8;
let intervaltime=0;
let interval =0;

document.addEventListener("DOMContentLoaded",function ()
{
    document.addEventListener("keyup",control);
    createBord();
    startGame();
    playagian.addEventListener("click",replay);
}

);


function createBord()
{
    popup.getElementsByClassName.display="none";
    for(let i=0;i<100;i++)
    {
        let div=document.createElement("div");
        grid.appendChild(div);
    }
}

function startGame()
{
    let squares=document.querySelectorAll(".grid div");
    randomApple(squares);
    direction=1;
    scoredisplay.innerHTML=score;
    intervaltime=1000;
    currentsnake=[2,1,0];
    currentindex=0;
    currentsnake.forEach((index)=>squares[index].classList.add("sanke"));
    interval=setInterval(moveOutcome,intervaltime);
}

function moveOutcome(squares)
{
    let tail=currentsnake.pop();
    squares[tail].classList.remove("snake");
    currentsnake.unshift(currentsnake[0]+direction);
    eatApple(squares,tail);
    squares[currentsnake[0]].classList.add("snake");
}

function checkForHits(squares)
{
    if(
    (currentsnake[0]+width>=width*width&&direction===width)||
    (currentsnake[0]%width===width-1 && direction===1)||
    (currentsnake[0]%width===0 && direction===-1)||
    (currentsnake[0]-width<=0  && direction===-width)||
     squares[currentsnake[0]+ direction].classList.contains("snake")
    )
        {
            return true;
        }
        else
        {
            return false;
        }
}

function eatApple(squares,tail)
{
    if
    (squares[currentsnake[0]].classList.contains("apple"))
    {
        squares[currentsnake[0]].classList.remove("apple");
        squares[tail].classList.add("snake");
        currentsnake.push(tail);
        randomApple(squares);
        score++;
        scoredisplay.textContent=score;
        clearInterval(interval);
        intervaltime=intervaltime*speed;
        interval=setInterval(moveOutcome,intervaltime);
    }
}


function randomApple(squares)
{
    do{
        appleindex=math.floor(math.random()*squares.length);
    }
    while(squares[appleindex].classList.contains("snake"));
    squares[appleindex].classList.add("apple");
}

function control(e)
{
    if(e.keycode===39)
    {
        direction=1;
    }
    else if(e.keycode===38)
    {
        direction=-width;
    }
    else if(e.keycode===37)
    {
        direction=-1;
    }
    else if(e.keycode===37)
    {
        direction=-1;
    }
    else if(e.keycode===40)
    {
        direction=+width;
    }
}

up.addEventListener("clik",()=>(direction=-width));
bottom.addEventListener("click",()=>(direction=+width));
left.addEventListener("clik",()=>(direction=-1));
right.addEventListener("click",()=>(direction=1));

function replay()
{
    grid.innerHTML="";
    createBord();
    startGame();
    popup.style.display="none";
}



