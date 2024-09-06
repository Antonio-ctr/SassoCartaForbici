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
        return 'Pareggio';
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


//Input preso dall'utente in base al pulsante premuto
document.getElementById("sasso").addEventListener("click", 
    function()
    {
        gioco('Sasso'); 
    }
);

document.getElementById("carta").addEventListener("click",
    function()
    {
        gioco('Carta');
    }
);

document.getElementById("forbici").addEventListener("click",
    function()
    {
        gioco('Forbici');
    }
);