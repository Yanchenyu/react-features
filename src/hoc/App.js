import React, { Component } from 'react';
import MouseHOC from './Mouse';
import Cat from '../components/Cat';

const Mouse = MouseHOC(Cat);

export default class extends Component {
    render() {
        return <div>
            <p>mouse move</p>
            <Mouse />
        </div>
    }
}