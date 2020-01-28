import React from 'react'
import { useCount } from './useCount'
import useStep from './useStep'

export default function () {
    const {count, dispatch} = useCount(4);
    const {step, setStep} = useStep(1);
    return <>
        <p>increment count : {count}</p>
        <button onClick={() => dispatch({type: 'INCREMENT', data: step})}>click me add number</button>
        <p>step: {step}</p>
        <button onClick={() => setStep(step + 1)}>click me add step</button>
    </>
}
