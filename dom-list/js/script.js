const ulContainer = document.querySelector('#list');
console.log(ulContainer);

for(let i = 0; i <= 50; i++) {
    // // Creare una nuova li
    // const newLi = `<li class="red">${i}</li>`;
    // // appenderla al container
    // ulContainer.innerHTML += newLi;

    // Creare una nuova li
    // Creo la li
    const newLi = document.createElement('li');
    // Popolo il suo contenuto
    newLi.innerHTML = i;
    // Aggiungo la classe red
    newLi.classList.add('red');
    // appenderla al container
    ulContainer.append(newLi);
}

// let newLi = `<li>1</li>`;
// ulContainer.innerHTML += newLi;

// newLi = `<li>2</li>`;
// ulContainer.innerHTML += newLi;

// newLi = `<li>3</li>`;
// ulContainer.innerHTML += newLi;
