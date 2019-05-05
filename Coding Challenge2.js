
var firstname ={ a:"john the_averge_scoreTeamA:",
                 b:  "mike the_averge_scoreTeamB: ",
                c:"Mary  the_averge_scoreTeamC: "};

var scoreA;
var scoreB;
var  scoreC;
function the_averge_scoreTeamA()
{
     scoreA;
  
    function the_averge_scoreTeamB()
    {
        scoreB= (116+94+123)/3;
        console.log(firstname.b +(scoreB.toFixed(2)));
        function the_averge_scoreTeamC()
        {
             scoreC=(97+134+145)/3;
             console.log(firstname.c +(scoreC.toFixed(2)));
            
        }
        the_averge_scoreTeamC();
    }
    the_averge_scoreTeamB();
    scoreA= (89+120+183)/3;
    console.log(firstname.a +(scoreA.toFixed(2)));
}
the_averge_scoreTeamA();

function teamswins(){
   
    if(scoreA>scoreB && scoreA>scoreC)  
       {
        console.log("teams wins john and Score "+(scoreA.toFixed(2)));

       }
    else if(scoreB>scoreA && scoreB>scoreC) 
    {
        console.log(("teams  mike wins and Score:  "+(scoreB.toFixed(2))));
    }
    else if (scoreC>scoreA && scoreC> scoreB)
    {
        console.log(("teams  Mary wins and Score:  "+(scoreC.toFixed(2))));
    }
     else
    {
        console.log("The same averge draw ");
    }
}
teamswins();

