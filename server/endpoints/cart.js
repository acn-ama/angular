const faker = require('faker');


const cart = () => {
    const numberItems = Math.round(Math.random() * 10) + 1;

    let fullCart = [];

    for (let k = 0; k < numberItems; k++) {
        const numberRandom = Math.round(Math.random() * 10) + 1;

        let colors = [];

        for (let i = 0; i < numberRandom; i++) {
            colors = [
                ...colors,
                ...[faker.internet.color()],
            ];
        }

        const productName = faker.commerce.product();

        const memory = faker.random.number();

        const price = faker.commerce.price();

        fullCart = [
            ...fullCart,
            ...[{
                colors,
                productName,
                memory,
                price
            }]
        ];
    }

    return fullCart;
};

module.exports = cart();