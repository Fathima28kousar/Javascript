/*function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log('dataId',dataId);
        if(getNextData){
          getNextData()
        }
      },2000)
    })
  }
  
  let promise = getData(123)
  let promise1 = getData(234,()=>{
    getData(456)
  })*/

/* const getPromise = () => {
   return new Promise((resolve,reject)=>{
     console.log('iam a promise');
     // resolve('success')
     reject('some error')
   })
 }
 
 let promise1 = getPromise();
 promise1.then(()=>{
   console.log('promise fullfilled!')
 })
 
 promise1.catch(()=>{
   console.log('rejected')
 })*/


/* function asyncfunc(){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
       console.log('data1');
       // resolve('success')
       reject('error')
     },2000)
   })
 }
 
 let promise1 = asyncfunc();
 promise1.then((res)=>{
   console.log(res)
 })
 
 promise1.catch((rej)=>{
   console.log(err);
 })*/

/*function asyncFunc1(){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
       console.log('data1');
       resolve('success');
     },2000)
   })
}
 
function asyncFunc2(){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
       console.log('data2');
       resolve('success');
     },4000)
   })
}
 
 // console.log('fetching data1...........');
 // let promise1 = asyncFunc1();
 // promise1.then((res)=>{
 //   console.log('fetching data2...........');
 //   let promise2 = asyncFunc2();
 //   promise2.then((res)=>{})
 // })
 
 console.log('fetching data1..........');
 asyncFunc1().then((res)=>{
   console.log('fetching data2.........');
   asyncFunc2().then((res)=>{});
 })*/

/*function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('dataid', dataId);
            resolve('success')
        }, 1000)
    })
}

getData(1).then((res)=>{
    console.log(res);
    getData(2).then((res)=>{
        console.log(res);
    })
})

// Actual promise chaining

getData(1).then((res) => {
    return getData(2)
}).then((res)=>{
    return getData(3);
}).then((res)=>{
    return getData(4);
})*/

/*function myDisplayer(some){
    document.getElementById('demo').innerHTML = some;
}

let promise1 = new Promise((resolve,reject)=>{
    let x = 10;
    if(x == 0){
        resolve("OK");
    }else{
        reject("Error");
    }
})

promise1.then(res => {
    myDisplayer(res);
}).catch(err => {
    myDisplayer(err);
});*/

function myFunction(){
    console.log('fathima kousaar');
}

setTimeout(myFunction,2000)