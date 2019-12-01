import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested } from '../../actions/';
import { compose } from '../../utils';
import './book-list.scss';

class BookList extends Component {
    componentDidMount() {
        const { bookstoreService, booksLoaded, booksRequested } = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => {
                booksLoaded(data);
            });
    }
    render() {
        const { books, loading } = this.props;
        if (loading) {
            return <Spinner />
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
const mapStateToProps = ({ books, loading }) => {
    return {
        books,
        loading
    };
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);