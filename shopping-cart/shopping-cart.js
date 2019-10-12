import creatures from '../data/creatures.js';
import { foundById } from '../common/utilities.js';
import renderTableRow from './render-table-row.js';
import { calcOrderTotal } from '../common/utilities.js';
import { CART_KEY, initializeCart } from '../products/render-creatures.js';



const stupidVariable = localStorage.getItem(CART_KEY);
const tbody = document.getElementById('table-body');

let parsedCart = JSON.parse(stupidVariable);

if (!parsedCart) {
    initializeCart();
}
for (let i = 0; i < parsedCart.length; i++) {
    const orderItem = parsedCart[i];
    const creature = foundById(creatures, orderItem.id);
    const row = renderTableRow(orderItem, creature);
    tbody.appendChild(row);
}
const totalOrder = document.getElementById('order-total-cell');
totalOrder.textContent = calcOrderTotal(parsedCart, creatures);

const orderButton = document.querySelector('button');
if (parsedCart.length === 0) {
    orderButton.disabled = true;
}

orderButton.addEventListener('click', () => {
    if (parsedCart) {
        alert(JSON.stringify(parsedCart, true,));
    }  
});



export default parsedCart;