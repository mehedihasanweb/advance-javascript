const students = [
    {id: 21, name: "Omor Sunny"},
    {id: 31, name: "Manna"},
    {id: 41, name: "Misha Showdagor"},
    {id: 51, name: "Deepjol"},
    {id:61, name: "Moyouri"}
];
const NewStudents = [];
for(let i = 0; i < students.length; i++){
    const element = students[i];
    NewStudents.push(element.name);
}
console.log(NewStudents)

const StudentName = element => element.name;
const result = students.map(element => element.name);
console.log(result);

const names = students. map(n => n.name);
console.log(names);
const bigger = students.filter(x => x.id > 39)
console.log(bigger);
const bigger1 = students.find(x => x.id>60);
console.log(bigger1);