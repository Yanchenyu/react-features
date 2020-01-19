import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './src/Home';
import ContextDemo from './src/context/App';
import HooksDemo from './src/hooks/Home';
import BasicHooks from './src/hooks/basicHooks';
import RenderPropsDemo from './src/renderProps/App';
import HOCDemo from './src/hoc/App';

const AppRouter = () => (
    <Router>
        <div>
            <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/context">Context Demo</Link>
                </li>
                <li>
                    <Link to="/hooks">Hooks Demo</Link>
                </li>
                <li>
                    <Link to="/basichooks">Basic Hooks Demo</Link>
                </li>
                <li>
                    <Link to="/render-props">Render props Demo</Link>
                </li>
                <li>
                    <Link to="/hoc">HOC Demo</Link>
                </li>
            </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/context" component={ContextDemo} />
                <Route path="/hooks" component={HooksDemo} />
                <Route path="/basichooks" component={BasicHooks} />
                <Route path="/render-props" component={RenderPropsDemo} />
                <Route path="/hoc" component={HOCDemo} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    <AppRouter />,
    document.getElementById("root")
);