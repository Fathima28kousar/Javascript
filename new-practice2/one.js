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

const url = "https://cat-fact.herokuapp.com/facts";
// let promise = fetch(url);
// console.log(promise)
const getFacts = async() => {
    console.log('getting data........');
    let response = await fetch(url);
    console.log(response);
    console.log(response.status)
    let data = await response.json();
    console.log(data);
    console.log(data[2]);
    console.log(data[2].text)
}
getFacts()