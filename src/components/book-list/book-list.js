import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import './book-list.scss';

export default class BookList extends Component {
    render() {
        const { books } = this.props;
        const bookList = books.map((book) => {
            const { id } = book;
            return (
                <li
                    className="list-group-item"
                    key={id}>
                    <BookListItem book={book} />
                </li>)
        });
        return (
            <ul className="list-group">
                {bookList}
            </ul>
        );
    }
};