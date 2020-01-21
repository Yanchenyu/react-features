import React from 'react'

export default function(props) {
    console.log('number should render again & again!!');
    return (
        <div>number: {props.num}</div>
    )
}
