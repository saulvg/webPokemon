import { faker } from '@faker-js/faker';

// let products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// products = products.map((product) => {
//     return {
//         id: product,
//         name: faker.commerce.product(),
//         price: faker.commerce.price(),
//         image: faker.image.image(),
//         description: faker.commerce.productDescription(),
//     };
// });

// export default products;

export default function postProduct() {
    const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arrayProducts = [];

    arrayProducts = quantity.map((product) => {
        return {
            id: faker.datatype.uuid(),
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            image: faker.image.image(),
            description: faker.commerce.productDescription(),
        };
    });

    insertProductsLocalStorage(arrayProducts);
}

function insertProductsLocalStorage(arrayProducts) {
    localStorage.setItem('products', JSON.stringify(arrayProducts));
}