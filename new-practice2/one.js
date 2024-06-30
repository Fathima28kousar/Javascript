//callback hell
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log('data',dataId);
//         if(getNextData){
//             getNextData()
//         }
//     },1000)
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         })
//     })
// })


//promise chaining
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data',dataId);
//             resolve('success')
//         },1000)
//     })
// }
// getData(1)
//     .then((res)=>{
//         return getData(2);
//     })
//     .then((res)=>{
//         return getData(3);
//     })
//     .then((res)=>{
//         return getData(4);
//     })


// async await
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data',dataId)
//             resolve('success')
//         },1000)
//     })
// }

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }
// getAllData()

// ES6 rest parameter

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();//Nested functions have access to variables declared in their outer scope.
