import React, {useReducer} from 'react'


// Reducer function (this should be in separate file)
// Two parameter
//    1.  state
//    2.  action (property type: which is mandatory)
function counterReducer(state, action) {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default function UseReducerDemo() {

  // Convention is to name updater function as "dispatch"
  const [state, dispatch] = useReducer(counterReducer, 0)

  const increment = () => {
    dispatch({
      type: "INCREMENT"
    }); 
  }

  const decrement = () => {
    dispatch({
      type: "DECREMENT"
    }); 
  }
  
  return (
    <div>
        <h4>useReducer (alternative to Redux)</h4>
        <h3>{state}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
