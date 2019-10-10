

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

    captionDiv.appendChild(button);

    return li;
}

export default renderCreatures;