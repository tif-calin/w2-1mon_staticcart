// IMPORT MODULES under test here:
import { createListing } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    // Set up your arguments and expectations
    const expected = '<li>whatever</li>';
    
    // Call the function you're testing and set the result to a const
    const actual = createListing({
        'name': 'Voqui Blanco',
        'species': 'Boquila trifoliolata',
        'image': 'Boquila-trifoliolata.png',
        'superpower': 'Mimicry',
        'description': 'Native to the temperate rainforests of southern Chile, this mysterious vine is able to mimic the leaves of almost any plant it climbs on. The shape, size, and even color of its leaves transform to match those of plants in its proximity without even needing to physically contact them&mdash;a behavior not known in any other plant! It graciously offers its edible berries to humans and other animals.',
        'price': 999,
        'is-tree': false
    }).outerHTML;

    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
