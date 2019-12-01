import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions/';
import { compose } from '../../utils';
import './book-list.scss';

class BookList extends Component {
    componentDidMount() {
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        this.props.booksLoaded(data);

    }
    render() {
        const { books } = this.props;
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
const mapStateToProps = ({ books }) => {
    return {
        books
    };
};

const mapDispatchToProps = { booksLoaded };

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);