import cart from '../data/cart.js';
import creatures from '../data/creatures.js';
import { foundById } from '../common/utilities.js';
import renderTableRow from './render-table-row.js';


const tbody = document.getElementById('table-body');

for (let i = 0; i < cart.length; i++) {
    const creatureOrder = cart[i];
    const creature = foundById(creatures, creatureOrder.id);
    const row = renderTableRow(creatureOrder, creature);

    tbody.appendChild(row);
}