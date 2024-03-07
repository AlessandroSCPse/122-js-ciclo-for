// MILESTONE 2
// Scriviamo nell'html 
// tutti i numeri da 0 a 100

// Mi servono tutti i numeri da 0 a 100
const numbContainer = document.querySelector('#numbers-container');

for(let i = 0; i <= 100; i++) {
    // Per ogni numero creo la li e la appendo al contenitore
    console.log(i);
    const newLi = `<div class="box">${i}</div>`;
    numbContainer.innerHTML += newLi;
}