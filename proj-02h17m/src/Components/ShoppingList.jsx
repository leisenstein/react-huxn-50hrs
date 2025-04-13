import React from 'react';
import { useState } from 'react';

const ShoppingList = () => {
    const [list, setList] = useState([]);
    const [currentItem, setCurrentItem] = useState({ name: '', quantity: '' });

    function handleInput(e) {
        const { name, value } = e.target;
        setCurrentItem(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleAdd() {
        if (!currentItem.name || !currentItem.quantity)
            return;

        setList(prev=> [...prev, {...currentItem}])
        setCurrentItem({ name: '', quantity: '' });
    }

    return (
        <div>
            <h1>Shopping List</h1>
            {
                list.map((entry, index) => (
                    <li key={index}>{entry.name}: {entry.quantity}</li>)
            )}

            <label >Item:</label>
            <input type="text" id="name" name="name" value={currentItem.name} onChange={handleInput} />

            <label >Quantity:</label>
            <input type="number" id="quantity" name="quantity" value={currentItem.quantity} onChange={handleInput} />

            <button onClick={handleAdd}>+</button>

        </div>
    );
};
export default ShoppingList;