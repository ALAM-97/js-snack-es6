// 1. Scrivere una funzione che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// 2. La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbersBetween = (arr, a, b) => 
    numbers.filter(
        (number) => number > a && number < b
        
    );

console.log(numbersBetween(numbers, 2, 7));