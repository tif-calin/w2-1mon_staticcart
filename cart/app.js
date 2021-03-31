import { findById, createCartRow, calcOrderTotal } from '../utils.js';
import { cart } from './cart.js';
import { products } from '../store/products.js';

const tblCart = document.querySelector('#shopping-cart');
const varTotal = document.querySelector('#price-total');

const loadTable = () => {
    for (let order of cart) {
        if (order['quantity'] > 0) {
            const item = createCartRow(findById(products, order['id']), order['quantity']);
            tblCart.appendChild(item);
        }
    }

    varTotal.textContent = '$' + calcOrderTotal(products, cart);
};

loadTable();