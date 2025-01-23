// array of object
const products = [
    { name: 'laptop', price: 90000, brand: 'lenovo' },
    { name: 'laptop', price: 120000, brand: 'mac mini' },
    { name: 'laptop', price: 110000, brand: 'microsoft' },
    { name: 'laptop', price: 90000, brand: 'dell' },
];

const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

// forEach used if something not returnable

products.forEach(product => console.log(product));
products.forEach(product => console.log(product.brand));