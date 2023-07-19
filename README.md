# CALCOLO DEL PREZZO DEL BIGLETTO DEL TRENO

## TRACCIA

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
  L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## SVOLGIMENTO

- Chiedo all'utente quanti chilometri deve fare
- Chiedo all'utente quanti anni ha
- Moltiplico il numero di km per 0.21
  **SE** ha meno di 18 anni applico uno sconto del 20%
  **ALTRIMENTI** **SE** ha più di 65 anni applico uno sconto del 40%
- Stampo il biglietto
