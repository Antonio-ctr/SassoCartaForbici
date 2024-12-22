//Funzione per la mossa del computer
function ComputerChoise()
{
    const scelte = ['Sasso', 'Carta', 'Forbici'];
    const sceltaComputer = Math.floor(Math.random() * scelte.length);
    return scelte[sceltaComputer];
}

//Funzione per determinare il vincitore
function Vincitore(sceltaPlayer, sceltaComputer)
{
    if(sceltaPlayer === sceltaComputer)
    {
        return 'Pareggio!';
    }
    else if
    (
        (sceltaPlayer === 'Sasso' && sceltaComputer === 'Carta') ||
        (sceltaPlayer === 'Carta' && sceltaComputer === 'Forbici') ||
        (sceltaPlayer === 'Forbici' && sceltaComputer === 'Sasso')
    )
    {
        return 'Hai perso!';
    }
    else
    {
        return 'Hai vinto!';
    }
}