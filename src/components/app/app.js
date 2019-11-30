import React from 'react';
import { Route, Link } from 'react-router-dom';
import { HomePage } from '../pages';
import { CardPage } from '../pages';
import './app.scss';

const App = () => {
    return (
        <div className="app">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to='/'>Home</Link>
                </li>
                <li className="nav-item">

                    <Link to='/card/'>Card</Link>
                </li>
            </ul>

            <Route
                path='/'
                component={HomePage}
                exact />
            <Route
                path='/card'
                component={CardPage}
                exact />
        </div>
    )
};

export default App;