/* :puntare_a_destra: Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/



const Choice = document.querySelectorAll('#even_odd button');
const userNumber = document.querySelector('.us_number');

//creo due event listener e a seconda di quale pulsante premo capisco se è pari o dispari

 Choice[0].addEventListener('click', function (){

    //mi assicuro che il range sia compreso tra 1 e 5
    if (userNumber.value >= 1 && userNumber.value <= 5 ) {

        userChoice = 'pari';
        checkResult(userNumber, userChoice);

        //console.log(`user input: ${userNumber.value}, somma totale ${total}, scelta utente: PARI`);

    } else {
        refresh();
    }

});

Choice[1].addEventListener('click', function (){

    //mi assicuro che il range sia compreso tra 1 e 5
    if (userNumber.value >= 1 && userNumber.value <= 5 ) {

        userChoice = 'dispari';
        checkResult(userNumber, userChoice);
        
        //console.log(`user input: ${userNumber.value}, somma totale ${total}, scelta utente: DISPARI`);

    } else {
        refresh();
    }
});

//------------------------------------------------ funzioni ------------------------------------------------------

//sommo i risultati e controllo il vincitore
function checkResult (inputNumUser, inputChoiceUSer) {

    total = Number(inputNumUser.value) + Math.floor(Math.random()* 5) + 1;

    if (total % 2 === 0 && inputChoiceUSer == 'pari') {
        winner = 'User';

    } else if (total % 2 !== 0 && inputChoiceUSer === 'dispari') {
        winner = 'User';
       
    } else {
        winner = 'PC';
    };

    const markupResult = document.querySelector('.player_win');
    markupResult.innerHTML = `La somma totale è: ${total}. Il vincitore é: ${winner}`;
};

//ricarico la pagina e faccio uscire un avviso
function refresh() {
    alert('Inserisci un numero da 1 a 5!');
    window.location.reload();
};

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*:puntare_a_destra:  Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
:boolean-hug: Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
non partiamo a bomba con la scrittura delle funzioni, ma prima scriviamo la logica come facciamo di solito, poi passiamo al refactoring e cerchiamo di capire cosa sia meglio creare come funzione. */

const buttonCheck = document.querySelector('#word button');
const wordInput = document.querySelector('#word input');
const markupWord = document.querySelector('.word_palindrome');

//creo due arry d'appoggio vuote
let word = []
let wordReverse = [];

buttonCheck.addEventListener('click', function() {

    //richiamo la funzione per verificare la parola
    checkPalindrome(wordInput);

    //stampo in pagina l'esito
    markupWord.innerHTML = `La parola che hai digitato ${checkPalindrome(wordInput)}`;

    //svuoto l'array cosi da poter inserire altre parole senza dove ricaricare la pagina per svuotarlo
    word = [];
    wordReverse = [];

});


//--------------------------------------------------------------------------- funzioni ----------------------------------------------------------------------------------------

//verifico che la parola inserita sia palindroma 
function checkPalindrome (wordInput) {

    //scompongo la parola inserita e la pusho nell'array in senso crescente  (si potrebbe usare .split('') che mi restituisce l'array scomposto ==> ['e', 's', 'e', 'm', 'p', 'i', 'o']. )
    for (let i = 0 ; i <= wordInput.value.length -1 ; i++) {
    
        word.push(wordInput.value[i]); 
    };
    
    //scompongo la parola inserita e la pusho nell'array in senso DEcrescente  (si potrebbe usare arrayDaDividereRovesciare.split('').reverse().join(''); che mi restituisce l'array scomposto ==> ['o', 'i', 'p', 'm', 'e', 's', 'e']. )
    for (let i = wordInput.value.length -1; i >= 0 ; i--) {
        
        wordReverse.push(word[i]); 
    };

    resultWord = 'non è palindroma';

    /* se la lunghezza di "i" corrisponde alla lunghezza della parola inserita 
    (+1 perchè la i conta da 0 come l'array, mentre lenght parte da 1) 
    E le stringhe dei due array sono uguali in ogni posizione */
    
    for (let i = 0; word[i] === wordReverse[i] && i < word.length ; i++) {

        if (i + 1 === word.length) {
            resultWord = 'è palindroma';
        };
        
    };

    //altrimenti lascia stampato non è palindroma

    return resultWord;
};


