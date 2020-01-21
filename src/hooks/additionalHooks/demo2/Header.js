import React from 'react'

// 尽管传入的props里有num一直在变化，但是因为useMemo的判断，title没变，所以num的变化不会引发re-render
export default function(props) {
    console.log('header should render once !!');
    return (
        <div>title: {props.title}</div>
    )
}
