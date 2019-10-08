//this is where we are going to loop through the array and show it on the page

import creatures from '../data/creatures.js';
import renderCreatures from './render-creatures.js';

const list = document.getElementById('creatures');


for (let i = 0; i < creatures.length; i++) {
    const creature = creatures[i];
    const creatureListElement = renderCreatures(creature);
    list.appendChild(creatureListElement);
}
