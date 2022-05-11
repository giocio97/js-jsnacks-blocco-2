// genera un array di 10 numeri casuali range 1- 100, ma stavolta senza doppioni

const numeriC = [ ];

while ( numeriC.length < 10) {
        let randNum = Math.floor (Math.random()* 100) + 1;
        
        if (!numeriC.includes(randNum )){
            numeriC.push (randNum);
        }
}

console.log(numeriC);


// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

const myArr = [ ];

// chiedere all'utente un numero da inserire nell'Array
let numUser = parseInt(prompt("inserisci un numero"));
myArr.push (numUser);

console.log( myArr);



// chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

let sum = 0;

for (let i = 0; i < myArr.length; i++) {
    sum += myArr[i];
    console.log(sum);

    if (sum < 50){
        let numUser = parseInt(prompt("inserisci un numero"));
        myArr.push (numUser);
    }
}


