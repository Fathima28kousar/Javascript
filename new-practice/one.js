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


/*Nested Arrays and Objects
let x = "";
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "44", "35"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
}

for (let i in myObj.cars){
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (let j in myObj.cars[i].models){
        x += myObj.cars[i].models[j];
    }
}
console.log(x)
document.getElementById('demo').innerHTML = x;*/

// let text = ""
// let i = 0;

// do {
//   text += "<br>The number is " + i;
//   i++;
// }
// while (i < 10);  

// document.getElementById("demo").innerHTML = text;

// function getData(dataId){
//   setTimeout(()=>{
//     console.log('data',dataId);
//   },2000)
// }

// getData(1);
// getData(2);
// getData(3)

// function getsData(dataID,getNextData){
//   setTimeout(()=>{
//     console.log('data',dataID);
//     if(getNextData){
//       getNextData();
//     }
//   },2000)
// }

// getsData(1,()=>{
//   getsData(2,()=>{
//     getsData(3,()=>{
//       getsData(4);
//     })
//   })
// })

