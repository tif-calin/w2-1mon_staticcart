// IMPORT MODULES under test here:
import { createListing, findById, calcItemTotal } from '../utils.js';

const test = QUnit.test;

test('testing createListing', (expect) => {
    // Set up your arguments and expectations
    const expected = '<li class="listing"><h3>Voqui Blanco</h3><h4>Boquila trifoliolata</h4><img src="../assets/0boq.png" alt="Voqui Blanco (Boquila trifoliolata)"><label>Superpowers</label><details><summary>Mimicry</summary>Native to the temperate rainforests of southern Chile, this mysterious vine is able to mimic the leaves of almost any plant it climbs on. The shape, size, and even color of its leaves transform to match those of plants in its proximity without even needing to physically contact them—a behavior not known in any other plant! It graciously offers its edible berries to humans and other animals.</details><div class="purchase"><label class="price">$999.00</label><input type="number" min="0"><button>🛒</button></div></li>';
    
    // Call the function you're testing and set the result to a const
    const actual = createListing({
        'name': 'Voqui Blanco',
        'species': 'Boquila trifoliolata',
        'image': '0boq.png',
        'superpowers': [
            {
                'name': 'Mimicry',
                'description': 'Native to the temperate rainforests of southern Chile, this mysterious vine is able to mimic the leaves of almost any plant it climbs on. The shape, size, and even color of its leaves transform to match those of plants in its proximity without even needing to physically contact them&mdash;a behavior not known in any other plant! It graciously offers its edible berries to humans and other animals.'
            }
        ],
        'price': 999,
        'is-tree': false
    }).outerHTML;

    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('testing findById', expect => {
    const testArray = [];
    testArray.push({
        'id': '0mg',
        'name': 'oh my doG'
    })
    testArray.push({
        'id': '1ol',
        'name': 'lol out loud'
    })

    const expected = testArray[0];

    const actual = findById(testArray, '0mg');

    expect.deepEqual(actual, expected);
});

test('testing calcItemTotal', expect => {
    const expected1 = '80.44'
    const actual1 = calcItemTotal(20.11, 4);2

    const expected2 = '0.03'
    const actual2 = calcItemTotal(0.0007, 36);

    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});