import React, { useState } from 'react'
import InputField from './components/InputFields.jsx';
import OperationButtons from './components/OperationButton.jsx';

function App() {
  const [num1, setNum1] = useState(''); // number 1;
  const [num2, setNum2] = useState(''); // number 2;
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Validation function
  const validateInput = () => {
    if (num1 == '' || num2 == '') {
      setErrorMessage('Please enter both numbers');
      return false;
    }

    if (isNaN(num1) || isNaN(num2)) {
      setErrorMessage('Please enter valid numbers');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  // Calculation Functions

  const calculate = (operation) => {
    if (!validateInput()) return;

    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    let res = null;

    switch (operation) {
      case 'add':
        res = n1 + n2;
        break;

      case 'subtract':
        res = n1 - n2;
        break;

      case 'multiply':
        res = n1 * n2;
        break;

      case 'divide':
        if (n2 === 0) {
          setErrorMessage('Divison by zero is not allowed');
          return;
        }
        res = n1 / n2;
        break;
      default:
        return;
    }
    setResult(res);
  };


  return (
    <div>
      <div className="background"></div>
      <div className='App'>
        <h1>React Calculator</h1>
        {/*Input fields*/}
        <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)}
          placeholder='Enter first number' />
        <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)}
          placeholder='Enter secound number' />

        {/*Buttons for operations*/}
        <OperationButtons operation="add" label="+" onClick={calculate} />
        <OperationButtons operation="subtract" label="-" onClick={calculate} />
        <OperationButtons operation="multiply" label="*" onClick={calculate} />
        <OperationButtons operation="divide" label="/" onClick={calculate} />


        {/*Error or result display*/}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {result !== null && !errorMessage && <p style={{ color: 'green' }}>Result: {result}</p>}
      </div>
    </div>
  );
}

export default App;
