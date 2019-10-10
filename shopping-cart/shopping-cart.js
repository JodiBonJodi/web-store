// import cart from '../products/render-creatures.js';
import creatures from '../data/creatures.js';
import { foundById } from '../common/utilities.js';
import renderTableRow from './render-table-row.js';
import { calcOrderTotal } from '../common/utilities.js';

const stupidVariable = localStorage.getItem('CART_KEY');
const tbody = document.getElementById('table-body');


let parsedCart = JSON.parse(stupidVariable);

for (let i = 0; i < parsedCart.length; i++) {
    const orderItem = parsedCart[i];
    const creature = foundById(creatures, orderItem.id);
    const row = renderTableRow(orderItem, creature);
    tbody.appendChild(row);
}

const totalOrder = document.getElementById('order-total-cell');
totalOrder.textContent = calcOrderTotal(parsedCart, creatures);


export default parsedCart;