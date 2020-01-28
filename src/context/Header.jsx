import React from 'react'
import { ThemeContext } from './ThemeContext'

export default function () {
    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => (
                    <p>context theme: {theme && theme.background}</p>
                )
            }
        </ThemeContext.Consumer>
    )
}
