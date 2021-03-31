// import functions and grab DOM elements
import { createListing } from '../utils.js';
import { products } from './products.js';

const store = document.querySelector('#products-listing');

// initialize state
const loadItems = (listings) => {
    store.innerHTML = '';
    for (let listing of listings) {
        store.appendChild(createListing(listing));
    }
};

// set event listeners to update state and DOM
loadItems(products);