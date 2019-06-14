

/*var john ={
    firstname:'john',
    lastName: 'Smith',
    birthday:  1990,
    family : ['Jane','mark','Bob','emily'],
    job :'teacher',
    isMarried:false
}

console.log(john.firstname);
console.log(john['lastName']);
var x='birthday';
console.log(john[x]);


john.job ='designer';
john['isMarried']=true;
console.log(john);

var Jane =new Object();

Jane.firstname ='Jane';
Jane.birthday =1969;
Jane['lastName']='Smith';
console.log(Jane);
*/
var john ={
    firstname:'john',
    lastName: 'Smith',
    birthyear:  1992,
    family : ['Jane','mark','Bob','emily'],
    job :'teacher',
    isMarried:false,
    calcage: function(birthyear)
    {
        this.age = 2018 - this.birthyear;
    }
}
john.calcage();
console.log(john);

