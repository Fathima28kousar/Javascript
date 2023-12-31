// function getData(dataId){
//     setTimeout(()=>{
//         console.log('data',dataId);
//     },2000);
// }

// getData(1);
// getData(2);
// getData(3);


// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log('datas',dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// console.log('fetching data1.............');
// getData(1,()=>{
//     console.log('fetching data2.............');
//     getData(2,()=>{
//     console.log('fetching data3.............');
//         getData(3,()=>{
//     console.log('fetching data4.............');
//             getData(4,()=>{
//                 console.log('completed!!!');
//             })
//         })
//     })
// });

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data1');
//             resolve('success!!!');
//         }, 2000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data2');
//             resolve(); // or reject('some error') if you want to simulate a rejection
//         }, 2000);
//     });
// }

// console.log('fetching data1........');
// // let p1 = asyncFunc1();

// // p1.then((res) => {
// //     console.log('fetching data2..............');
// //     let p2 = asyncFunc2();
// //     p2.then((res)=>{});
// // })
// asyncFunc1().then((res)=>{
//     console.log('fetching data2............');
//     asyncFunc2().then((res)=>{});
// })


// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data',dataId);
//             resolve(200);
//         },1000);    
//     })
// }

// (async function(){
//     console.log('getting data1..........');
//     await getData(1);
//     console.log('getting data2..........');
//     await getData(2)
// })();

// window.onstorage = (e) =>{
//     alert("Changed");
//     console.log(e);
// }
let text = "The best things in life are free";
let pattern = /e/;
let result = pattern.test(text);

document.getElementById("demo").innerHTML = result;