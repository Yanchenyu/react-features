import React from 'react'
import useCount from './useCount'

export default function () {
    const {count, setCount} = useCount(2);
    return <>
        <p>count : {count}</p>
        <button onClick={() => setCount(count + 1)}>click me</button>
    </>
}