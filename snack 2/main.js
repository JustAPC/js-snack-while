// "Controllare che un numero preso in input sia positivo e richiederlo in caso contrario."

let numero = parseInt (prompt ("Inserisci un numero"));

while (numero < 0) {
    numero = parseInt (prompt ("ATTENZIONE! Inserisci un numero positivo!"));
}

console.log (numero)