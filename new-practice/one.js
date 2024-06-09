const person = {
    name: 'fathima', 
    age: 13, 
    qulification: 'bsc', 
    eyeColor: 'black',
    fullName: function() {
        return this.name + this.age;
    },
    languages: {
        lang1: 'kannada',
        lang2: 'english',
        lang3: 'hindi',
    },
}

person.nationality = 'indian';

console.log(person);
person.study = function(){
    return (this.qulification + this. age).toUpperCase();
}
console.log(person.study());
console.log(person);
console.log(person.languages.lang1);
console.log(person['languages']['lang1']);
console.log(person.languages['lang1'])
let text = "";
for (let x of person){
    text += person[x] + " ";
}
document.getElementById('demo').innerHTML = text;

// console.log(person.study());
// const myArray = Object.values(person);

// document.getElementById('demo').innerHTML = myArray;
