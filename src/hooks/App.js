import React, { Component, useState, useEffect, useMemo } from 'react'

const Com = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('count: ', count)
    })

    console.log('render 2')
    return <div>
        <p>You clicked { count } times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    </div>
}

const Index = () => {

    console.log('render 1')

    return useMemo(() => {
        return <Com />
    }, [])
    
}

export default class extends Component {    

    state = {
        index: 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                index: this.state.index + 1
            })
        }, 1000);
    }

    render() {
        return <div>
            <Index />
            <p>index: {this.state.index}</p>
        </div>
    }
}
