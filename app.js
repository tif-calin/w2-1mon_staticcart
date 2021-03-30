// import functions and grab DOM elements
import { createListing } from './utils.js';
import { products } from './products';

const store = document.querySelector('#products-listing');

// initialize state
const loadItems = (listings) => {
    for (let listing of listings) {
        store.appendChild(createListing(listing));
    }
};

// set event listeners to update state and DOM
loadItems(products);