//document.write("Hello world <br> <i>hmmmm!!!</i>");
// var firstname55 = 'hello fathima';
// var a = 5674;
// document.write(firstname55)
// document.write(a)

/*var per = 45;
if (per>=80 && per <=100){
 console.log("Your in merit");
}else if (per>60 && per<80){
 console.log("Your in Ist division");
}else if (per>35 && per <60){
 console.log("Your in 2nd division");
 }else if (per<35){
 console.log("Your Failed");
} else {
 console.log("Please enter valid percentage");
}*/

/*var name = 'Yahoo Baba';
var gender = 'Male';
if (gender == 'Male'){
    console.log("Hello Mr."+name);
}else{
    console.log("Hello Ms."+name)
}*/


/*var x = 100;
if (x>30){
    console.log('x is greater');
}else{
    console.log('x is not greater');
}*/
// function add(){
//     console.log('addition');
// }
// add();
// add();

// let a = 10;
// let add = () => {
//     console.log('additon');
// }
// add();
// add();

/*function add(a,b){
    console.log(a+b);
}
add(10,30);

let Add = (a,b) => {
    console.log(a+b);
}
Add(10,40);*/
class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0
    min_Bal=500
    open_Account(){
        console.log("Accounted Successfully")
    }
    deposit_Amount(amount){
        this.acc_Bal= this.acc_Bal + amount
        console.log(amount,":::Amount deposited")
    }
    withdrawl(){
        console.log("withdrawl")
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}

let a1=new Account()
let a2=new Account()
console.log(a1)
console.log(a2)
a1.open_Account()
a1.deposit_Amount(6000)
console.log(a1)
console.log(a2)