// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// stabilisco due funzioni :
// 1) quella per generare un numero randomico;
// 2) quella per il numero pari o dispari;
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

function evenOrOdd(numb1, numb2){
  numb1 = parseInt(numb1);
  numb2 = parseInt(numb2);
  var sum = numb1 + numb2;
  if (sum % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// richiamo id dall'html
var content = document.getElementById('content');
var result = document.getElementById('result');

// chiedere di scegliere pari o dispari
var userPick = prompt('Scegliere tra pari e dispari.');

// impostazioni input inserito dall' utente
if (userPick !== 'pari' && userPick !== 'dispari') {
  alert('Scelta non valida, Riprova.');
} else {
  console.log(userPick);
  content.innerHTML += 'Scelta Utente: ' + userPick + '<br>';
  // chiedere numero da 1 a 5
  var userNumber = prompt('Scegliere un numero da 1 a 5.');
  // impostazioni numero inserito nell'input dall'utente
  if (userNumber < 1 || userNumber > 5 || userNumber.length > 1 || isNaN(userNumber)) {
    alert('Numero non corretto, Riprova');
    content.innerText = '';
  } else {
    content.innerHTML += 'Numero Utente: ' + userNumber + '<br>';
    console.log(userNumber);
    // computer genera un numero random sempre da 1 a 5
    var cpuNumber = randomNumber(1, 5);
    content.innerHTML += 'Numero Computer: ' + cpuNumber + '<br>';
    console.log(cpuNumber);
    // sommiamo i due numeri e vediamo se la somma è pari o dispari
    if (evenOrOdd(userNumber, cpuNumber)) {
      content.innerText += 'La somma dei due numeri è: ' + ' pari.';
    } else {
      content.innerText += 'La somma dei due numeri è: ' + ' dispari.';
    }
    // Dichiariamo chi ha vinto
    if (userPick === 'pari' && evenOrOdd(userNumber, cpuNumber) === true ) {
      result.innerText = 'Grande, Hai Vinto!';
    } else if (userPick === 'dispari' && evenOrOdd(userNumber, cpuNumber) === false) {
      result.innerText = 'Grande, Hai Vinto!';
    } else {
      result.innerText = 'Mi dispiace, Hai Perso..';
    }
  }
}
