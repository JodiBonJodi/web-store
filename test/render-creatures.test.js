// IMPORT MODULES under test here:
import renderCreatures from '../products/render-creatures.js';

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
