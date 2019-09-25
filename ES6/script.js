// lecture: let and const

// ES5
/*var name5 ='Jane Smith';
var age5 = 23;
name5= 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 ='Jane Miller';
console.log(name6);
*/
//ES5
/*function driversLiscence5(passedTest){

    if(passedTest)
    {
        var firstname = 'John';
        var yearofbirth = 1990;
        
    }

    console.log(firstname+', born in '
        + yearofbirth +' , is now officially allowed to  drive a car ');
}

driversLiscence5(true);

//ES6
function driversLiscence6(passedTest){
   
   
    let firstname ;
    const yearofbirth = 1990;
    if(passedTest)
    {
        firstname = 'John';
       
    }
    console.log(firstname+', born in '
    + yearofbirth +' , is now officially allowed to  drive a car ');
}

driversLiscence6(true);


let i=23;

for(let i=0;i<5;i++)
{
     console.log(i);
}  
console.log(i);*/

// lecture: Blocks and IIFES

//ES6
/*{
    const a= 4;
    let b= 5;
    var c =3;
}
//console.log(a+b);
console.log(c);

//ES5

(function(){
    var c=3;
})();

//console.log(c);*/


// lecture:Strings

/*let fitrsName = 'John ';
let lastName ='Smith';
const yearofbirth =1999;

function calcAge(year)
{
    return 2016 -year;
}*/

//ES5
/*console.log('This is '+ fitrsName +lastName+' . he was born in '+ yearofbirth+'. Today, he is '+
 calcAge(yearofbirth)+ 'years old');

 //ES6
  console.log(`This is ${fitrsName}${lastName},he was born in ${yearofbirth}. Today, he is ${calcAge(yearofbirth)}, yearold. `);


   const n = `${fitrsName} ${lastName}`;

  console.log(n.startsWith('J'));//tim chu cai dau tien trong chuoi
  console.log(n.endsWith('Sm'));// tim chu cai cuoi trong chuoi
  console.log(n.includes('Sm'));// tim chu cai trong chuoi
  console.log(`${fitrsName}`.repeat(5));// gọi lại tên 5 lần*/

// lecture : Arrow functions

/*const year =[1990,1965,1970,1982];

// ES5
var age5 = year.map(function(el){

    return 2016 -el;
})
console.log(age5);

//ES6
let age6 =year.map(el => 2016 - el);

 console.log(age6);

 age6 = year.map((el,index) => ` Age element ${index + 1} : ${2016- el} . ` );
 console.log(age6);

 age6 =year.map((el,index) =>
 {
   const now = new
    Date().getFullYear();
     const age = ` Age element ${index + 1} : ${now - el} . `;
    return age 
 });

 console.log(age6);*/


 // lectute : Destructuring
 
 // ES5
 //var john =['john', 26];
 //var name =john[0];
 //var age = john[1];

 //ES6
 const [name,age] =['john',26];
 console.log(name);
 console.log(age);

 const obj ={
    firstname:'John',
    lastName:'Simth'
 };
 const {firstname,lastName}=obj;
 console.log(firstname);
 console.log(lastName);

 const {firstname:a,lastName:b}=obj;
 console.log(a);
 console.log(b);
 
function calcAgeretirement(year){
    
    const age =new Date().getFullYear() -year ;

    return [age, 65-age];
}
const [age2,retirement]=calcAgeretirement(1996);

console.log(age2);
console.log(retirement);