import React from 'react'
import { ThemeContext, contextProviderValueCreator } from './ThemeContext'
import ThemeTogglerButton from './ThemeTogglerButton'
import Header from './Header'
import OnceRender from './OnceRender'

// 因为没有使用class组件，所以没有props.children这个属性，只能用其它render props
function Provider(props) {
    return <ThemeContext.Provider value={contextProviderValueCreator()}>
        {props.render}
    </ThemeContext.Provider>
}

// 改装了render props，避免多余re-render
export default function () {
    return (
        <Provider 
            render={(() => (
                <>
                <h2>demo2: </h2>
                <h3>利用useState和useContext重写上面的context组件demo，完全无Class写法，并且逻辑完全抽离ui，包括context</h3>
                <Header />
                <ThemeTogglerButton />
                <OnceRender />
                </>
            ))()}
        />
    )
}

