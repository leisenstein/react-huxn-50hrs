import React from "react";

const Greeting = () => {
    var name = 'Larry';
    var dt = new Date().toISOString().split('T')[0];
    return (
        <div>
            <h1>Hello { name }!</h1>
            <p>{ dt }</p>
        </div>
    )
}

export default Greeting;