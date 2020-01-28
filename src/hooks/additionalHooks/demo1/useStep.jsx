import React, {useState} from 'react'

// 抽取行为逻辑以及对应的state
export default function useStep(initStep) {
    const [ step, setStep ] = useState(initStep || 0);
    return {step, setStep}
}