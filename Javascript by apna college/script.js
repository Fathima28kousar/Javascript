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

class Parent {
    constructor(name) {
        console.log('enter parent constructor');
        this.name = name;
          // Assuming you want to set the name property
        this.species = 'homosapiens';
    }

    eat() {
        console.log('person eats');
    }

    sleep() {
        console.log('person takes rest');
    }

    work() {
        console.log('works hard');
    }
}

class Engineer extends Parent {
    constructor(name) {
        console.log('enter child constructor');
        super(name);  // Pass the name parameter to the Parent constructor
        this.branch = branch;
        this.name = name;
        console.log('exit child constructor');
    }

    work() {
        console.log('builds projects');
    }
}

class Doctor extends Parent {
    work() {
        console.log('Treats patients');
    }    
}

let obj = new Engineer('John Doe', 'chemical engineering');



