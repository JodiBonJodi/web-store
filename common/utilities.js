const makePrettyMoney = (number) => {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export default makePrettyMoney;

export function foundById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i]; 
        if (item.id === id) {
            return item;
        }
    }
}

export function calcLineItem(quantity, price) {
    const lineItemTotal = quantity * price;
    return lineItemTotal;
}

export function calcOrderTotal(cart, creatures) {
    let orderTotal = 0;
        cart.forEach(orderItem) => {
        const creature = foundById(creatures, orderItem.id);
        const creatureTotal = calcLineItem(orderItem.quantity, creature.price);
        orderTotal = orderTotal + creatureTotal;
    };
};
        
//     });

//     for (let i = 0; i < cart.length; i++) {
//         const orderItem = cart[i];
//         const creature = foundById(creatures, orderItem.id);
//         const creatureTotal = calcLineItem(orderItem.quantity, creature.price);
//         orderTotal = orderTotal + creatureTotal;
//     }
//     return makePrettyMoney(orderTotal);
// }
