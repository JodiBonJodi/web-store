import { foundById } from '../common/utilities.js';
// import creatures from '../data/creatures.js';

export const CART_KEY = 'CART_KEY';


export const initializeCart = () => {
    const serializedOrder = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, serializedOrder);
};

let cart = [];

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


        let currentLocalCart = localStorage.getItem(CART_KEY); 
        
        if (!currentLocalCart) {
            currentLocalCart = initializeCart();
            currentLocalCart = localStorage.getItem(CART_KEY);
        } 

        let orderItem = foundById(cart, creature.id);
        if (!orderItem) {
            orderItem = {
                id: button.value,
                quantity: 1,
            };  
            cart.push(orderItem);
        } else {
            orderItem.quantity++;
        }

        const stringyCreature = JSON.stringify(cart);
        localStorage.setItem(CART_KEY, stringyCreature);
    });

    captionDiv.appendChild(button);
    
    return li;
}

export default renderCreatures;