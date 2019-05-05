var TIP1;
var TIP2;
var TIP3 ; 
var TIP;
var x;
var tips=[20,15,10];
var allamount=[48,124,268];

  FORMAT= function formatamount (x)
{
    return "$"+x.toFixed(1);
}

function calculate(amount)
{ 
    if(amount<50)
    {
     TIP1= (tips[0]/100)*amount;
        console.log("The amount of john and family pay is "+FORMAT(TIP1));
     }
     else if(amount>50&&amount<200)
     {
        TIP2=(tips[1]/100)*amount;
       
           console.log("The amount of john and family pay is "+FORMAT (TIP2));
     }
     else 
     {
         TIP3=(tips[2]/100)*amount;
         console.log("The amount of john and family pay is "+FORMAT(TIP3));
     }
}
 calculate(100);
 
 function final_paid_amount()
 {
    var sum;
     for (let i = 0; i < 3; i++) {
           
        if(allamount[i]<50)
        {
         TIP1= (tips[i]/100)*allamount[i];
           // console.log(fix(TIP1));
         }
         else if(allamount[i]>50&&allamount[i]<200)
         {
            TIP2=(tips[i]/100)*allamount[i];
           
              // console.log(fix (TIP2));
         }
         else 
         {
             TIP3=(tips[i]/100)*allamount[i];
             //console.log(fix(TIP3));
         }
      
     }
    function Sumbills(){
         var sum;
      console.log("The total amount of money john and his family must pay is" +" $"+ (sum=TIP1+TIP2+TIP3));  
    }
    Sumbills();
  
 }
 final_paid_amount();

// Fix the exercise

function tipscalculate(bill){
   var percen;
    if(bill<50)
    {
       percen = .2;
    }
    else if(bill>=50 && bill<200)
    {
       percen = .15;
    }
    else 
    {
       percen = .1;
    }
 return percen*bill;
 
}

//console.log(tipscalculate(100));

var bill=[48,124,268];

var tips=[tipscalculate(bill[0]),
tipscalculate(bill[1]),tipscalculate(bill[2])];

var finalvalue =[ bill[0]+tips[0],
   bill[1]+tips[1],
   bill[2]+tips[2] ]

console.log(tips,finalvalue);


