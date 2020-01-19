import React from 'react'
import useCount from './useCount'

export default function () {
    const {count, setCount} = useCount(4);
    return <>
        <p>count : {count}</p>
        <button onClick={() => setCount(count + 2)}>click me</button>
    </>
}