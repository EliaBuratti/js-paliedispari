/* :puntare_a_destra: Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/




const Choice = document.querySelectorAll('#even_odd button');
const userNumber = document.querySelector('.us_number');
const result = document.querySelector('.player_win');

Choice[0].addEventListener('click', function (){

    if (userNumber.value >= 1 && userNumber.value <= 5 ) {

        //inserisco total qui perchè mi premette di generare numeri in maniera casuale ogni volta che clicco
        total = Number(userNumber.value) + randomNum();
        
        userChoice = true; //pari
        console.log(`user input: ${userNumber.value}, somma totale ${total}, scelta utente: PARI`);
        checkResult(userChoice,total);

    } else {
        alert('Inserisci un numero da 1 a 5!');
        window.location.reload(userNumber);
    }

});

Choice[1].addEventListener('click', function (){

    if (userNumber.value >= 1 && userNumber.value <= 5 ) {

        //inserisco total qui perchè mi premette di generare numeri in maniera casuale ogni volta che clicco
        total = Number(userNumber.value) + randomNum();

        userChoice = false; // dispari

        console.log(`user input: ${userNumber.value}, somma totale ${total}, scelta utente: DISPARI`);

        checkResult(userChoice,total);

    } else {
        alert('Inserisci un numero da 1 a 5!');
        window.location.reload(userNumber);
    }
});

function randomNum (genRandomNum) {

    genRandomNum = Math.floor(Math.random()* 5) + 1;
    return genRandomNum;
};

function checkResult () {

    if (total % 2 === 0 && userChoice == true) {
        winner = 'User'

    } else if (total % 2 !== 0 && userChoice === false) {
        winner = 'User'
       
    } else {
        winner = 'PC'
    };

    result.innerHTML = `La somma totale è: ${total}. Il vicitore é: ${winner}`;
};





























/*:puntare_a_destra:  Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
:boolean-hug: Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
non partiamo a bomba con la scrittura delle funzioni, ma prima scriviamo la logica come facciamo di solito, poi passiamo al refactoring e cerchiamo di capire cosa sia meglio creare come funzione. */


