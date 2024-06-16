function clearDisplay(){
    document.getElementById("display").value = "";
}

function deleteLastChar(){
    const currentDisplay = document.getElementById("display");
    currentDisplay.value = currentDisplay.value.slice(0,-1)
}

function appendToDisplay(character){
    document.getElementById("display").value += character;
}

function calculateResult(){
    const currentDisplay = document.getElementById("display");
    currentDisplay.value = eval(currentDisplay.value);
}