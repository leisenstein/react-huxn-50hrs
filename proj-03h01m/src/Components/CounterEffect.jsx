import React from 'react';
import { useState, useEffect } from 'react';
const CounterEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

    function handleAdd() {
        setCount(count + 1)
    }
  return (
    <div>
          <h1>Counter: {count}</h1>
          <button onClick={handleAdd}>+</button>
          <hr />
    </div>
  )
}

export default CounterEffect;