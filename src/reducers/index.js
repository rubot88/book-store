const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 360

};

const findItemById = (items, id) => {
    return items.find((item) => item.id === id);
};

const findIndexById = (items, id) => {
    return items.findIndex((item) => item.id === id);
}

const updateCartItem = (book, item = {}) => {
    const { id = book.id,
        title = book.title,
        count = 0,
        total = 0 } = item;

    return {
        id,
        title,
        count: count + 1,
        total: total + book.price
    };
};
const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
};

const removeItem = (items, id) => {
    const idx = findIndexById(items, id);
    return [
        ...items.slice(0, idx),
        ...items.slice(idx + 1)
    ]
}

const reducer = (state = initialState, action) => {
    const { cartItems } = state;

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: false
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            const book = findItemById(state.books, action.payload)
            const itemIndex = findIndexById(cartItems, action.payload);
            const item = cartItems[itemIndex];

            const newItem = updateCartItem(book, item);
            return {
                ...state,
                cartItems: updateCartItems(cartItems, newItem, itemIndex)
            }
        case 'BOOK_DELETED_FORM_CART':
            return{
                ...state,
                cartItems: removeItem(cartItems,action.payload)
            }
        default:
            return state;
    }

};

export default reducer;