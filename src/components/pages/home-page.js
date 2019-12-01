import React from 'react';

import BookList from '../book-list';
import StoreCartTable from '../store-cart-table';

const HomePage = () => {
    return (
        <div>
            <BookList />
            <StoreCartTable />
        </div>
    );

};

export default HomePage;