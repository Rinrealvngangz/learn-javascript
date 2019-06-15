
var john ={
    fullname: 'john smith',
   bill: [128,48,268,180,42],
     
 calBill : function()
 {
    this.tips=[];
    this.bills=[];
 
    for(i=0;i<this.bill.length;i++)
    { 
    var percent;
          var BILL =this.bill[i];

          if(BILL<50)
          {
              percent =.2;

          }
          else if (BILL>50 && BILL<200)
          {
              percent = .15;

          }
          else 
          {
              percent =.1;
          }
     this.tips[i]= BILL*percent;
     this.bills[i]=BILL+BILL*percent;
        }   
 }
 
  /* average: function ()
{
    var sum =0;
   var aver ;
    for(i=0;i<this.tips.length;i++)        
     sum +=this.tips[i] 
    aver = sum / this.tips.length;

     return aver  ;
 
} */
};

//console.log('Average tips of '+john.fullname+' is '+john.average());

var Mark ={

    fullname:'Mark Miller',
    bill :[77,375,110,45 ],
    
    calBill:function(){
        
        this.bills =[];
      this.tips=[];
      for(i=0;i<this.bill.length;i++)
     {      var percent;
           var BILL =this.bill[i];
           if(BILL<100)
           {
               percent = .2;
           }
           else if(BILL>100 && BILL <300)
           {
               percent = .1;
           }
           else 
           {
               percent = .25;
           }
           
        this.tips[i] =BILL*percent;
        this.bills[i]= BILL+ BILL*percent;
         
     
    }
},
 
 /*  average: function ()
{
     var sum=0;
   var aver ;
    for(i=0;i<this.tips.length;i++)        
   sum +=this.tips[i] 
    aver = sum / this.tips.length;

     return aver;
 
}*/
};

function calculaverage(tips)
{
    var sum=0;
    for(i=0;i<tips.length;i++)        
      sum +=  tips[i] ;
    return  sum / tips.length;
    
}


john.calBill();
Mark.calBill();

john.average = calculaverage(john.tips);
Mark.average = calculaverage(Mark.tips);
console.log(john,Mark);
//console.log('Average tips of '+Mark.fullname+' is '+Mark.average());


if( Mark.average>john.average)
{
    console.log('Mark is family have a highest tips on average');
}
else if (Mark.average <john.average)
{
    console.log('John is family have a highest tips on average');
}
else 
{
    console.log ( 'They Have the same Tips on average');
}

 