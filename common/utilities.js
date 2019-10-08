const makePrettyMoney = (number) => {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export default makePrettyMoney;
