import React from 'react'
import { useState } from 'react'
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev=>prev-1)
  return (
      <div className='container'>
          <div>
            <h1 className='number'>{count}</h1>    
          </div>
          <div className="ctns-container">
              <button onClick={increment} className="increment">+</button>
              <button onClick={decrement} className="decrement">-</button>
              
          </div>
          
    </div>
  )
}

export default Counter