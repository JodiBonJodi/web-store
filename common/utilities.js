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
    console.log(lineItemTotal);
    return makePrettyMoney(lineItemTotal);
}

