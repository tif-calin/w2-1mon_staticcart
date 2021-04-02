import { findById, createCartRow, calcOrderTotal, getCart, setCart } from '../utils.js';
import { products } from '../store/products.js';

const tblCartBody = document.querySelector('#shopping-cart tbody');
const varTotal = document.querySelector('#price-total');
const btnOrder = document.querySelector('#place-order');

const loadTable = () => {
    // reset the table body
    tblCartBody.innerHTML = '';

    // loop through the localstorage cart and update the display table
    const cart = getCart();

    for (let order of cart) {
        if (order['quantity'] > 0) {
            const item = createCartRow(findById(products, order['id']), order['quantity']);
            tblCartBody.appendChild(item);
        }
    }

    // update the order total
    varTotal.textContent = '$' + calcOrderTotal(products, cart);
};

btnOrder.addEventListener('click', () => {
    const cart = getCart();
    let mssg = `You bought ${cart.length} plants for ${varTotal.textContent}.`;

    window.alert(mssg);

    setCart([]);
    loadTable();

    window.location = '../store/';
});

loadTable();