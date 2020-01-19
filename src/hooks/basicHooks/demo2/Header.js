import React from 'react'
import { contextConsumerCreator } from './ThemeContext';

export default function () {
    const {theme} = contextConsumerCreator();
    return (
        <>
            {<p>context theme: {theme.background}</p>}
        </>
    )
}
