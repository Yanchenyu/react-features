import React, { useRef } from 'react'

export default function () {
    const el = useRef(null);
    return (
        <>
            <h2>demo3: </h2>
            <h3>利用useRef获取真实dom节点</h3>
            <button ref={el} onClick={() => {console.log(el.current);}}>this is ref button</button>
        </>
    )
}
