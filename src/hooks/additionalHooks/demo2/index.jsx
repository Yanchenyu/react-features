import React, { useState } from 'react'
import useMemo from './useMemo'
import useCallback from './useCallback'
import Header from './Header'
import Number from './Number'

export default function() {
    const [num, setNum] = useState(0);
    const obj = {
        title: 'header组件',
        num
    }
    return (
        <>
            <h2>demo2: </h2>
            <h3>利用useMemo和useCallback实现SCU，两者一样，只是用法不同</h3>
            {useMemo(Header, obj, [obj.title])}
            <br />
            {useCallback(Number, {num}, [num])}
            <button onClick={() => setNum(Math.floor(Math.random() * 10) + 1)}>click me !</button>
        </>
    )
}
