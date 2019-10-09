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
};

export function calcLineItem(quantity, price) {
    const lineItemTotal = quantity * price;
    return makePrettyMoney(lineItemTotal);
}

export function calcOrderTotal(cart, creatures) {
    let orderTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        const orderItem = cart[i];
        const creature = foundById(creatures, orderItem.id);
        const creatureTotal = calcLineItem(orderItem.quantity, creature.price);
        console.log(creatureTotal);
        orderTotal = orderTotal + creatureTotal;
        console.log(orderTotal);
    }
    return orderTotal;
}
