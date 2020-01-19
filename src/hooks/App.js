import React, { Component, ReactFragment, useState, useEffect, useMemo } from 'react'
import HooksCounter from './HooksCounter'
import Counter from './Counter'

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

class Comcontainer extends Component {    

    state = {
        index: 0
    }

    componentDidMount() {
        setTimeout(() => {
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

class App1 extends Component {
    render() {
        return <div>
            {/* <Comcontainer /> */}
            <HooksCounter />
            <Counter />
        </div>
    }
}

