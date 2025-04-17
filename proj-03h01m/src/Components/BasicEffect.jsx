import React from 'react'
import { useEffect } from 'react';

const BasicEffect = () => {
    useEffect(() => {
        console.log("FetchDataEffect onLoad()")
    }, [])
    
  return (
    <div>
          <h1>Basic Effect</h1>      
          <hr />
    </div>
  )
}

export default BasicEffect;


