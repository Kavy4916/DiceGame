var player1 = prompt("Enter player-1 name: ")
document.querySelector("button").textContent= player1;
var player2 = prompt("Enter player-2 name: ")
document.querySelector(".name1").textContent= player1;
document.querySelector(".name2").textContent= player2;
var score1=0;
var score2=0;
var count=1;
document.querySelector("button").addEventListener("click",startTheGame);
function startTheGame(){
    if(score1>=100 || score2>=100){
        document.querySelector("button").style.visibility="hidden";
        if(score1>=100){
            document.querySelector("h1").textContent="Hurray! "+player1+" Won"
        }
        else{
            document.querySelector("h1").textContent="Hurray! "+player2+" Won"
        }
    }
    else{
      var randomScore=Math.floor(Math.random()*6)+1;
      imageChanger(randomScore);
      if(count%2===0)
      {
          score2+=randomScore;
          document.querySelector(".score2").textContent=score2;
          count++;
          document.querySelector("button").textContent= player1;
      }
      else
      {
          score1+=randomScore;
          document.querySelector(".score1").textContent=score1;
          count++;
          document.querySelector("button").textContent=player2;
      }
    }
}
function imageChanger(randomScore){
switch(randomScore)
{
    case 1:
        document.querySelector("#img1").setAttribute("src","./png-1.png");
    break;   
    case 2:
        document.querySelector("#img1").setAttribute("src","./png-2.png");
    break;   
    case 3:
        document.querySelector("#img1").setAttribute("src","./png-3.png");
    break;   
    case 4:
        document.querySelector("#img1").setAttribute("src","./png-4.png");
    break;   
    case 5:
        document.querySelector("#img1").setAttribute("src","./png-5.png");
    break;   
    case 6:
        document.querySelector("#img1").setAttribute("src","./png-6.png");
    break;                        
}
}
