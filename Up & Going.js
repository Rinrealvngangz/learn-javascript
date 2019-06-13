 
 a=21;
 b=a*2;
 console.log(b);
//input
/* age = prompt("Pleas tell me your age");
 console.log(age);*/

//varible

var amount =99.99;

amount=amount*2;
console.log(amount);
//convert "amount" to a string, and 
// add "$" on the beginning
amount= "$"+String(amount);
console.log(amount);

// converting Between Types 

var a = "42";
var b= Number(a);

console.log(a);
console.log(b);

//Blocks
var amount = 99.99;
//a general block
{
    amount = amount*2;
    console.log(amount);
}

// Conditionals
var ACCESSORY_PRICE = 9.99;
var bank_balance = 302.13;
var amount = 99.99;

amount = amount*2;

// can we afford the extra purchase ?

if( amount<bank_balance)
{
    console.log("I will take the accessrory")
    amount=amount+ACCESSORY_PRICE;
}
// otherwise:
else
{
    console.log("No, Thanks.");
}

// Loops 
var i=0;

while(true)
{
    if(i<=9){
        console.log(i);
        i+=1;
    }
    // time to stop the loops
    else{
        break;
    }
}

for (var i=0;i<=9;i++)
{
    console.log(i);
}

//Functions

function printamount(){
    console.log(amount.toFixed(2));
}
var amount=99.99;

printamount();
amount*=2;
printamount();

//parameters 
function printamount(amt){
    console.log(amount.toFixed(2));
}

function Formatamount (){
    return "$"+ amount.toFixed(2);
}
var amount =99.99;

printamount(amount*2);
amount = Formatamount();
console.log(amount);

//Scope
function one() {
    var a=1;
    console.log(a);
}
function two(){
 var a=2;
 console.log(a);
}
one();
two();

function outer(){
    var a=1;
    function inner(){
        var b=2;
        // we can access both 'a' and 'b' here
        console.log(a+b);
    }
    inner();
    // we can only access "a";
    console.log(a);
}
outer();

//lexical scope
 
const TaX_rate = 0.08;

function calculateFinalPurchaseAmount (amt){
    amt =amt +(amt *TaX_rate);
return amt;
}

// object 
var obj={
    a:"hello world",
    b:42,
    c: true 
};
obj.a;
obj.b;
obj.c;
//or
obj["a"];// hello world
obj["b"];// 42
obj["c"];// true

var obj={
    a:"hello world",
    b:42};

    var b="a";
    obj[b];//"hello world"
    obj["b"];//"42"
//Equality

var a="42";
var b= 42;
a==b;// true
a===b;// false

//functione scope 

// Hoisting

var a=2;
foo();
function foo(){
    a=3;
    console.log(a); //3
    var a;
}
console.log(a);//2

//Nested scopes

function foo(){
    var a=1;
    function bar(){
        var b=2;
         function baz(){
             var c=3;
             console.log(a,b,c);
         }
         baz();
         console.log(a,b);
    }
    bar();
    console.log(a);
}
foo();

function foo(){
   var a=1;
   if(a>=1){
       let b=2;
       while(b<5){
           let c= b*2;
           b++;
           console.log(a+c);
       }
   }
   
}
foo();//5,7,9


//Immediately Invoked Function Expressions(IIFEs)
(function IIFEs()
{
    console.log("hello!");
}
)();

//IIFEs scopes
var a= 42;

(function IIFEs()
{
    var a=10;
    console.log(a);
})();

console.log(a);

var x= (function IIFEs()
{
    return 42;
})();
x;//42

//Closure 

function makeAdder(x){
    function add(y){
        return x+y;
    };
    add();

}
var plusone = makeAdder(1);
var plusTen = makeAdder(10);

plusone(3);
plusone(41);
plusTen(13);
