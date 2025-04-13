import React from 'react';
import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        // This can cause issues if clicked multiple times or in async code
        // setCount(count+1);  

        // use functional update form instead
        setCount(prev => prev + 1);
    }
    const decrementCounter = () => {
        // This can cause issues if clicked multiple times or in async code
        // setCount(count-1);  

        // use functional update form instead
        setCount(prev => prev - 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <p>
                <button onClick={incrementCount}>+</button>
                <button onClick={decrementCounter}>-</button>
            </p>
        
        
        </div>
    )
};

export default Counter;