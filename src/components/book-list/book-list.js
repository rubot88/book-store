import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions/';
import { compose } from '../../utils';
import './book-list.scss';

class BookList extends Component {
    componentDidMount() {
        const {
            bookstoreService,
            booksLoaded,
            booksRequested,
            booksError } = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => {
                booksLoaded(data);
            })
            .catch((err) => {
                booksError(err);
            })
    }
    render() {
        const { books, loading, error } = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator error={error.message} />
        }
        const bookList = books.map((book) => {
            const { id } = book;
            return (
                <li
                    key={id}>
                    <BookListItem book={book} />
                </li>)
        });
        return (
            <ul className="book-list">
                {bookList}
            </ul>
        );
    }
};
const mapStateToProps = ({ books, loading, error }) => {
    return {
        books,
        loading,
        error
    };
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);