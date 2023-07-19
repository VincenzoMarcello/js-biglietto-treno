// * Messaggio di accoglienza

alert("Benvenuto :)");

// * Chiedo all'utente quanti chilometri deve fare

const userKm = parseFloat(prompt("Quanti km devi fare?"));

// * Chiedo all'utente quanti anni ha

const age = parseInt(prompt("Quanti anni hai?"));

// * Moltiplico il numero di km per 0.21

let price = userKm * 0.21;

// * SE ha meno di 18 anni applico uno sconto del 20%

if (age < 18) {
  price = price * 0.8;
}

// * ALTRIMENTI SE ha più di 65 anni applico uno sconto del 40%
else if (age >= 65) {
  price = price * 0.6;
}

const finalPrice = price.toFixed(2);

// * STAMPO IL BIGLETTO

document.getElementById("ticket-price").innerHTML = ` 
  <h3>Ecco il tuo biglietto sono ${finalPrice} €</h3>`;
