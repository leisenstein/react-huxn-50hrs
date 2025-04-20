import React from 'react'
import { useReducer } from 'react'
import counterReducer, { initialCounterState } from '../counterReducer'
const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialCounterState);





  return (
    <div>
        <h2>Count: {state.count}</h2>
          <hr />
          {/* You are passing the whole 'action' object, but setting the type. */}
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
          <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
          <button onClick={()=>dispatch({type: 'RESET'})}>Reset</button>
        


    </div>
  )
}

export default Counter