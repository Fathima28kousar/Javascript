// class Parent{
//     assets = '100cr';
// }

// class Child extends Parent{
//     qualities = 'good';
// }

// let c1 = new Child();
// console.log(c1);

// let prices = [98,198,298,398,498]
// let new_Prices=prices.forEach((price)=>{
//     return price+1
// })

// // for( price of prices){
// //     new_Prices.push(price+1)
// // }

// console.log(prices)
// console.log(new_Prices)

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data', dataId);
            resolve('success');
            if(getNextData) {
                getNextData();
            }
        },5000);
    });
}