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

let DATA = 'this is secret information';
class User{
    constructor(name,email){
        this.name = name;
        this.email = email
    }
    viewData() {
        console.log('data',DATA);
    }
}

class Admin extends User{
    editData(){
        console.log('edit data');
    }
}

let student1 = new User('fathima','fathima@gmail.com');
let student2 = new User('kousar','kousar@gmail.com');

let teacher1 = new User('Dean','Dean@gmail.com');

