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
 /*const [name,age] =['john',26];
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
console.log(retirement);*/

//lecture :  Spread Operator

/*function addFourAges(a,b,c,d){
    return a+b+c+d;
}
var sum1 = addFourAges(18,30,12,21);

console.log(sum1);

//ES5
var ages =[18,30,12,21];
var sum2 = addFourAges.apply(null,ages);
 console.log(sum2);

 //ES6

 const sum3 = addFourAges(...ages)
 console.log(sum3);

 const familySmith  =['John','Jane','Mark'];
 const familyMiller =['Mary','Bob','Ann'];

 const bigfamily = [...familySmith, ...familyMiller];

 console.log(bigfamily);*/

 // lecture : rest parameters
 //ES5
 /*function isfullage5(limit){
   //  console.log(arguments)
     var argsArr = Array.prototype.slice.call(arguments,1);
     argsArr.forEach(function(cur){
         
        console.log(2016- cur >= limit);
     
         
     });
 }
 isfullage5(16,1990,1999,1965);*/
//ES6
/*function isfullage6(limit,...years)
{
    years.forEach(cur => console.log((2016-cur) >=limit)

    )

}
isfullage6(16,1990,1999,1965);*/

//lecture : Default Parameters

//ES5
/*function SmithPerson(firstname, yearofBirth,lastName,nationality){
    lastName === undefined ? lastName ='Smith' : lastName = lastName;
    nationality === undefined ? nationality ='American' : nationality = nationality;

    this.firstname = firstname;
    this.yearofBirth = yearofBirth;
    this.lastName = lastName;
    this.nationality = nationality;

}*/
//ES6
/*function SmithPerson(firstname, yearofBirth,lastName ='smith',nationality='American'){
    this.firstname = firstname;
    this.yearofBirth = yearofBirth;
    this.lastName = lastName;
    this.nationality = nationality;

}
var john = new SmithPerson ('John',1990);*/

// lecture:Maps

/*const question = new Map();
question.set('question','What is the official name of the lateste major Js version?');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct',3);
question.set(true,'Correct answer :D');
question.set(false,'Wrong,please try again!');
console.log(question.get('question'));
if(question.has(4)){
  //  question.delete(4);
}*/
//question.clear();

/*question.forEach((value,key)=>
    console.log(`this is ${key}, it's set to ${value}`));*/

 /*for(let[key,value] of question.entries()){
     if(typeof(key) =='number')
    console.log(`Answer ${key} : ${value}`);
 }
 const ans = parseInt(prompt('Write the correct  answer '));
 console.log(question.get(ans === question.get('correct')));*/

 //Lecture :Classes

 //ES5

 /*var Person5 =function(name,yearofBirth,job){
     this.name =name;
     this.yearofBirth=yearofBirth;
     this.job =job;
 }

 Person5.prototype.calculateAge=function(){
     var age = new Date().getFullYear - this.yearofBirth;
     console.log(age);
 }

 var John5 = new Person5('John',1990,'teacher');



 class Person6{
     
    constructor(name,yearofBirth,job){
        this.name=name;
        this.yearofBirth=yearofBirth;
        this.job=job;
    }
    calculateAge(){
        var age = new Date().getFullYear - this.yearofBirth;
        console.log(age);
    }
    static greeting(){
        console.log('Hey jude');
    }
 }

 const John6 =new Person6('John',1990,'Teacher');
 Person6.greeting();*/

 //Lecture : Classes with Subclasses
 //ES5
 var Person5 =function(name,yearofBirth,job){
    this.name =name;
    this.yearofBirth=yearofBirth;
    this.job =job;
}

Person5.prototype.calculateAge=function(){
    var age = new Date().getFullYear() - this.yearofBirth;
    console.log(age);
}

var Athlete5 =function(name,yearofBirth,job,olympicgames,medals){
  Person5.call(this,name,yearofBirth,job);
  this.olympicgames=olympicgames;
  this.medals=medals;
}

Athlete5.prototype=Object.create(Person5.prototype);
Athlete5.prototype.wonmedals=function(){
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John',1990,'swimmer',3,10);
johnAthlete5.calculateAge();
johnAthlete5.wonmedals();

//ES6
class Person6{
     
    constructor(name,yearofBirth,job){
        this.name=name;
        this.yearofBirth=yearofBirth;
        this.job=job;
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.yearofBirth;
        console.log(age);
    }
    
    
 }

 class Athlete6 extends Person6 {
    constructor(name,yearofBirth,job,olympicgames,medals){
       super(name,yearofBirth,job);
       this.olympicgames =olympicgames;
       this.medals=medals;
    }
    wonmedal(){
        this.medals++;
        console.log(this.medals);
    }   
 
    }
   
    const johnAthlete6 =new Athlete6('John',1990,'Swimmer',3,10);
    johnAthlete6.wonmedal();
    johnAthlete6.calculateAge();