import React, { Component } from 'react';

export default function MouseHOC(Wrapcomponent) {
    return class extends Component {
        state = {
            x: 200,
            y: 200
        }
        isMove = false
        handleMouseDown = () => {
            this.isMove = true
        }
        handleMouseUp = () => {
            this.isMove = false
        }
        handleMouseMove = (e) => {
            if (!this.isMove) return
            e.persist();
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }
        render() {
            return <div 
                onMouseDown={this.handleMouseDown} 
                onMouseMove={this.handleMouseMove}
                onMouseUp={this.handleMouseUp}
                >
                    <Wrapcomponent {...this.state} {...this.props} />
            </div>
        }
    }
}