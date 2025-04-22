import React from 'react';
import { useRef, useState, useEffect } from 'react';
const Timer = () => {
    const intervalRef = useRef(null);
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current);
        }
    }, [])



    return (
        <div>
            <h1>Timer: {count} seconds</h1>
            <hr />
            
            <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
        </div>
    )
};
export default Timer;