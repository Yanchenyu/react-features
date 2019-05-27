import React, { Component } from 'react'

export default class extends Component {

    state = {
        count: 0
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
        setTimeout(() => {
            // state是immutable的，但是this是唯一的，通过this.state取状态，所以执行完后拿到的是最新的状态
            console.log(this.state.count)
        }, 3000);
    }
    
    render() {
        return <div>
            <p>react count: {this.state.count}</p>
            <button onClick={this.handleClick}>add count</button>
        </div>
    }
}
