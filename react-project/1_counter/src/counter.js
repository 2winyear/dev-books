import React, { useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState(1);

    const handleDecrease = () => {
        setNumber(number - 1);
    };

    const handleIncrease = () => {
        setNumber(number + 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleDecrease}>-1</button>
            <button onClick={handleIncrease}>+1</button>
        </div>
    );
};

export default Counter;