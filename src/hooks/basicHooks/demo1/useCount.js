import React, {useState, useEffect} from 'react'

// 抽取行为逻辑以及对应的state
export default function useCount(initCount) {
    const [ count, setCount ] = useState(initCount || 0);

    useEffect(() => {
        console.log('didMount !!', count);
        return () => {
            console.log('willunmount !!')
        }
    }, [count])

    return {count, setCount}
}