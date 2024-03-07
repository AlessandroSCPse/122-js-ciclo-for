// MILESTONE 1
// 1- Scriviamo in console tutti i numeri 
// da 0 a 1000 specificando 
// se ogni numero è pari o dispari

// stampare tutti i numeri da 0 a 1000
for(let i = 0; i <= 1000; i++) {
    // Per ogni numero: 
    // stabilire se la i è pari o dispari (il resto della divisione per 2 è 0)
    let evenOrOdd;
    if(i % 2 === 0) {
        evenOrOdd = 'pari';
    } else {
        evenOrOdd = 'dispari';
    }
    // Stampare in console: numero - pariodispari
    console.log(i + ' - ' + evenOrOdd);
}

    