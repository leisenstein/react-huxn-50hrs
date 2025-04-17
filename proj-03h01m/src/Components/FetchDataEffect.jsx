import React from 'react';
import { useState, useEffect } from 'react';

const FetchDataEffect = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const results = await response.json();
            if (results && results.length)
                setData(results);
        }
        
        getData();
    }, [])
    
    return (
        <>
        <h1>Fetch Data Effect</h1>
        
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}> 
            
            

            {data.map((item) => (
                <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '6px', padding: '10px', margin: '10px', width: '250px' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{item.title}</div>
                <div style={{ color: '#333' }}>{item.body}</div>
              </div>
            ))}

            <hr />
        </div>
        </>    
    )
};

export default FetchDataEffect;
