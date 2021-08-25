// Scrivere una funzione che prenda come 
// parametro un array di numeri e restituisca 
// il secondo valore più grande presente nell'array         

const arr = [1, 2, 5, 15, 25];

function getSecondValueBigger(arr) {
    arr.sort((a, b) => b - a);
    console.log(arr[1]);
}

getSecondValueBigger(arr);