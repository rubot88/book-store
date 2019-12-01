export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan Fauler',
            price: 32,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 45,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/41nMZPJdhsL._SX415_BO1,204,203,200_.jpg"
        }
    ];
    getBooks() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    rej(new Error('Something has gone terribly wrong'));
                }
                res(this.data)
            }, 1000)
        })
    }
}