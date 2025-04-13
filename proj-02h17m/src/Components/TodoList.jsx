import React from 'react';
import { useState } from 'react';
const TodoList = () => {
    const [list, setList] = useState([]);
    const [currentInput, setCurrentInput] = useState('');
    const addTodo = () => {
        if (!currentInput.trim()) return; // avoid adding empty items
        console.log(currentInput);
        setList([...list, currentInput])
        setCurrentInput('')
    };

    return (
        <div>
            <h1>ToDo List</h1>
            <ul>
                {list.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))};
            </ul>
            <input type="text" value={currentInput}  onChange={(e) => setCurrentInput(e.target.value)} />
            <button id='addItem' onClick={addTodo}>+</button>
        </div>  
    );



};

export default TodoList;