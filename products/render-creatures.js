import { foundById } from '../common/utilities.js';
// import creatures from '../data/creatures.js';

const CART_KEY = 'CART_KEY';
let cart = [];

const initializeCart = () => {
    const serializedOrder = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, serializedOrder);
};

function renderCreatures(creature) {
    const li = document.createElement('li');
    li.className = creature.category;
    li.title = creature.description;

    const img = document.createElement('img');
    img.src = '../assets/' + creature.image;
    img.alt = creature.id + ' image';
    li.appendChild(img);

    const captionDiv = document.createElement('div');
    captionDiv.className = 'caption';
    li.appendChild(captionDiv); 

    const h3 = document.createElement('h3');
    h3.textContent = creature.name;
    captionDiv.appendChild(h3);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + creature.price.toFixed(2);
 
    p.textContent = usd;

    captionDiv.appendChild(p);
    
    const button = document.createElement('button');
    button.className = 'buy-me';
    button.textContent = 'Add';
    button.value = creature.id;
    button.addEventListener('click', () => {

        console.log(cart, 'cart at the beginning');

        let currentLocalCart = localStorage.getItem(CART_KEY); 
        console.log(currentLocalCart, 'current local cart before anything');

        if (!currentLocalCart) {
            currentLocalCart = initializeCart();
        } else {
            currentLocalCart = JSON.parse(currentLocalCart);
        }
        console.log(currentLocalCart, 'parsed cart before finding id');

        let orderItem = foundById(cart, creature.id);
        console.log(orderItem, 'order item');

        if (orderItem) {
            orderItem.quantity++;
        } else {
            if (orderItem === null) {
                orderItem = {
                    id: creature.id,
                    quantity: 1,
                };  
                cart.push(orderItem);
            }

        }
        console.log(orderItem, 'order item after increaese');
        // return JSON.stringify(cart);

        console.log(cart);
    });

    captionDiv.appendChild(button);
    
    return li;
}

export default renderCreatures;