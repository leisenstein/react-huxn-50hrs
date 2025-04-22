import React from 'react'
import { useRef } from 'react';
const FocusInput = () => {
    const inputElement = useRef(null);

    const handleFocusClick = () => {
        inputElement.current.focus();
        inputElement.current.value = 'LarryE';
    };
    return (
        <div>
            <h1>Focus Input</h1>
            <hr />
            <input type="text" ref={inputElement} />
            <button onClick={handleFocusClick}>Focus</button>
        </div>
    )
};

export default FocusInput;