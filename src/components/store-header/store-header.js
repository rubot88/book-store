import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './store-header.scss'

const StoreHeader = ({ items, total }) => {
    const totalCount = items.reduce((total, item) => total + item.count, 0)
    return (
        <header className="store-header row">
            <Link to="/">
                <div className="logo text-dark" >Bookstore</div>
            </Link>
            <Link to="/cart/">
                <div className="shopping-cart" href="#">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {totalCount} items (${total})
                 </div>
            </Link>
        </header>
    )
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

export default connect(mapStateToProps)(StoreHeader);