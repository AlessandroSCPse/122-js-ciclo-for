// MILESTONE 3
// Coloriamo i numeri pari 
// in giallo e i dispari in verde nell'html

// Mi servono tutti i numeri da 0 a 100
const numbContainer = document.querySelector('#numbers-container');

for(let i = 0; i <= 100; i++) {
    // se il numero è pari la classe sarà 'pari'
    // altrimenti la classe sarà 'dispari'
    let evenOrOddClass;
    if(i % 2 === 0) {
        evenOrOddClass = 'pari';
    } else {
        evenOrOddClass = 'dispari';
    }

    // Per ogni numero creo la li e la appendo al contenitore
    const newBox = `<div class="box ${evenOrOddClass}">${i}</div>`;
    numbContainer.innerHTML += newBox;

    // const newBox = document.createElement('div');
    // newBox.innerHTML = i;
    // newBox.classList.add('box');
    // newBox.classList.add(evenOrOddClass);
    // console.log(newBox);
    // numbContainer.append(newBox);
}