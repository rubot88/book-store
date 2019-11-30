import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = (mapMethodsProps) => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        const serviceProps = mapMethodsProps(bookstoreService);
                        return (
                            <Wrapped {...props}
                                {...serviceProps} />
                        );
                    }
                }
            </BookstoreServiceConsumer>
        );

    }
};

export default withBookstoreService;