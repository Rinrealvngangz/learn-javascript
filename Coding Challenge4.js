
var John = {
  FullName:'John Smith',
  Mass: 2,//kg
  Height:1.95,//meters
  CalculateBMI : function(){
       this.BMI = this.Mass / (this.Height*2);
    return this.BMI;
         
    
  }
  
}
var Mark = {
    FullName:'Mark Miller',
    Mass: 78,//kg
    Height:1.69,//meters
    CalculateBMI : function(){
        this.BMI = this.Mass / (this.Height*this.Height);
        return this.BMI;
             
       
    }
  }
  John.CalculateBMI();
  Mark.CalculateBMI();
  if (John.BMI>Mark.BMI)
  {
    console.log(John.FullName+' has BMI is : '+John.BMI.toFixed(2));


  }
  else if(John.BMI < Mark.BMI)
  {
      console.log(Mark.FullName+' has BMI is :'+Mark.BMI.toFixed(2));
  
}
 else
 {
   console.log ( 'They Have the same BMI');
  }

