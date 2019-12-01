import React, { Fragment } from 'react';

import './book-list-item.scss';

const BookListItem = ({ book }) => {
    const { title, author } = book;
    return (
        <Fragment>
            <span>{title}</span>
            <span>{author}</span>
        </Fragment>
    );
};
export default BookListItem;