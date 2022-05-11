// genera un array di 10 numeri casuali range 1- 100, ma stavolta senza doppioni

const numeriC = [ ]

while ( numeriC.length < 10) {
        let randNum = Math.floor (Math.random()* 100) + 1;
        
        if (!numeriC.includes(randNum )){
            numeriC.push (randNum);
        }
}

console.log(numeriC);