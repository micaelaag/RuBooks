import React, { useState } from 'react'

function ItemCount() {
    const [count, setCount] = useState(0);

    return (
    <div>
        <p>{count}</p>
        <button onClick={()=> {setCount(count + 1)}}>+</button>
        <button onClick={count>0 ? ()=> {setCount(count - 1)} : null}>-</button>
    </div>
)
}

export default ItemCount