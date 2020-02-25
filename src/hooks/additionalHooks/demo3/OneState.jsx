import React, { useRef, useState } from 'react'

export default function () {
    const state = useRef(0);
    const [count, setCount] = useState(state.current);
    const click = () => {
        state.current++;
        setCount(state.current);
        setTimeout(() => {
            console.log('ref state : ', state.current);     // 这里current是唯一的，同一个引用
            console.log('not ref state : ', count);         // 这里的count不同时刻是不同的，并非同一个
        }, 1000)
    }
    return (
        <>
            <h2>demo4: </h2>
            <h3>利用useRef的唯一性确保state统一，但是render还是得借助useState才行</h3>
            <p>number: {count}</p>
            <button onClick={click}>this is ref button</button>
        </>
    )
}
