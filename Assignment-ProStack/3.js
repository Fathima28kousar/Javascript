var prompt = require('prompt-sync')();
//38*******************************************
// i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
//38*******************************************
// i = 10;
// while(i>=1){
//     console.log(i);
//     i--;
// }
//40*******************************************
// i = 5;
// while(i<=15){
//     console.log(i);
//     i++;
// }
//41*******************************************
// i = 15;
// while(i>=10){
//     console.log(i);
//     i--;
// }
//42*******************************************
// i = 1;
// while(i<=10){
//     if (i%2==0){
//         console.log(i);
//     }
//     i++;
// }
//43*******************************************
// i = 1;
// while(i<=10){
//     if (i %2 !=0){
//         console.log(i);
//     }
//     i++;
// }
//44*******************************************
// for (i=1;i<=100;i++){
//     console.log(i);
// }
//45*******************************************
// for (i=100;i>=1;i--){
//     console.log(i);
// }
//46*******************************************
// for (i=50;i<=150;i++){
//     console.log(i);
// }
//47*******************************************
// for(i=15;i>=10;i--){
//     console.log(i);
// }
//48*******************************************
// for (i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
//49*******************************************
// for (i=1;i<=10;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }
//50*******************************************
// let i =1;
// do {
//     console.log(i);
//     i++;
// }while(i<=10);
//51*******************************************
// let i =10;
// do {
//     console.log(i);
//     i--;
// }while(i>=1);
//52*******************************************
// let i = 5;
// do {
//     console.log(i);
//     i++;
// }while(i<=15);
//53*******************************************
// let i = 15;
// do {
//     console.log(i);
//     i--;
// }while(i>=10);
//54*******************************************
// let i = 1;
// do {
//     if(i%2==0){
//         console.log(i);
//     }
//     i++;
// }while(i<=10);
//55*******************************************
// let i = 1;
// do {
//     if(i%2!=0){
//         console.log(i);
//     }
//     i++;
// }while(i<=10);
//56*******************************************
// let i = 1;
// while(i<=10){
//     console.log(4*i);
//     i++;
// }
//57*******************************************
// let i = 1;
// while(i<=10){
//     console.log('6x',i,'=',6*i);
//     i++;
// }
//58*******************************************
// let num = prompt('Enter any number: ');
// let i = 1;
// while (i<num){
//     if(num%i === 0){
//         console.log(i);
//     }
//     i++;
// }
//59*******************************************
// let num = prompt("Enter any number: ");
// let reverse_number = 0;
// while(num>0){
//     remainder = num%10;
//     reverse_number = (reverse_number *10) + remainder;
//     num = Math.floor(num/10);
    
// }
// console.log(reverse_number);
//60*******************************************
// let arr = [1,2,3,4,5,6,7,8,10,11,13,16,14,18];
// let list = []
// for (let i of arr){
//     if(i%2==0){
//         console.log(i);
//         if (list.length === 5) {
            
//             break;
//         }
//         list.push(i); 
//     };
// }
// console.log(list);
let list = [];

for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt(`Enter number ${i + 1}: `), 10);
    // list.push(num);
    if(num%2==0){
        list.push(num);
    }
}
// let evenNumbers = list.filter(num => num % 2 === 0);

console.log("Entered numbers:", list);
// console.log("Even numbers:", evenNumbers);


