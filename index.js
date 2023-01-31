// ثانيا :انشئ array باسم persons , ندخل بيانات ثلاث user
var persons = [
    { age: 22, name: "samah", occupation: "A" },
    { age: 20, name: "sara", occupation: "B" },
    { age: 30, name: "lila", occupation: "C" }
];
//ثالثا : انشئ function تقوم بطباعة بيانات مصفوفة persons
function printPrson() {
    console.log(persons);
}
;
printPrson();
;
var Admin1 = { age: 22, name: "Amed", specialty: "IT" };
var Admin2 = { age: 25, name: "Mohammed", specialty: "CS" };
var Admin3 = { age: 30, name: "fatima", specialty: "IT" };
// persons.push(Admin1);
// persons.push(Admin2);
// persons.push(Admin3);
// سادسا: اطبع بيانات مصفوفة persons مع التميز بين user , admin
//سابعا : انشى function تغير قمية age
function changAge() {
    return persons.map(function (users1) {
        if (users1.name === "samah")
            return { users1: users1, age: 24 };
        else
            return users1;
    });
}
console.log(changAge());
