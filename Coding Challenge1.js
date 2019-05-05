const  TAX_RATE=0.08;// thuế
var accessory_price=9.99;// phụ kiện
const  spending_threshold=200;// số tiền chi tiêu
var  bank_account_balance=500.9;// số tiên dư trong ngan hàng
var giaphone=99.99;
var money=0;
var sodu;



function add_lamtron()
{
 return "$" + money.toFixed(2);

}
function tinhthue(money)
{
  return money*TAX_RATE;

}

while(money<bank_account_balance)
{
   money=money+giaphone;
   if(money<spending_threshold)
   {
       money=money+accessory_price;
   }
   break;
}
 money =money + tinhthue(money) ;
 console.log("so tien trong tk:","$"+bank_account_balance);
 console.log("so tien mua dien thoai:"+ add_lamtron(money) );

  if(money>bank_account_balance)
  {
     
      console.log ("ban khong du tien mua dien thoai");  
  }
   else 
   {
     sodu=bank_account_balance-money;
       console.log("so du tk sau khi mua dien thoai :" +"$"+sodu.toFixed(2));
   }


 

    
