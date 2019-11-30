import React from 'react';
import { withBookstoreService } from '../hoc';
import './app.scss';

const App = ({ bookstoreService }) => {
    return <div>App</div>
};

export default withBookstoreService()(App);