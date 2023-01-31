
//  أولا : قم بكتابة interface اسمها User تتكون من :
interface users{
    [key:string]:any
    age:number,
    name:string ,
    occupation:string
}


// ثانيا :انشئ array باسم persons , ندخل بيانات ثلاث user
let persons:users[]=[

{age: 22, name:"samah", occupation:"A"},
{age: 20, name:"sara", occupation:"B"},
{age: 30, name:"lila", occupation:"C"}

]

//ثالثا : انشئ function تقوم بطباعة بيانات مصفوفة persons
function printPrson(){
console.log(persons);
};
printPrson();

//رابعا :انشئ interface جديدة باسم Admin , تتكون من :
interface Admin{
    [key:string]:any
    age:number;
    name:string ;
    specislty:string;
};


//خامسا : أدخل بيانات ثلاث Admin على مصفوفة persons . بستخدام Aliases انشاء type يجمع بين user , admin
type persons1=Admin|users[]
let Admin1 = {age:22, name:"Amed", specialty:"IT" }
let Admin2 = {age:25, name:"Mohammed", specialty:"CS" }
let Admin3 = {age:30, name:"fatima", specialty:"IT" }

// persons.push(Admin1);
// persons.push(Admin2);
// persons.push(Admin3);

// سادسا: اطبع بيانات مصفوفة persons مع التميز بين user , admin

//سابعا : انشى function تغير قمية age

function changAge(){
    return persons.map(users => {
    if(users.name === "samah") return {users, age: 24}
    else return users});
}
console.log(changAge());













