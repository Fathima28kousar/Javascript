// const person = {
//     name: 'fathima', 
//     age: 13, 
//     qulification: 'bsc', 
//     eyeColor: 'black',
//     // fullName: function() {                            
//     //     return this.name + this.age;
//     // },
//     // languages: {
//     //     lang1: 'kannada',
//     //     lang2: 'english',
//     //     lang3: 'hindi',
//     // },
// }

// person.nationality = 'indian';
// person.lastName = 'kousar';
// console.log(person);


// let para = Object.entries(person);

// console.log(para)

// let text = "";
// for (let [x,y] of Object.entries(person)){
//     text += x + y;
    
// }
// document.getElementById('demo').innerHTML = text;

// // const myArray = Object.values(person)

// // document.getElementById('demo').innerHTML = myArray;
// // console.log(myArray)

// // let text = "";
// // for (let [key,value] of Object.entries(person)){
// //     text += key + ": " + value + "<br>";
// // }

// // document.getElementById('demo2').innerHTML = text;
// // console.log(text);



// // let text="";
// // for (let x in person){
// //     text += person[x];
// //     console.log(person[x])
// // }

let day;
switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  console.log(text)