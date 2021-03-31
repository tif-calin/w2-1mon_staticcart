
export const createListing = obj => {
    // create an <li> and return it
    const item = document.createElement('li');

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
    itemImg.src = './assets/' + obj['image'];
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
    

    return item;
};