// import functions and grab DOM elements
import { createListing, addItemToCart, findById } from '../utils.js';
import { products } from './products.js';

const store = document.querySelector('#products-listing');

// initialize state
const loadItems = (listings) => {
    // reset the innerhtml of the <ul> element
    store.innerHTML = '';

    for (let listing of listings) {
        // create the listing html element
        const htmlListing = createListing(listing);

        // add event listener
        const inpQuantity = htmlListing.querySelector('input');
        const btnBuy = htmlListing.querySelector('button');
        
        btnBuy.addEventListener('click', () => {
            addItemToCart(htmlListing.id, inpQuantity.value);
            btnBuy.disabled = true;
            inpQuantity.disabled = true;
        });

        // show on page
        store.appendChild(htmlListing);
    }
};

// set event listeners to update state and DOM
loadItems(products);