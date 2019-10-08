// IMPORT MODULES under test here:
import renderCreatures from '../products/render-creatures.js';
import renderTableRow from '../shopping-cart/render-table-row.js'

// import example from '../src/example.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
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

const test1 = QUnit.test;

test1('test to see if this will render a row in our table', function(assert) {
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
        quantity: 2,
    }

    const expected = '<tr><td>apple</td><td>4</td><td>1.00</td><td>4.00</td></tr>';
    //Act 
    // Call the function you're testing and set the result to a const
    const renderedRow = renderTableRow(vampireOrder, vampire);
    const html = renderedRow.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});