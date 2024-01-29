let currentInput = '';
let operator = '';
let displayElement = document.getElementById('display');

    function appendNumber(number) {
        currentInput += number;
        updateDisplay();
    }

    function setOperator(op) {
        operator = op;
        currentInput += ' ' + op + ' ';
        updateDisplay();
    }

    function clearDisplay() {
        currentInput = '';
        operator = '';
        updateDisplay();
    }

    function calculateResult() {
        const parts = currentInput.split(' ');
        const num1 = parseFloat(parts[0]);
        const num2 = parseFloat(parts[2]);
        let result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 'Error';
        }

        currentInput = result.toString();
        operator = '';
        updateDisplay();
    }

    function updateDisplay() {
        displayElement.textContent = currentInput;
    }
