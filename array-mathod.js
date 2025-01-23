// array of object
const products = [
    { name: 'laptop', price: 90000, brand: 'lenovo' },
    { name: 'laptop', price: 120000, brand: 'mac mini' },
    { name: 'laptop', price: 110000, brand: 'microsoft' },
    { name: 'laptop', price: 90000, brand: 'dell' },
];

const brands = products.map(product => product.brand);
console.log(brands);