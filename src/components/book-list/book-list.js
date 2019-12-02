import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions/';
import { compose } from '../../utils';
import './book-list.scss';

const BookList = ({ books }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    const { id } = book;
                    return (
                        <li
                            key={id}>
                            <BookListItem book={book} />
                        </li>)
                })
            }
        </ul>
    );
}
class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        const { books, loading, error } = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator error={error.message} />
        }
        return <BookList books={books} />
    }
};
const mapStateToProps = ({ books, loading, error }) => {
    return {
        books,
        loading,
        error
    };
};



const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);