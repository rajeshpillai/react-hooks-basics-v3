import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const hooks   = [];
let hookCalls = -1;

// Your own useState
function useState(defaultValue) {
  const callId = ++hookCalls;
  console.log("HOOKS: ", hooks);
  if (hooks[callId]) {
    return hooks[callId];
  }

  const setterFunction = (newValue) => {
    hooks[callId][0] = newValue;
    reRender();
  }
  
  let result = [defaultValue, setterFunction]
  hooks[callId] = result;
  console.log(hooks, hookCalls);

  return result;
} 

function Counter() {
  const [counter, setCounter ] = useState(0); // [stateValue, updaterFunction]
  const [error, setError] = useState(undefined);
  const [visitorCount, setVisitorCount] = useState(0);
  const [todos, setTodos] = useState([]);

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

function reRender() {
  hookCalls = -1;
  ReactDOM.render(
    <React.StrictMode>
      <Counter />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// reRender();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
