
function alter()
{
    var user =  document.getElementById('us').value;
    var password = document.getElementById('ps').value;

    let aboutadmin ={
        adminuser :'tuan',
        adminpassword :'123'
        
    };
    if( (aboutadmin.adminuser == user)  &&  ( aboutadmin.adminpassword == password ))
{
    Swal.fire(
        'Welcome',
        'login successful',
       'success'
      );
}
  else if((user =="") && (password==""))
  {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        text: 'Please enter the box,thanks ',
       
      });
  }
 
else
{
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        text: 'Please try logging in again',
        footer: '<a href>password or username  error </a>'
      });
}
       
}


 function ope()
{
 var eye = document.getElementById('eye');
 eye.addEventListener('click',tg);
       
    function tg(){
         $("#ps").attr("type","text");
         $(this).hide();
         $("#icon-slash").show();
    }

 }
  function clo()
  {
   var eyeclose =document.getElementById('icon-slash');
   eyeclose.addEventListener('click',tg);
        
      function tg(){
           $("#ps").attr("type","password");
          $(this).hide();
           $("#eye").show();
      }
 
   }
 


