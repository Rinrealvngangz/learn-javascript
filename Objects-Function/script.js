
//Function constructor

 /*var john = {
     name:'John',
     yearOfBirth:1990,
     job:'teacher' 

 };


var Person = function (name, yearOfBirth,job) {
   this.name = name;
   this.yearOfBirth =yearOfBirth;
   this.job =job;
}
Person.prototype.calculateAge = function(){
    console.log( 2016 - this.yearOfBirth);
}
Person.prototype.lastName='Smith';
var john = new Person('John',1990,'teacher');
var jane = new Person('Jane',1969,'designer');
var mark = new Person('Mark',1948,'retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName); */

// objects.create

/*var personProto = {
    calculateAge:function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name='John';
john.yearOfBirth=1990;
john.job='teacher';

var jane =Object.create(personProto,{
    name: {value: 'Jane'},
    yearOfBirth : {value:1969},
    job : { value:'designer'}
    
});*/

/*
// Primitives vs objects

// Primitives
var a= 23;
var b= a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 ={
    name:'John',
    age: 26
};
var obj2 = obj1;
obj1.age =30;
console.log(obj1.age);
console.log(obj2.age);

// Functions 
var age =  27;
var obj ={
    name :'Jonas',
    city: 'Lisbon'
};

function change(a,b){
    a =30;
    b.city ='San Francisco';
}
change (age,obj);
console.log(age);
console.log(obj.city);*/


// Lecture: Passing functions as arguments


/*var years=[1990, 1965, 1937 ,2005, 1998];

function arrayCalc(arr , fn)
{
    var arrRes=[];
    for (var i =0; i< arr.length;i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 -el;
}

function isFullAge(el){
    return el >=18;
}

function maxHearRate(el){
    if( el >=18 && el <=81)
    {
        return 206.9 -(0.67 * el);
    }
    else 
    {
        return -1;
    }
}

var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages,isFullAge);
var rates = arrayCalc(ages,maxHearRate);

console.log(ages);
//console.log(fullAges);
console.log(rates);*/

//Lecture: Function returning functions

/*function interciewQuestion(job){
  if(job === 'designer'){
      return function (name){
          console.log(name + ', can you please explain what UX design is ? ' );
      }
    }
      else if (job === 'teacher')
      {
          return function (name){
              console.log('What subject do you teach, ' + name + '?');
          }
    }
  else {
      return function(name) {
          console.log('Hello ' + name + ', what do you do ?');

      }
  }
}
var teacherQuestions = interciewQuestion('teacher');
teacherQuestions('John');

var designQuestions = interciewQuestion('designer');
designQuestions('John');
designQuestions('Mike');
designQuestions('Jane');


interciewQuestion('teacher')('Mark');*/

// Lecture : IIFE

/*function game(){
    var score = Math.random() * 10;
    console.log(score >=5);
}
game();*/

/*(function (goodluck){
      var score = Math.random() * 10;
    console.log(score >=5 - goodluck);
}
)(5);*/

// Lecture:Closures

// function retirement(retirementAge){
//     var a = ' years left until retirement.';
//     return function(yearOfBirth){
//         var age =2016-yearOfBirth;
//         console.log((retirementAge -age)+a);
//     }
// }

/*var retirementUS = retirement(66);
//retirement(66)(1990);
var retirementGermany =retirement(65);
var retirementIceLand= retirement(67);
retirementUS(1990);
retirementGermany(1990);
retirementIceLand(1990);

function interciewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ', can you please explain what UX design is ? ' );
        
    }
    else if (job ==='teacher'){
        console.log('What subject do you teach, ' + name + '?');
    }
    else {
        console.log('Hello ' + name + ', what do you do ?');
    }
}
}
interciewQuestion('teacher')('John');*/

// lecture : Bind,call and apply

/*var john = {
    name : 'John',
    age : 26,
    job: 'teacher',
    presentation: function(style,timeOfDay){
        if(style ==='formal'){
            console.log('Good '+ timeOfDay +' Ladies and gentlemen! I\'m '+this.name+
            ', I\'m a ' + this.job + 'and I\'m '+ this.age + 'years old.');
        } else if(style === 'friendly')
       {
        console.log('Hey! what\'s up? I\'am '+this.name  + ' and I\'m '+this.job+' I\'m '+ this.age + ' years old. Have a nice'+timeOfDay+'.');
       }
    }
};

var emily = {
    name:'Emily',
    age:35,
    job:'designer'
};

john.presentation.apply(emily,['formal','morning']);
john.presentation('formal','morning');
john.presentation.call(emily,'friendly','afternoon');

var johnFriendly = john.presentation.bind(john,'friendly');

johnFriendly('morning');

var Emilyformal = john.presentation.bind(emily,'formal');

Emilyformal('afternoon');


var years=[1990, 1965, 1937 ,2005, 1998];

function arrayCalc(arr , fn)
{
    var arrRes=[];
    for (var i =0; i< arr.length;i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 -el;
}

function isFullAge(limit,el){
    return el >=limit;
}
var ages =arrayCalc(years,calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);*/


