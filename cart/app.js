import { findById, createCartRow, calcOrderTotal, getCart } from '../utils.js';
import { products } from '../store/products.js';

const tblCart = document.querySelector('#shopping-cart');
const varTotal = document.querySelector('#price-total');

const loadTable = () => {
    const cart = getCart();
    
    for (let order of cart) {
        if (order['quantity'] > 0) {
            const item = createCartRow(findById(products, order['id']), order['quantity']);
            tblCart.appendChild(item);
        }
    }

    varTotal.textContent = '$' + calcOrderTotal(products, cart);
};

loadTable();