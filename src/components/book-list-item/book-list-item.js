import React from 'react';
import { Link } from 'react-router-dom';

import './book-list-item.scss';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage } = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="book cover" />
            </div>
            <div className="book-details">
                <Link to="/">
                    <div className="book-title">
                        {title}
                    </div>
                </Link>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button className="btn btn-info add-to-cart"
                    onClick={onAddedToCart}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};
export default BookListItem;