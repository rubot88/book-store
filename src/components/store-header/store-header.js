import React from 'react';

import './store-header.scss'

const StoreHeadear = ({ numItems, total }) => {
    return (
        <header className="store-header row">
            <a className="logo text-dark" href="#">Bookstore</a>
            <a className="shopping-cart" href="#">
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (${total})
            </a>
        </header>
    )
};

export default StoreHeadear;