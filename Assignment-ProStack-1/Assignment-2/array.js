// 1***********************************************
// let arr = [1,2,3,4,5,6,7];
// console.log(arr);
// 2***********************************************
// let arr = [1,2,3,4,5,6,7];
// for (i of arr){
//     console.log(i);
// }
// console.log(arr);
// 3***********************************************
// let arr = [1,2,3,4,5,6,7];
// let len = arr.length;
// console.log(arr[len-1]);
// 4***********************************************
// let arr = [1,2,3,4,5,6,7,8,11,22,33];
// for(i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// 5***********************************************
// let students = [{},
//     {id:101,ename:'rahul',location:'New york'},
//     {roll:2,name:'Sonia',Sal:45000}
// ]
// 6***********************************************
// let students = [{},
//         {id:101,name:'rahul',location:'New york'},
//         {roll:2,name:'Sonia',Sal:45000}
//     ]
// console.log(students[1].id);
// 7***********************************************
// let mathScore = [
//     ['Alpha',20,60,'A'],
//     ['Bravo',10,52,'B'],
//     ['Charlie',5,24,'F']
// ];
// console.log(mathScore);
// 8***********************************************
// let data = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let sum =0;
// for (let i=0;i<data.length;i++){
//     for(let j=0;j<data[i].length;j++){
//         sum = sum+data[i][j];
//     }
// }
// console.log(sum);
// 9***********************************************
// let data = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(data[0][0]);
// 10***********************************************
// let data = [1,2,3];
// console.log(data.push(4));
// console.log(data);
// 11***********************************************
// let data = [1,2,3];
// console.log(data.pop());
// console.log(data);
// 12***********************************************
// let data = [1,2,3];
// console.log(data.shift());
// console.log(data);
// 13***********************************************
// let data = [1,2,3];
// console.log(data.unshift(4));
// console.log(data);
// 14*1516**********************************************
// 17***********************************************
// let cards = ['ace','king','joker','seven'];
// var shoe = [].concat(cards);
// console.log(shoe,cards);
// shoe[0] = 'I changed';
// console.log(shoe,cards);
// 18***********************************************
/*let name1 = ['Rahul','Sonia','Priyanka'];
let a = name1.indexOf('Rahul');
console.log(a);*/
// 19***********************************************
// let name1 = ['Rahul','Sonia','Priyanka'];
// let a = name1.indexOf('Gandhi');
// console.log(a);
// 20***********************************************

// let arrays = [
//     {id:101,name:'fathima',sal:45000},
//     {id:102,name:'kousar',sal:55000},
//     {id:103,name:'lubna',sal:65000}
// ]
// for(array of arrays){
//     console.log(array);
// }
// Input array contain some elements.
// let array = [10, 20, 30, 40, 50];
// let found = array.find(function (element) {
// 	return element > 40;
// });
// console.log(found);
// Sample array of objects
const myArray = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
  ];
  
  // Function to find the index of an object with a specific property value
  function findIndexByProperty(array, propertyName, value) {
    return array.findIndex(item => item[propertyName] === value);
  }
  
  // Example usage
  const index = findIndexByProperty(myArray, 'id', 2);
  console.log(index);
  

  