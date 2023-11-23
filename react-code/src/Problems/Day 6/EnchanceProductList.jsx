import { WithProductList } from './WithProductList';
import ProductListComponent from './ProductListComponent';

const Products = [
    { id: 1, name: 'Product 1', price: 19.99, imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, imageUrl: 'product2.jpg' },
]

const EnchanceProductList = WithProductList(ProductListComponent, Products)

export default EnchanceProductList;