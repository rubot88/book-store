import React from 'react';
import { Link } from 'react-router-dom';
import './store-header.scss'

const StoreHeadear = ({ numItems, total }) => {
    return (
        <header className="store-header row">
            <Link to="/">
                <div className="logo text-dark" >Bookstore</div>
            </Link>
            <Link to="/">
                <div className="shopping-cart" href="#">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {numItems} items (${total})
                 </div>
            </Link>
        </header>
    )
};

export default StoreHeadear;