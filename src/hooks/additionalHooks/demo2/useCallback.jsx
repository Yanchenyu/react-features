import React, { useCallback } from 'react'

// useCallback封装组件
export default function (Component, props, compareProps = []) {
    const memoizedValue = useCallback(<Component {...props} />, compareProps)
    return memoizedValue
}
