import React, {useReducer} from 'react'


// Reducer function (this should be in separate file)
// Two parameter
//    1.  state
//    2.  action (property type: which is mandatory)
function counterReducer(state, action) {
  switch(action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
        error: ""
      }
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      }
    case "ERROR":
      return {
        ...state,
        error: action.payload
      }
    case "LOADING":
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
}

const DEFAULT_STATE = {
  counter: 0,
  error: "",
  isLoading: false
}

export default function UseReducerDemo() {

  // Convention is to name updater function as "dispatch"
  const [state, dispatch] = useReducer(counterReducer, DEFAULT_STATE)

  const increment = () => {
    dispatch({
      type: "INCREMENT"
    }); 
  }

  const decrement = () => {
    if (state.counter == 0) {
      dispatch({
        type: "ERROR",
        payload: "Counter should not be negative!"
      })
      return;
    }
    dispatch({
      type: "DECREMENT"
    }); 
  }

  const incrAfterNSeconds = () => {
    dispatch({
      type: "LOADING",
      payload: true
    });
    setTimeout(()=> {
      dispatch({
        type:"INCREMENT",
      })
      dispatch({
        type:"LOADING",
        payload:false
      })
    },3000)
  }
  
  return (
    <div>
        <h4>useReducer (alternative to Redux)</h4>
        <h3>{state.counter}</h3>

        {state.isLoading && 
          <h5>Loading...</h5>
        }

        { state.error.length > 0 && 
          <div>{state.error}</div>
        }
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

        <button onClick={incrAfterNSeconds}>+ after 3 seconds</button>

    </div>
  )
}
