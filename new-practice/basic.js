document.getElementById('one').innerHTML = "Hello javascript";
document.getElementById('one').style.fontSize = '100px';
document.getElementById('two').innerHTML = "fathima kousar";
// console.log(5+5);

function myFunction(){
    document.getElementById('two').style.display = 'none';
}

function myFunction1(){
    document.getElementById('two').style.display = 'block';
}

function imageOn(){
    document.getElementById('image').src='pic_bulbon.gif'
}

function imageOff(){
    document.getElementById('image').src='pic_bulboff.gif'
}
 
const date = new Date('2022-03-12');
// console.log(date);

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// console.log(typeof(person));

function myFunction(p1,p2){
    typeof(p1);
    return (p1 * p2) ;
}
let result = myFunction(10,2);
console.log(result);

document.getElementById('demo').innerHTML = result;