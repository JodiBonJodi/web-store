import makePrettyMoney from '../common/utilities.js';


function renderTableRow(lineItem, creature) {
   
    const tableRow = document.createElement('tr'); //makes row
        
//adding data to the rows
    const nameData = document.createElement('td');
    nameData.textContent = creature.name;
    tableRow.appendChild(nameData);

    const quantityData = document.createElement('td');
    quantityData.textContent = lineItem.quantity;
    tableRow.appendChild(quantityData);

    const priceData = document.createElement('td');
    priceData.textContent = makePrettyMoney(creature.price);
    tableRow.appendChild(priceData);

    const totalData = document.createElement('td');
    const total = lineItem.quantity * creature.price;
    totalData.textContent = makePrettyMoney(total);
    tableRow.appendChild(totalData);

    return tableRow;
}

export default renderTableRow;