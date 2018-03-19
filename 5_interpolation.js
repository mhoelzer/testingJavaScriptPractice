const username = 'Kenn';
// interpolation ex 1
console.log(`${username} is the true JS Wizard!`);
// template literals, which breaks things into more than one line, and it's handy with HTML.
// will print out on diff lines, like it shows here
console.log(`Hey students,
What bugs can
${username}
fix 
for you today`);

// interpolation with an object
const person = {
    username: 'Kenn',
    profession: 'Secret Agent'
}
console.log(`${person.username}, ${person.profession}`, 'extraordinaire'); //Kenn, Secret Agent, Extraordinaire