import React, { useRef } from 'react'
import OneState from './OneState'

export default function () {
    const el = useRef(null);
    return (
        <>
            <h2>demo3: </h2>
            <h3>利用useRef获取真实dom节点</h3>
            <button ref={el} onClick={() => {console.log(el.current);}}>this is ref button</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <OneState />
        </>
    )
}
