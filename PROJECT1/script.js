let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
    document.getElementById('display').style.textAlign = 'left'; 
}


function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
