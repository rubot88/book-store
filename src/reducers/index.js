const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0

};

const findItemById = (items, id) => items.find((item) => item.id === id);
const findIndexById = (items, id) => items.findIndex((item) => item.id === id);

const getTotal = (items) => items.reduce((total, item) => total + item.total, 0)

const increaseBookCount = (book, item = {}) => {
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
const decreaseBookCount = (book, item = {}) => {
    const { id = book.id,
        title = book.title,
        count = 0,
        total = 0 } = item;

    return {
        id,
        title,
        count: count <= 0 ? 0 : count - 1,
        total: total <= 0 ? 0 : total - book.price
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
            {
                const book = findItemById(state.books, action.payload)
                const itemIndex = findIndexById(state.cartItems, action.payload);
                const item = state.cartItems[itemIndex];

                const newItem = increaseBookCount(book, item);
                const cartItems = updateCartItems(state.cartItems, newItem, itemIndex)
                return {
                    ...state,
                    cartItems,
                    orderTotal: getTotal(cartItems)
                }
            }
        case 'BOOK_DELETED_FORM_CART':
            {
                const cartItems = removeItem(state.cartItems, action.payload)
                return {
                    ...state,
                    cartItems,
                    orderTotal: getTotal(cartItems)
                }
            }
        case 'BOOK_DECREASED':
            {
                const book = findItemById(state.books, action.payload)
                const itemIndex = findIndexById(state.cartItems, action.payload);
                const item = state.cartItems[itemIndex];
                const newItem = decreaseBookCount(book, item);
                const cartItems = updateCartItems(state.cartItems, newItem, itemIndex)
                return {
                    ...state,
                    cartItems,
                    orderTotal: getTotal(cartItems)
                }
            }
        default:
            return state;
    }

};

export default reducer;