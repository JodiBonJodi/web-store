

function renderCreatures(creature) {
    const li = document.createElement('li');
    li.className = creature.category;
    li.title = creature.description;

    const img = document.createElement('img');
    img.src = '../assets/' + creature.image;
    img.alt = creature.id + ' image';
    li.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = creature.name;
    li.appendChild(h3);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + creature.price.toFixed(2);
    // const usd = creature.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = creature.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderCreatures;


