

function calculateResult() {
    const currentDisplay = document.getElementById('display');
    const inputValue = currentDisplay.value;

    // Now you can use inputValue in your calculations or log it
    console.log(inputValue);

    // Example: Evaluate the expression and update the display
    currentDisplay.value = eval(inputValue);
}
