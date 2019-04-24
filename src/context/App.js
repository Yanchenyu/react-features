import React, { Component, Fragment } from 'react'
import { ThemeContext, themes } from './ThemeContext'
import ThemeTogglerButton from './ThemeTogglerButton'

// export default class extends Component {

//     constructor(props) {
//         super(props);

//         this.toggleTheme = () => {
//             this.setState(state => ({
//                 theme:
//                     state.theme === themes.dark
//                         ? themes.light
//                         : themes.dark,
//             }));
//         }

//         this.state = {
//             theme: themes.light,
//             toggleTheme: this.toggleTheme,
//         }

//     }
    

//     render() {
//         return <ThemeContext.Provider value={this.state}>
//             <Content />
//         </ThemeContext.Provider>
//     }
// }

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

class App extends Component {
    render() {
        return (
            <Provider>
                <Content />
            </Provider>
        )
    }
}

export default App

class Header extends Component {

    // shouldComponentUpdate() {
    //     return false
    // }

    render() {
        console.log('render');
        return (
            <div>header</div>
        )
    }
}

function Content() {
    return (
        <div>
            <Header />
            <ThemeTogglerButton />
        </div>
    );
}

// function Header() {
//     console.log('123123');
//     return (
//         <div>header</div>
//     )
// }

// export default App
