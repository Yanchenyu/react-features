import React from 'react'
import App1 from './App1'
import App2 from './App2'

export default function() {
    return (
        <>
            <h2>demo1: </h2>
            <h3>逻辑复用，同样的点击按钮加数字的逻辑，复用两个组件，关键点在于两者都没有自己声明状态以及行为，全部抽出，也没有提取至公共组件中</h3>
            <App1 />
            <App2 />
        </>
    )
}
