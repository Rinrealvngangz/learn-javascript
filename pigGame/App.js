
 //document.querySelector('#current-'+activePlayer).textContent=dice;
 //document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';


var scores, roundScore,activePlayer,dice,dice2, gameplaying;
var previousdice;
var roundScore1;
var roundScore0;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
     
    if(gameplaying){
  
    // 1. Random number
      dice = Math.floor(Math.random()*6)+1;
     dice2 = Math.floor(Math.random()*6)+1;
    console.log(dice);
    // 2. Display the result
    
    var diceDOM=  document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    var diceDOM=  document.querySelector('.dice2');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice2+'.png';
    // 3. Update the round score IF the rolled number is NOT a 1
    if(dice === 6 &&  previousdice ===6)
    {
        scores[activePlayer] = 0;
     nextPlayer();  
     document.querySelector('#score-'+activePlayer).textContent='0';
   
    }
     
    else if(dice!==1 && dice2 !==1 ){
        //Add scores
    roundScore0 =dice;
    roundScore1 = dice2;
    roundScore += roundScore0+ roundScore1;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
      }
    else
   {
       nextPlayer();
    }
    previousdice = dice;
}
    }
);

document.querySelector('.btn-hold').addEventListener('click',function(){
   
    if(gameplaying){
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] +=roundScore;
   
    // update the UI
   document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
   var input = document.querySelector('.winningScore').value;
   if(input){
       var winning = input;
   }
   else {
       winning = 100;
   }
    // check if player won the game
     if(scores[activePlayer] >= winning)

    {
        document.querySelector('#name-' + activePlayer).textContent='Winner!';
        document.querySelector('.dice').style.display ='none';
        document.querySelector('.dice2').style.display ='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gameplaying =false;
   }
  else{
    // nextplayer
            nextPlayer();
        }
}
});

document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

   document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
   
 }
function init(){
    scores =[0,0];
    roundScore = 0;
    roundScore1 =0;
     roundScore0 =0;
    activePlayer =0;
    gameplaying =true;
document.getElementById("score-0").textContent='0';
document.getElementById("score-1").textContent='0';
document.getElementById("current-0").textContent='0';
document.getElementById("current-1").textContent='0';
document.querySelector('.dice').style.display ='none';
document.querySelector('.dice2').style.display ='none';
document.getElementById('name-0').textContent='player1';
document.getElementById('name-1').textContent='player2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
}
  