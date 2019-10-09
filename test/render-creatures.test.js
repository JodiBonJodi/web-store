// IMPORT MODULES under test here:
import renderCreatures from '../products/render-creatures.js';
// import renderTableRow from '../shopping-cart/render-table-row.js';
import { foundById, calcLineItem } from '../common/utilities.js'; 
import creatures from '../data/creatures.js';
import renderTableRow from "../shopping-cart/render-table-row.js"

// import example from '../src/example.js';

const test = QUnit.test;

test('test to see if we can render the creatures to the shopping page', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const vampire = {
        id: 'Vampire',
        name: 'Louis de Pointe du Lac',
        image: 'louis-square.jpg',
        description: 'Will suck your blood for food and fun.',
        category: 'Creatures that will kill you',
        price: 1500,
    };

    const expected = '<li class="Creatures that will kill you" title="Will suck your blood for food and fun."><img src="../assets/louis-square.jpg" alt="Vampire image"><div class="caption"><h3>Louis de Pointe du Lac</h3><p class="price">$1500.00</p><button class="buy-me" value="Vampire">Add</button></div></li>';
    //Act 
    // Call the function you're testing and set the result to a const
    const creatureTime = renderCreatures(vampire);
    const html = creatureTime.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});


const test2 = QUnit.test;

test2('test to see if this will render a row in our table', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const vampire = {
        id: 'Vampire',
        name: 'Louis de Pointe du Lac',
        image: 'louis-square.jpg',
        description: 'Will suck your blood for food and fun.',
        category: 'Creatures that will kill you',
        price: 1500,
    };

    const vampireOrder = {
        id: 'vampire',
        quantity: 3,
    };

    const expected = '<tr><td>Louis de Pointe du Lac</td><td>3</td><td>$1,500.00</td><td>$4,500.00</td></tr>';
    //Act 
    // Call the function you're testing and set the result to a const
    const renderedRow = renderTableRow(vampireOrder, vampire);
    const html = renderedRow.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});

const test3 = QUnit.test;

test3('test finds an item in an array based on its id and checks to see if it matches another specific id ', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const id = 'Vampire';
    const expected = 'Vampire';

    //Act 
    // Call the function you're testing and set the result to a const
    const foundCreature = foundById(creatures, id);
    //Assert
    // Make assertions about what is expected valid result
    // assert.ok(foundCreature);
    assert.equal(foundCreature.id, expected);
});

const test4 = QUnit.test;


test4('test finds an item in an array based on its id and checks to see if it matches another specific id ', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 22;
    const price = 5;
    const expected = '$110.00';

    //Act 
    // Call the function you're testing and set the result to a const
    const lineItemTotal = calcLineItem(quantity, price);
    //Assert
    console.log(lineItemTotal);
    console.log(calcLineItem(quantity, price));
    // Make assertions about what is expected valid result
    assert.equal(lineItemTotal, expected);
});