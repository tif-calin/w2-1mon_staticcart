import { findById, createCartRow, calcOrderTotal, getCart, addItemToCart, setCart, calcItemTotal } from '../utils.js';
import { products } from '../store/products.js';

const tblCartBody = document.querySelector('#shopping-cart tbody');
const varTotal = document.querySelector('#price-total');
const btnOrder = document.querySelector('#place-order');

const loadTable = () => {
    // reset the table body
    tblCartBody.innerHTML = '';

    // loop through the localstorage cart and update the display table
    let cart = getCart();

    for (let order of cart) {
        if (order['quantity'] > 0) {
            const item = createCartRow(findById(products, order['id']), order['quantity']);

            // add event listeners to the inputs
            item.addEventListener('input', () => {
                // update cart total
                const currentQuantity = findById(cart, item.id).quantity;
                const newQuantity = item.querySelector('input').value;

                addItemToCart(item.id, newQuantity - currentQuantity);
                cart = getCart();

                varTotal.textContent = '$' + calcOrderTotal(products, cart);

                // update row total
                const itemPrice = findById(products, item.id).price;
                item.querySelector('td:last-child').textContent = '$' + calcItemTotal(itemPrice, newQuantity);
            });

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