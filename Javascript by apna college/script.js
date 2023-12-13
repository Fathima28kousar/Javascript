// let modeBtn = document.querySelector('#mode');
// let currMode = 'light';

// modeBtn.addEventListener('click',() => {
//     if(currMode === 'light'){
//         currMode = 'dark';
//         document.querySelector('body').style.backgroundColor = 'black';
//     }else {
//         currMode = 'light';
//         document.querySelector('body').style.backgroundColor = 'white';

//     }
//     console.log(currMode);
// })

// const student = {
//     fullName : 'Shraddha khapra',
//     marks : 94.4,
//     printMarks : function () {
//         console.log('marks=',this.marks);
//     }
// }

// const employee = {
//     calcTax() {
//         console.log('tax rate is 10%');
//     },
// };

// const karanArjun = {
//     salary : 50000,
//     calcTax() {
//         console.log('tax rate is 20%');
//     }
// }
// karanArjun.__proto__=employee;
class ToyotaCar {
    constructor(){
        console.log('creating new object');
    }
    start() {
        console.log('start');
    }
    stop() {
        console.log('stop');
    }
    setBrand(brand) {
        this.brandName = brand;
    }
}
let fortuner = new ToyotaCar();
fortuner.setBrand('fortuner')
let lexus = new ToyotaCar();

