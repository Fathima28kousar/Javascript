// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to delete the last character from the display
  function deleteLastChar() {
    const currentDisplay = document.getElementById('display');
    currentDisplay.value = currentDisplay.value.slice(0, -1);
  }
  
  // Function to append a character to the display
  function appendToDisplay(character) {
    document.getElementById('display').value += character;
  }
  
  // Function to calculate and display the result
  function calculateResult() {
    const currentDisplay = document.getElementById('display');
    currentDisplay.value = eval(currentDisplay.value);
  }
  