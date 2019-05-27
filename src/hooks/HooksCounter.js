import React, { useState } from 'react'

function Counter() {

    const [state, setCount] = useState({
        count: 0,
        words: ''
    });

    const handleClick = () => {
        setCount({
            ...state,
            count: state.count + 1
        });
        setTimeout(() => {
            // usestate产生的数据也是immutable的，但是这里没有this，因此state指向的地址不一样，每次点击都会生成一个新的state
            console.log(state.count)
        }, 3000);
    };

    const handleChange = (val) => {
        setCount({
            ...state,
            words: val
        })
    }
    return <div>
        <p>hooks count: {state.count}</p>
        <button onClick={handleClick}>add hooks count</button>
        <input placeholder="请输入文字" onChange={(e) => handleChange(e.target.value)} value={state.words} />
    </div>
}

export default Counter
