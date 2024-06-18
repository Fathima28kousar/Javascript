let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".imageItem")

let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100
slideBtnLeft.addEventListener('click',handleLeftBtn);

function handleLeftBtn(){
    if(startSlider < 0){
        startSlider = startSlider + 100;
    }
    console.log(startSlider);
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`
    })
}

slideBtnRight.addEventListener("click",handleRightBtn)
function handleRightBtn(){
    if(startSlider >= -endSlider+100){
        startSlider = startSlider - 100
    }
    console.log(startSlider)
    imgItem.forEach(element => {
        element.style.transform =`translateX(${startSlider}%)`
    })
}
