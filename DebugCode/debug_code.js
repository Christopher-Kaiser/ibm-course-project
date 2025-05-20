function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    
    // Introduce a debugger statement to pause execution
    debugger;

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform multiple operations
        let additionResult = add(num1, num2);
        let multiplicationResult = multiply(num1, num2);
        let divisionResult = divide(num1, num2);

        // Display the results
        displayResult(`Sum: ${additionResult}, Product: ${multiplicationResult}, Quotient: ${divisionResult}`);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Multiply the numbers
    return a * b;
}

function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return b !== 0 ? a / b : 'Cannot divide by zero';
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}
