import React, { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(1)
    const [value, setValue] = useState("")
    const incrementCount = () => {
        setCount(count+1)
    }
    const decrementCount = () => {
        setCount(count-1)
    }
    return(
        <>
            <div>{count}</div>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <div>
                <h1>{value}</h1>
                <input type="text" value={value} onChange={event=>setValue(event.target.value)} />
            </div>
        </>
    )
}