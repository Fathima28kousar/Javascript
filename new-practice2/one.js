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


// function init(){ //However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().
//     const name = 'fathima'
//     function displayName(){
//         console.log(name)
//     }
//     displayName()
// }
// init()

// Outer function
// Outer function
function outer() {
    function create_Closure(val) {
        return function () {
            return val;
        }
    }
    let arr = [];
    let i;
    for (i = 0; i < 4; i++) {
        arr[i] = create_Closure(i);
    }
    return arr;
}
let get_arr = outer();
console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());
  
