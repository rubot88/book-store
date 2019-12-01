import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { HomePage } from '../pages';
import { CartPage } from '../pages';
import './app.scss';

const App = () => {
    return (

        <div className="app">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to='/'>Home</Link>
                </li>
                <li className="nav-item">

                    <Link to='/cart/'>Cart</Link>
                </li>
            </ul>
            <Switch>
                <Route
                    path='/'
                    component={HomePage}
                    exact />
                <Route
                    path='/cart'
                    component={CartPage} />
            </Switch>
        </div>
    )
};

export default App;