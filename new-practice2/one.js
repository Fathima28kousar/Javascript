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

// let a = 10;
// function outerfunc(){
//     let b = a;
//     console.log(a);
//     console.log(b);
//     function inner(){
//         let c = b;
//         console.log(c);
//         inner2()        
//         function inner2(){
//             c = 30
//             console.log(c)
//         }
//     }
//     inner()
// }
// outerfunc

// function p(a){
//     var len = a.length, i=0;
//     if (len ==0 ){
//         console.log('empty')
//     }
//     else{
//         do{
//             console.log(a[i])
//         }while(++i<len)
//     }
// }
// p([1,2,3])
function main() {
    try {
      const arr = [1, 2, 3, 5];
      arr.forEach((num) => {
        console.log(parseInt(num / (num - 3)));
      });
    } catch (e) {
      console.log(e);
    }
  }
  
main();
main();



