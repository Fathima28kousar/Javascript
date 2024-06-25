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

const a = 10;
function add(){
    let b = 100;
   
}
add()
