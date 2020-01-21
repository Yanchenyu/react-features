import React, { useMemo } from 'react'

// useMemo封装组件
export default function (Component, props, compareProps = []) {
    const memoizedValue = useMemo(() => (
        <Component {...props} />
    ), compareProps)
    return memoizedValue
}
