function myFunction(){
var randomDice1=Math.floor(Math.random()*6)+1;
var randomDice2=Math.floor(Math.random()*6)+1;
var randomImage1="images/"+"dice"+randomDice1+".png";
var randomImage2="images/"+"dice"+randomDice2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if (randomDice1>randomDice2) {
  document.querySelector("h1").innerHTML="player 1 has won the game, player 2 is looser!";
  }

  else if(randomDice1===randomDice2){
      document.querySelector("h1").innerHTML="Draw";
  }
  else if (randomDice1<randomDice2) {
      document.querySelector("h1").innerHTML="player 2 has won the game, player 1 is looser!";

  }

  }
