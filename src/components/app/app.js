import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StoreHeader from '../store-header';
import { HomePage } from '../pages';
import { CartPage } from '../pages';
import './app.scss';

const App = () => {
    return (

        <main role="main" className="container">
            <StoreHeader numItems={5} total={210} />
            <Switch>
                <Route
                    path='/'
                    component={HomePage}
                    exact />
                <Route
                    path='/cart'
                    component={CartPage} />
            </Switch>
        </main>
    )
};

export default App;