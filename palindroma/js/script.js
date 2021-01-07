// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// chiedo all'utente di inserire la parola
var userWord = prompt('Inserisci una parola e ti dirò se è palindroma oppure no!');

// creo un ciclo per la lunghezza della parola divisa in lettere
var array= [];
for (var i = 0; i < userWord.length; i++) {
  array.push(userWord[i]);
}
console.log(array);

// creo una funzione con argomento 'word', per capire se la parola è palindroma oppure no
function isPalindroma(word) {
  var reverse = array.reverse();
  console.log(reverse);
  var somma = '';
  for (var i = 0; i < reverse.length; i++) {
    somma += reverse[i]
  }
  console.log(somma);
  if (somma === word) {
    console.log('La parola è polindroma');
    document.getElementById('parola-palindroma').innerHTML = ' POLINDROMA';
  } else {
    console.log('La parola non è polindroma');
    document.getElementById('parola-palindroma').innerHTML = ' NON È POLINDROMA';
  }
}

// eseguo funzione
isPalindroma(userWord);
