
class Element{
    constructor(name,buildyears)
    {
        this.name=name;
        this.buildyears=buildyears;
    }
}

class PARKS extends Element{
    constructor(name,buildyears,area,numtree)
    {
        super(name,buildyears);
        this.area=area;
        this.numtree=numtree;
    }
    treedenisty(){
        const denisty = this.numtree / this.area;
        console.log(`${this.name} has a tree denisty of ${denisty} tree per square km.`)
    }
}

class Street extends Element{
    constructor(name,buildyears,length,size=3)
    {
        super(name,buildyears);
        this.length=length;
        this.size=size;
    }
    classifystreet(){
        const classification = new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        console.log(`${this.name},build in ${this.buildyears} is a ${classification.get(this.size)} street.`);

    }
    
}

const allpark=[new PARKS('Greenk park',1987,0.2,215),new PARKS('National park',1894,2.9,3541), 
                new PARKS('Oak park',1953,0.4,949)];

const allstreet=[new Street('Ocean Avenue',1999,1.1,4),
                new Street('Evergreen Street',2008,2.7,2),new Street('4th Street',2015,0.8),
                new Street('Sunset Boulervard',1982,2.5,5)];

function calc(arr){
    const sum = arr.reduce((prev,cur,index)=> prev += cur,0 );
    return [sum,sum/arr.length]
}

function reportpark (p){
    console.log("------PARK--------");
       p.forEach(el => el.treedenisty());
const ages = p.map(el => new Date().getFullYear() - el.buildyears );

const [totalAge,AverAge]=calc(ages);
   console.log(`Our ${p.length} parks have an average of ${AverAge} year. and ${totalAge}`);
const i= p.map(el=>(el.numtree)).findIndex(el=> el >=1000) ;
console.log(`${p[1].name} has more than 1000 trees.`);
}

function reportStreet (s){
    console.log("------STREET--------");
    const[totallength,Averlength]=calc(s.map(el=> el.length));
    console.log(`Our ${s.length} streets have a total length of ${totallength} km, with an averlength of ${Averlength} km.`);
    s.forEach(el=> el.classifystreet());
}
reportpark(allpark);
reportStreet (allstreet);