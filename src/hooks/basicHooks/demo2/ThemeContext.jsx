import React, { useState, useContext } from 'react'

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { },
})

// 抽离给context的行为和状态逻辑
export function contextProviderValueCreator() {
    const [theme, toggleTheme] = useState(themes.light)
    const value = {
        theme,
        toggleTheme: () => {
            toggleTheme(theme === themes.dark ? themes.light : themes.dark)
        }
    }
    return value
}

// 统一提取useContext，直接给到组件消费
export function contextConsumerCreator() {
    const contextConsumer = useContext(ThemeContext);
    return contextConsumer
}