const instructors = [
    { name: "Quincy", specialty: 'Quantum Mechanics' },
    { name: 'Kenn', specialty: 'Norse Mythology' },
    { name: 'Paul', specialty: 'Tuvan throat singing' },
    { name: 'Aaron', specialty: 'Entomology' },
    { name: 'Carolyn', specialty: 'Kung Fu' }
]

let instructors_names = [];
for (let i = 0; i < instructors.length; i++) {
    instructors_names.push(instructors[i].name);
}
console.log(instructors_names);
// below does the same as the above but shorter
const instructorsNames = instructors.map(instructors => instructors.name);
console.log(instructorsNames);

//Exact same thing, different parameter name 
const instructorsNamesTwo = instructors.map(i => i.name);
console.log(instructorsNamesTwo);

const instructorsInfo = instructors.map(instructors => instructors.name + ": " + instructors.specialty);
console.log(instructorsInfo);

console.log("-----bfs-----")

var kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
];
console.log(kvArray);
var reformattedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
})