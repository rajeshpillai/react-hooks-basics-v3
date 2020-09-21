import React from 'react';

function useState(defaultValue) {
  
  const setterFunction = (newValue) => {
    return newValue;
  }
  
  let result = [defaultValue, setterFunction]

  return result;
} 

function Counter() {
  //  alert("Function called!");
  // const counterResult = useState(0);
  // const counter = counterResult[0];
  // const setCounter = counterResult[1];
  
  debugger;
  const [counter, setCounter ] = useState(0); // [stateValue, updaterFunction]
  const [error, setError] = useState(undefined);

  function onIncrement () {
    //counter = counter + 1;   // WILL NOT WORK
    if (error) {
      setError(undefined);
    }
    setCounter(counter + 1);
  }
  
  function onDecrement () {
    if (counter == 0) {
      setError("Counter should not be negative!");
      return;
    }
    setCounter(counter - 1);
  }
  

  return (
    <div className="container">
      <h1>Counter</h1>
      {
        error && <div className="bg-danger">{error}</div>
      }
      <div className="d-flex justify-content-between">
        <button onClick={onIncrement} className="btn btn-primary">+</button>
        {counter}
        <button  onClick={onDecrement} className="btn btn-secondary">-</button>
      </div>
    </div>
  )
}

export default Counter;