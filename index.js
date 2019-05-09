import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './src/Home';
import ContextDemo from './src/context/App';
import HooksDemo from './src/hooks/App';

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
            </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/context" component={ContextDemo} />
                <Route path="/hooks" component={HooksDemo} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    <AppRouter />,
    document.getElementById("root")
);