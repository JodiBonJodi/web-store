import cart from '../products/render-creatures.js';
import creatures from '../data/creatures.js';
import { foundById } from '../common/utilities.js';
import renderTableRow from './render-table-row.js';
import { calcOrderTotal } from '../common/utilities.js';


const tbody = document.getElementById('table-body');

for (let i = 0; i < cart.length; i++) {
    const orderItem = cart[i];
    const creature = foundById(creatures, orderItem.id);
    const row = renderTableRow(orderItem, creature);

    tbody.appendChild(row);
}

const totalOrder = document.getElementById('order-total-cell');
totalOrder.textContent = calcOrderTotal(cart, creatures);