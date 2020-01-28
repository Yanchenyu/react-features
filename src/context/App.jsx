import React, { Component, Fragment } from 'react'
import { ThemeContext, themes } from './ThemeContext'
import ThemeTogglerButton from './ThemeTogglerButton'
import Header from './Header'
import OnceRender from './OnceRender'

class Provider extends Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        }
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        }
    }
    render() {
        return <ThemeContext.Provider value={this.state}>
            {this.props.children}
        </ThemeContext.Provider>
    }
}

// 成功的用法，TogglerButton组件里更改头部样式，则只应该头部组件去更新render，其它组件不会触发re-render
class App extends Component {
    render() {
        return (
            <Provider>
                <Header />
                <ThemeTogglerButton />
                <OnceRender />
            </Provider>
        )
    }
}

export default App

// 下面这种写法不好，不要这么写，子组件会触发re-render，还是要抽离一层，因为context的状态更新在顶层组件，所以必须隔离开与子组件
class App1 extends Component {

    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        }

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        }

    }


    render() {
        return <ThemeContext.Provider value={this.state}>
            <Header />
            <ThemeTogglerButton />
            <OnceRender />
        </ThemeContext.Provider>
    }
}
