// Variabile per l'importo totale (credito)
var totalAmount = 1000;

// Funzione per aggiornare il credito visualizzato
function updateCreditDisplay() {
    document.getElementById('totalAmount').textContent = totalAmount;
}

// Funzione per piazzare la scommessa
function placeBet(sceltaPlayer) {
    // Ottieni l'importo della scommessa dall'input
    var betAmount = parseFloat(document.getElementById('betAmount').value);

    // Verifica se la scommessa è valida
    if (betAmount > 0 && betAmount <= totalAmount) {
        // Ottieni la scelta del computer e determina il vincitore
        const sceltaComputer = ComputerChoise();
        const risultato = Vincitore(sceltaPlayer, sceltaComputer);

        // Aggiorna l'importo totale in base al risultato
        if (risultato === 'Hai vinto!') {
            totalAmount += betAmount; // Aggiungi l'importo scommesso in caso di vittoria
        } else if (risultato === 'Hai perso!') {
            totalAmount -= betAmount; // Sottrai l'importo scommesso in caso di perdita
        } else {
            totalAmount = totalAmount; // Non modifica l'importo totale in caso di pareggio
        }

        // Aggiorna la visualizzazione del credito rimanente
        updateCreditDisplay();

        // Mostra il risultato della partita
        document.getElementById('risultato').innerText = `Hai scelto ${sceltaPlayer}.\n Il computer ha scelto ${sceltaComputer}.\n ${risultato}`;
    } else {
        // Mostra un messaggio di errore se la scommessa non è valida
        document.getElementById('risultato').textContent = "Importo non valido! Assicurati che sia tra 0 e " + totalAmount + " €.";
    }
}

// Inizializza la visualizzazione del credito al caricamento della pagina
updateCreditDisplay();
