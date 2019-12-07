import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions/';
import { compose } from '../../utils';
import './book-list.scss';

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    const { id } = book;
                    return (
                        <li
                            key={id}>
                            <BookListItem book={book}
                                onAddedToCart={() => onAddedToCart(book.id)} />
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
        const { books, loading, error, onAddedToCart } = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator error={error.message} />
        }
        return <BookList books={books} onAddedToCart={onAddedToCart} />
    }
};
const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return {
        books,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch)
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);