import React from 'react'
import { contextConsumerCreator } from './ThemeContext';

function ThemeTogglerButton() {
    const { theme, toggleTheme } = contextConsumerCreator();
    return (
        <button
            onClick={toggleTheme}
            style={{ backgroundColor: theme.background }}>
            Toggle Theme
        </button>

    );
}

export default ThemeTogglerButton;