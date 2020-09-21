import React, {useState} from 'react';

export default function MultipleStateUpdate() {
  const [counter, setCounter] = useState(0); 
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdated, setIsUpdating] = useState(false);

  // const [appState, setState] = useState({
  //   isLoading:false,
  //   isUpdated: false,
  //   error: "",
  //   counter: 0
  // })

  const incr = () => {
    if (error.trim() != "") {
      setError("");
    }
    
    //setIsLoading(true);
    setIsLoading((prevValue) => true);


    setTimeout(() => {
      // NOT guaranteed to WORK
      // setCounter(counter + 1);  
      // setCounter(counter + 1);        // setCounter(counter + 1);  
      
       setCounter((prevState) => prevState + 1);
       setCounter((prevState) => prevState + 1);
       setCounter((prevState) => prevState + 1);

       setIsLoading((_) => false);
       setIsUpdating((_) => true);

    //  setState({
    //    ...appState,
    //    isLoading: false,
    //    isUpdating: true
    //  })

    }, 3000);
  }

  const decr = () => {
    if (counter == 0) {
      setError("Counter should not be negative!");
      return;
    }
    setCounter(counter - 1);
  }
  
  return (
    <div>
      <h2>Counter Multiple State</h2>
      <h6>Counter is updated after 3 seconds!  We can make the code better
        using useReducer
      </h6>
      {
        error.length > 0 && <div className="error">{error}</div>
      }
      
      <h2>{counter}</h2>

      {isLoading && <h4>Loading....</h4>}
      {isUpdated && <h4>Counter successfully updated!!</h4>}
      
      <button onClick={incr}>+</button>
      <button onClick={decr}>-</button>
    </div>
  )
}

