const booksRequested = () => {
    return {
        type: "FETCH_BOOKS_REQUEST"
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};

const booksError = (error) => {
    return {
        type: "FETCH_BOOKS_FAILURE",
        payload: error
    }
};

const fetchBooks = (bookstoreService, dispatch) => () => {

    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
}

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const bookDecreased = (id) => {
    return {
        type: 'BOOK_DECREASED',
        payload: id
    }
};
const bookDeletedFormCart = (id) => {
    return {
        type: 'BOOK_DELETED_FORM_CART',
        payload: id
    }
};

export {
    fetchBooks,
    bookAddedToCart,
    bookDecreased,
    bookDeletedFormCart
};