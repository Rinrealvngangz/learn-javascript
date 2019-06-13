
// The Ternary Operator and switch Statements 
var firstName ='john';
var age=22;

age >=18 ? console.log(firstName + " drinks beer")
: console.log(firstName + " drinks juice.");

var dink = age >=18 ? "beer":"juice";

console.log(dink);

if(age >=18){
  var drink = "beer";

}
else{
  var dink = "juice";
}
//Switch statement

var job ="driver";

switch(job){

  case "teacher":
    console.log(firstName+ " teachers kids how to code.");
    break;
  case "driver":
    console.log(firstName+" drives an uber in lisbon");
    break;
  case " desiger":
      console.log(firstName + " designs beautiful wbsites.");
      break;
  default:
        console.log(firstName + " does something else.");


}

// Truthy and Falsy values and equality operators

var height;
 height= "";
if(height|| height ===0)
{
  console.log("variable is defined")

}
else
{
    console.log("variable has NOT been defined")
}
// Equality operator
height =23;
if(height ==="23")
{
  console.log("the == operator does type coercion");

}
else {
    console.log("the == operator  type coercion");
}
// functions
function calculateage(birthyear)
{
  return 2018 - birthyear;
}
var agejohn = calculateage(1990);
var ageMike = calculateage(1948);
var agejane = calculateage(1969);
console.log(agejohn, ageMike, agejane);
// năm nghỉ hưu 
function yearsuntilRetirement(year, firstName){
  var age = calculateage(year);
  var Retirement =  65- age;
  if(Retirement>0){
    console.log(firstName +" retires in "+ Retirement+" years.")
  }
  else
   console.log(firstName +" is already retires")

}
yearsuntilRetirement(1990, "john");
yearsuntilRetirement(1948, "Mike");
yearsuntilRetirement(1969, "jane");


//function Statement and Expresstions

// function declarations
//var function (job, firstName) {}

// function  Expresstions
var whatdoyoudo =function (job, firstName){

  switch(job)
  {
    case " teacher":
         return firstName +"teacher kids how to code";
       
    case " drivers":
        return firstName+" drives an uber in lisbon";
    case " designer":
      return firstName + " designs beautiful wbsites.";

    default:
      return   firstName + " does something else.";
  }
}
console.log (whatdoyoudo (" teacher","john"));
console.log (whatdoyoudo (" drivers","mike"));
console.log (whatdoyoudo (" designer","jane"));

//Arays

var names= ["john","mark","jane"];
var years= new Array(1990,1969,1948);

console.log(names[1]);
console.log(names.length);

// mutate arrays data
names[1]="ben";
names[5]="mary";
console.log(names);

// different data types

var john =["john","smith",1990,"teacher",false];

john.push("bon"); // add
john.unshift("MR.")  // thêm đầu
console.log(john);
john.shift();//xóa đầu
john.pop();//delete
john.push("bon");
console.log(john);

console.log(john.indexOf("teacher"));// tìm vt
var isdesigner =john.indexOf("designer") ===-1 ? "john is not a designer " :" john is a designer";
console.log(isdesigner);
