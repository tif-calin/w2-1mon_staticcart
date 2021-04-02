const CART = 'CART';

export const createListing = obj => {
    // create an <li> and return it
    const item = document.createElement('li');
    item.id = obj['id'];

    item.classList.add('listing');

    // add heading
    const itemName = document.createElement('h3');
    itemName.textContent = obj['name'];
    if (obj['is-tree']) {
        const tree = document.createElement('label');
        tree.classList.add('tree-marker');
        tree.innerHTML = ' &#127794;';
        itemName.appendChild(tree);
    }
    item.appendChild(itemName);

    // add latin name
    const itemLatin = document.createElement('h4');
    itemLatin.textContent = obj['species'];
    item.appendChild(itemLatin);

    // add image
    const itemImg = document.createElement('img');
    itemImg.src = '../assets/' + obj['image'];
    itemImg.alt = `${obj['name']} (${obj['species']})`;
    item.appendChild(itemImg);

    // add superpowers
    const superLabel = document.createElement('label');
    superLabel.textContent = 'Superpowers';
    item.appendChild(superLabel);

    for (let sup of obj['superpowers']) {
        const superDetails = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = sup['name'];
        superDetails.appendChild(summary);
        superDetails.innerHTML += sup['description'];
        item.appendChild(superDetails);
    }

    // add ability to shop till you drop
    const divPurchase = document.createElement('div');
    divPurchase.classList.add('purchase');
    const lblPrice = document.createElement('label');
    lblPrice.classList.add('price');
    lblPrice.textContent = obj['price'].toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    divPurchase.appendChild(lblPrice);
    const inpQuantity = document.createElement('input');
    inpQuantity.type = 'number';
    inpQuantity.min = '0';
    inpQuantity.value = '1';
    divPurchase.appendChild(inpQuantity);
    const btnPurchase = document.createElement('button');
    btnPurchase.innerHTML = '&#x1F6D2;';
    divPurchase.appendChild(btnPurchase);

    item.appendChild(divPurchase);

    return item;
};

export const findById = (products, id) => {
    for (let item of products) {
        if (item['id'] === id) return item;
    }
    return null;
};

export const calcItemTotal = (price, quantity) => {
    const total = Math.round(price * quantity * 100) / 100;
    return total.toFixed(2);
};

export const createCartRow = (product, quantity) => {
    const item = document.createElement('tr');

    // make name <td>
    const tdName = document.createElement('td');
    tdName.textContent = product['name'];
    item.appendChild(tdName);

    // make quantity <td>
    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = quantity;
    item.appendChild(tdQuantity);

    // make price <td>
    const tdPrice = document.createElement('td');
    tdPrice.textContent = '$' + calcItemTotal(product['price'], quantity);
    item.appendChild(tdPrice);

    return item;
};

export const calcOrderTotal = (products, cart) => {
    let total = 0;
    for (let item of cart) {
        const product = findById(products, item['id']);
        total += Number(calcItemTotal(Number(product['price']), item['quantity']));
    }

    return (Math.round(total * 100) / 100).toFixed(2);
};

export const getCart = () => {
    const cart = JSON.parse(localStorage.getItem(CART));

    if (cart) return cart;
    else return [];
};

export const setCart = cart => {
    localStorage.setItem(CART, JSON.stringify(cart));
};

export const addItemToCart = (productId, quantity) => {
    const cart = getCart();

    const match = findById(cart, productId);

    if (match) match['quantity'] = Number(match['quantity']) + Number(quantity);
    else {
        const newItem = { 'id': productId, 'quantity': quantity };
        cart.push(newItem);
    }

    setCart(cart);
};