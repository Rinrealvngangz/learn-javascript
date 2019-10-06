
function check(){
  
           
    var id ={
        fname:'First-name',
       lname: 'last-name',
       email:'email',
       ps:'password',
       cofpass:'confpass'   ,
       errorpass:'confirm-er'
    }
      var checkeach = new Array();
    checkeach[0] =document.getElementById(id.fname);
    checkeach[1] =document.getElementById(id.lname);
    checkeach[2] =document.getElementById(id.email);
    checkeach[3] =document.getElementById(id.ps);
    checkeach[4] =document.getElementById(id.cofpass);   
      for( i in checkeach)
       {

        if( checkeach[i].value ==""){
          checkeach[i].setCustomValidity('Not be empty');          
            }   
        else{
          checkeach[i].setCustomValidity('');    
        
           }          
           
       }
      
       // check cofirm password 
      var erpass=document.getElementById(id.errorpass);
      var ps= document.getElementById(id.ps);
      var confirmpass = document.getElementById(id.cofpass);

      if(confirmpass.value!=ps.value  )
      {
        confirmpass.style.border = "1px solid red";
           erpass.textContent ="confirm Password was wrong";
         $("#btnid").attr("type","button");
         
      }
      else {
                    confirmpass.style.border = "";
                    erpass.innerHTML ="";
                    $("#btnid").attr("type","submit");
          
            };
       //check notification submit
     var ktfname =document.getElementById(id.fname);
     var ktlname =document.getElementById(id.lname);
     var ktmail=document.getElementById(id.email);
     var ktpass=document.getElementById(id.ps);
     var ktcofpass=document.getElementById(id.cofpass);   
     var resul;
      if(ktlname.value !="" && ktfname.value!="" && ktmail.value!="" && ktpass.value!=""
         &&ktcofpass.value!="" &&confirmpass.value == ps.value){
        
         resul = confirm("Đăng ký thành công,nhấn OK để quay về trang đăng nhập");
        
        if(resul)
        {
          $("#btnid").attr("type","button");
          //window.location="file:///C:/Users/Tuan/Desktop/FormUser/index.html";
          location.assign("file:///C:/Users/Tuan/Desktop/FormUser/index.html");
        }
      
         }
         
          }
         
       
   
         
          
        
      

        

    
           

  
  
  
  
            
                