import React from 'react';
import pck from '../static/img/pikachu.jpeg';

export default function(props) {
    const { x, y } = props;
    return <img src={pck} style={{ position: 'absolute', left: x + 'px', top: y + 'px', widht: '160px', height: '120px'  }} />
    
}