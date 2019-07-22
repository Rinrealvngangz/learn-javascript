

// Coding  challengen 7
 
(function () {
    function Question (question,answer,correct){

        this.question=question;
        this.answer=answer;
         this.correct=correct;
    
    }
    
    Question.prototype.displayQuestion = function()
    {
        console.log(this.question);
        for (var i=0;i< this.answer.length;i++)
        {
            console.log(i +' :'+ this.answer[i]);
        }
    } 
    Question.prototype.checkAnswer =function(ans,callback){

        var sc;
        if(ans === this.correct)
        {
            console.log('Correct answer');
              sc = callback(true);
        }
        else {
            console.log('Wrong answer! Try again');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score){
           console.log('You have current is socre :'+ score);
           console.log('---------------------------');
               
           
    }

    var q1= new Question ('Is Javascript the coolest programing language in the world', ['yes','no'],0);
    var q2= new Question ('What is the name of this course\'s teacher?', ['john','Michael','Jonas'],2);
    var q3= new Question ('What does best describe coding', ['Boring','Hard','Fun','Tedious'],2);
   var questions = [q1,q2,q3];


   function score(){
    
       var sc =0;
       return function(correct){
           if(correct)
           {
               sc++;
           }
           return sc;
       }
   }
  var keepscore = score();
   
    function nextquestion() {
     

    
        var n = Math.floor (Math.random()*questions.length);
        questions[n].displayQuestion() ;
       
        var answers = prompt('Please select the correct answer.');
       
        if(answers !== 'exit')
        {
            questions[n].checkAnswer(parseInt(answers),keepscore);
            nextquestion();
        }

    }
    nextquestion();
  
})();