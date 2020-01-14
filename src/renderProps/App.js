import React, { Component } from 'react';
import Mouse from './Mouse';
import Cat from '../components/Cat';

export default class extends Component {
    renderMouse = (props) => (
        <Cat {...props} />
    )
    render() {
        return <div>
            <p>mouse move</p>
            <Mouse render={this.renderMouse} />
        </div>
    }
}