// var prompt = require('prompt-sync')();

// function myFunction(msg){
//     console.log(msg);
// }

// myFunction('this is fathima kousar');
// function multi(a,b){
//     return a*b;
// }
// let res = multi(3,4);
// console.log(res);
// function countVowels(st) {
//   let count = 0;
//   for (let i of st) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       count = count+1;
//     }
//   }
//   return count;
// }
// console.log(countVowels("hello"));

const arrowCount = (sta) => {
    let count = 0;
    for (let i of sta) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count = count+1;
    }
  }
  return count;
}
console.log(arrowCount("hello"));

