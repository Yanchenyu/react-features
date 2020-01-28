import React from 'react'
import { useCount } from './useCount'

export default function () {
    const {count, dispatch} = useCount(2);
    return <>
        <p>decrement count : {count}</p>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>click me</button>
    </>
}
