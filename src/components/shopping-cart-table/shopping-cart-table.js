import React from 'react';
import { connect } from 'react-redux';

import {
    bookAddedToCart,
    bookDecreased,
    bookDeletedFormCart
} from '../../actions';
import './shopping-cart-table.scss';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        className="btn btn-outline-success btn-sm "
                        onClick={() => onIncrease(id)}>
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        className="btn btn-outline-warning btn-sm "
                        onClick={() => onDecrease(id)}>
                        <i className="fa fa-minus-circle" />
                    </button>
                    <button
                        className="btn btn-outline-danger btn-sm "
                        onClick={() => onDelete(id)}>
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        );
    }
    return (
        <div className="shopping-cart-table text-center">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {items.map(renderRow)}
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(bookAddedToCart(id)),
        onDecrease: (id) => dispatch(bookDecreased(id)),
        onDelete: (id) => dispatch(bookDeletedFormCart(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);