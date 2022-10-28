// function logMessage(value: string | number) {
//     console.log(value);
// }
logMessage('heelo');
logMessage(100);

var seho: string | number | boolean;
function logMessage(value: string | number) {
    if(typeof value == 'number'){
        value.toLocaleString;
    }
}

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// function askSomeone (someone: Developer | Person) {
//     someone.name;
//     someone.skill
//     someone.age
// }

function askSomeone (someone: Developer & Person) {
    someone.name;
    someone.skill
    someone.age
}


enum Shoes {
    Nike = '나이키',
    Aidas = '아디다스',
}

var myShoes = Shoes.Nike;
console.log()